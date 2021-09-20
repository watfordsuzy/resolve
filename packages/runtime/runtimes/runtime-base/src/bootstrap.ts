import debugLevels from '@resolve-js/debug-levels'

import bootstrapOne from './bootstrap-one'
import shutdownOne from './shutdown-one'
import type { BootstrapRuntime } from './types'

const log = debugLevels('resolve:runtime:bootstrap')

export const bootstrap = async (runtime: BootstrapRuntime) => {
  log.debug('bootstrap started')
  const {
    upstream,
    eventStoreAdapter,
    eventSubscriberScope,
    eventListeners,
    eventSubscriber,
    getEventSubscriberDestination,
    ensureQueue,
    deleteQueue,
  } = runtime
  const promises = []

  const existingEventSubscribers = (
    await eventStoreAdapter.getEventSubscribers({
      applicationName: eventSubscriberScope,
    })
  ).map(({ eventSubscriber }) => eventSubscriber)

  for (const { name, eventTypes } of eventListeners.values()) {
    promises.push(
      bootstrapOne({
        applicationName: eventSubscriberScope,
        eventstoreAdapter: eventStoreAdapter,
        eventSubscriber,
        name,
        eventTypes,
        destination: getEventSubscriberDestination(name),
        upstream,
        ensureQueue,
      })
    )
  }

  for (const name of existingEventSubscribers.filter(
    (name) => !eventListeners.has(name)
  )) {
    promises.push(
      shutdownOne({
        eventSubscriberScope,
        eventStoreAdapter,
        eventSubscriber,
        name,
        upstream,
        deleteQueue,
        soft: true,
      })
    )
  }

  await Promise.all(promises)

  log.debug('bootstrap successful')

  return 'ok'
}

import debugLevels from '@resolve-js/debug-levels'

import shutdownOne from './shutdown-one'

const log = debugLevels('resolve:runtime:shutdown')

const shutdown = async (resolve, lambdaContext, { soft }) => {
  log.debug('shutdown started')
  const promises = []
  for (const { name } of resolve.eventListeners.values()) {
    promises.push(
      shutdownOne({
        applicationName: resolve.eventSubscriberScope,
        eventstoreAdapter: resolve.eventstoreAdapter,
        eventSubscriber: resolve.eventSubscriber,
        name,
        upstream: resolve.upstream,
        deleteQueue: resolve.deleteQueue,
        soft,
      })
    )
  }

  await Promise.all(promises)

  log.debug('shutdown successful')

  return 'ok'
}

export default shutdown
export type JsonPrimitive = string | number | boolean | null
export type JsonMap = {
  [member: string]: JsonPrimitive | JsonArray | JsonMap
}
export type JsonArray = Array<JsonPrimitive | JsonArray | JsonMap>
export type JsonResult = {
  [member: string]: any
}
export type SearchCondition =
  | {
      $and: Array<SearchCondition>
    }
  | {
      $or: Array<SearchCondition>
    }
  | {
      $not: SearchCondition
    }
  | {
      [member: string]: JsonPrimitive
    }
  | {
      [member: string]: {
        $eq: JsonPrimitive
      }
    }
  | {
      [member: string]: {
        $ne: JsonPrimitive
      }
    }
  | {
      [member: string]: {
        $lte: JsonPrimitive
      }
    }
  | {
      [member: string]: {
        $gte: JsonPrimitive
      }
    }
  | {
      [member: string]: {
        $lt: JsonPrimitive
      }
    }
  | {
      [member: string]: {
        $gt: JsonPrimitive
      }
    }
    
export type ResolveStore = {
  defineTable: (
    tableName: string,
    tableDeclaration: {
      indexes: {
        [member: string]: 'string' | 'number'
      }
      fields: Array<string>
    }
  ) => Promise<void>
  find: (
    tableName: string,
    searchCondition: SearchCondition,
    projectionCondition?: {
      [member: string]: 1 | 0
    },
    sortCondition?: {
      [member: string]: 1 | -1
    },
    skip?: number,
    limit?: number
  ) => Promise<Array<JsonResult>>
  findOne: (
    tableName: string,
    searchCondition: SearchCondition,
    projectionCondition?: {
      [member: string]: 1 | 0
    }
  ) => Promise<JsonResult | null>
  count: (
    tableName: string,
    searchCondition: SearchCondition
  ) => Promise<number>
  insert: (tableName: string, document: JsonMap) => Promise<void>
  update: (
    tableName: string,
    searchCondition: SearchCondition,
    updateCondition:
      | {
          $set: {
            [member: string]: JsonMap | JsonArray | JsonPrimitive
          }
        }
      | {
          $unset: {
            [member: string]: true
          }
        }
      | {
          $inc: {
            [member: string]: number | string
          }
        },
    updateOptions?: {
      upsert?: boolean
    }
  ) => Promise<void>
  delete: (tableName: string, searchCondition: SearchCondition) => Promise<void>
}

export type EncryptionLike = {
  encrypt<Input, Output>(input: Input) : Output,
  decrypt<Input, Output>(input: Input) : Output 
}

export type PerformanceTracerLike = {
  getSegment() : {
    addNewSubsegment(arg0: string): {
      addAnnotation(arg0: string, arg1: string): void,
      addError(error: Error): void,
      close(): void
    } | null
  } | null
}

export type ReadModelCursor = string | null // TODO brand type
export type ReadModelEvent = {
  aggregateId: string
  aggregateVersion: number
  timestamp: number
  type: string
  payload: JsonMap | JsonArray | JsonPrimitive
}

export type EventstoreAdapterLike = {
  loadEvents(filter:
    { eventTypes: Array<ReadModelEvent["type"]>,
      eventsSizeLimit: number,
      limit: number,
      cursor: ReadModelCursor
    }
  ): Array<ReadModelEvent>,
  getNextCursor(
    previousCursor: ReadModelCursor,
    appliedEvents: Array<ReadModelEvent>
  ): Promise<ReadModelCursor>,
}

export type CommonAdapterPool = {
  performanceTracer: PerformanceTracerLike,
  eventstoreAdapter: EventstoreAdapterLike
}

export type CommonAdapterOptions = {
  performanceTracer: PerformanceTracerLike,
  eventstoreAdapter: EventstoreAdapterLike
}

export type ResolveStoreToStoreApi<AdapterPool extends CommonAdapterPool, Method> = Method extends ((...args: infer Args) => infer Result)
  ? (adapterPool: AdapterPool, readModelName: string, ...args: Args) => Result
  : never

export type StoreApi<AdapterPool extends CommonAdapterPool> = {
  [K in keyof ResolveStore]: ResolveStoreToStoreApi<AdapterPool, ResolveStore[K]>
}

export type StoreApiToReadModelStore<AdapterPool extends CommonAdapterPool, StoreMethodType> = 
  StoreMethodType extends (adapterPool: AdapterPool, readModelName: string, ...args: infer Args) => infer Result
    ? (...args: Args) => Result
    : never

export type ReadModelStoreImpl<AdapterPool extends CommonAdapterPool, CurrentStoreApi> = ({
  [K in keyof CurrentStoreApi]: StoreApiToReadModelStore<AdapterPool, CurrentStoreApi[K]>
} & {
  performanceTracer: PerformanceTracerLike
})

export type FunctionLike = (...args: any[]) => any

export type ReadModelStore<CurrentStoreApi> = CurrentStoreApi extends StoreApi<infer AdapterPool>
  ? ReadModelStoreImpl<AdapterPool, CurrentStoreApi>
  : never

export type WithPerformanceTracerMethod = <AdapterPool extends CommonAdapterPool, MethodImpl extends FunctionLike>(
  pool: BaseAdapterPool<AdapterPool>,
  methodName: string,
  methodImpl: MethodImpl 
) => MethodImpl

export type ReadModelLedger = {
  EventTypes: Array<ReadModelEvent["type"]>,
  AggregateIds: Array<ReadModelEvent["aggregateId"]>,
  Cursor: ReadModelCursor,
  SuccessEvent: ReadModelEvent | null,
  FailedEvent: ReadModelEvent | null,
  Errors: Array<Error> | null,
  Properties: Record<string, string> | null,
  Schema: Record<string, string> | null
}

export type MethodNext = () => Promise<void>
export type MethodGetRemainingTime = () => number
export type MethodProvideLedger = (ledger: ReadModelLedger) => Promise<void>
export type MethodGetEncryption = () => ((event: ReadModelEvent) => EncryptionLike)

export enum ReadModelRunStatus {
  DELIVER = 'deliver',
  SKIP = 'skip',
  ERROR = 'error'
}

export type ReadModelStatus = {
  eventSubscriber: string,
  properties: Record<string, string> | null,
  deliveryStrategy: 'inline-ledger',
  successEvent: ReadModelEvent | null,
  failedEvent: ReadModelEvent | null,
  errors: Array<Error> | null,
  cursor: ReadModelCursor,
  status: ReadModelRunStatus
}

export type ProjectionMethod<AdapterPool extends CommonAdapterPool> = (
  projectionStore: StoreApi<AdapterPool>,
  projectionEvent: ReadModelEvent,
  projectionEncryption?: EncryptionLike
) => Promise<void>

export type AdapterConnection<AdapterPool extends CommonAdapterPool, AdapterOptions extends CommonAdapterOptions> = {
  connect(pool: AdapterPool, options: AdapterOptions): Promise<void>,

  disconnect(pool: AdapterPool): Promise<void>,
}

export type AdapterOperations<AdapterPool extends CommonAdapterPool> = {
  subscribe(
    pool: AdapterPool,
    readModelName: string,
    eventTypes: Array<ReadModelEvent["type"]>,
    aggregateIds: Array<ReadModelEvent["aggregateId"]>
  ): Promise<void>,

  unsubscribe(pool: AdapterPool, readModelName: string): Promise<void>,

  resubscribe(
    pool: AdapterPool,
    readModelName: string,
    eventTypes: Array<ReadModelEvent["type"]>,
    aggregateIds: Array<ReadModelEvent["aggregateId"]>
  ): Promise<void>,

  deleteProperty(
    pool: AdapterPool,
    readModelName: string,
    key: string
  ): Promise<void>,

  getProperty(
    pool: AdapterPool,
    readModelName: string,
    key: string
  ): Promise<string | null>,

  listProperties(
    pool: AdapterPool,
    readModelName: string
  ): Promise<
    Record<string, string> | null
  >,

  setProperty(
    pool: AdapterPool,
    readModelName: string,
    key: string,
    value: string
  ): Promise<void>,

  resume(
    pool: AdapterPool,
    readModelName: string,
    next: MethodNext
  ): Promise<void>,

  pause(
    pool: AdapterPool,
    readModelName: string
  ): Promise<void>,

  reset(
    pool: AdapterPool,
    readModelName: string
  ): Promise<void>,

  status(
    pool: AdapterPool,
    readModelName: string
  ): Promise<ReadModelStatus | null>,

  build(
    pool: AdapterPool,
    readModelName: string,
    store: StoreApi<AdapterPool>,
    projection: Record<ReadModelEvent["type"], ProjectionMethod<AdapterPool>>,
    next: MethodNext,
    getVacantTimeInMillis: MethodGetRemainingTime,
    provideLedger: MethodProvideLedger,
    getEncryption: MethodGetEncryption

  ): Promise<void>,
}

export type AdapterImplementation<AdapterPool extends CommonAdapterPool, AdapterOptions extends CommonAdapterOptions> = 
  AdapterConnection<AdapterPool, AdapterOptions> &
  AdapterOperations<AdapterPool> &
  StoreApi<AdapterPool>

export type BaseAdapterPool<AdapterPool extends CommonAdapterPool> = {
  commonAdapterPool: CommonAdapterPool,
  adapterPoolMap: Map<ReadModelStore<StoreApi<AdapterPool>>, AdapterPool>,
  withPerformanceTracer: WithPerformanceTracerMethod,
  performanceTracer: PerformanceTracerLike,
}

export type UnPromise<T> = T extends Promise<infer R> ? R : T

export type ConnectMethod<AdapterPool extends CommonAdapterPool> = (
  readModelName: string
) => Promise<ReadModelStore<StoreApi<AdapterPool>>>

export type WrapConnectMethod = <AdapterPool extends CommonAdapterPool, AdapterOptions extends CommonAdapterOptions>(
  pool: BaseAdapterPool<AdapterPool>,
  connect: AdapterConnection<AdapterPool, AdapterOptions>["connect"],
  storeApi: StoreApi<AdapterPool>,
  options: AdapterOptions,
) => ConnectMethod<AdapterPool>

export type DisconnectMethod<AdapterPool extends CommonAdapterPool> = (
  store: ReadModelStore<StoreApi<AdapterPool>>
) => Promise<void>

export type WrapDisconnectMethod = <AdapterPool extends CommonAdapterPool, AdapterOptions extends CommonAdapterOptions>(
  pool: BaseAdapterPool<AdapterPool>,
  disconnect: AdapterConnection<AdapterPool, AdapterOptions>["disconnect"],
) => DisconnectMethod<AdapterPool>

export type DisposeMethod = () => Promise<void>

export type WrapDisposeMethod = <AdapterPool extends CommonAdapterPool, AdapterOptions extends CommonAdapterOptions>(
  pool: BaseAdapterPool<AdapterPool>,
  disconnect: AdapterConnection<AdapterPool, AdapterOptions>["disconnect"]
) => DisposeMethod

export type WrappedAdapterOperationParameters<AdapterPool extends CommonAdapterPool, Method extends FunctionLike> =
  Method extends ((pool: AdapterPool, readModelName: string, ...args: infer Args) => infer Result)
    ? Args
    : never

export type WrapOperationMethod = <AdapterPool extends CommonAdapterPool, MethodImpl extends FunctionLike>(
  pool: BaseAdapterPool<AdapterPool>,
  operationName: string,
  operationFunc: MethodImpl
) => (
  store: ReadModelStore<StoreApi<AdapterPool>>,
  readModelName: string,
  ...args: WrappedAdapterOperationParameters<AdapterPool, MethodImpl>
) => ReturnType<MethodImpl>

export type BaseAdapterImports = {
  withPerformanceTracer: WithPerformanceTracerMethod,
  wrapConnect: WrapConnectMethod,
  wrapDisconnect: WrapDisconnectMethod,
  wrapDispose: WrapDisposeMethod,
  wrapOperation: WrapOperationMethod
}

export type AdapterOperationsToAdapterApi<AdapterPool extends CommonAdapterPool, AdapterOperationMethodType> = 
  AdapterOperationMethodType extends (
    adapterPool: AdapterPool,
    readModelName: string,
    ...args: infer Args
  ) => infer Result
    ? (
        store: ReadModelStore<StoreApi<AdapterPool>>,
        readModelName: string,
        ...args: Args
      ) => Result
    : never

export type AdapterApi<AdapterPool extends CommonAdapterPool> = {
  [K in keyof AdapterOperations<AdapterPool>]: AdapterOperationsToAdapterApi<AdapterPool, AdapterOperations<AdapterPool>[K]>
} & {
   connect: ConnectMethod<AdapterPool>,
   disconnect: DisconnectMethod<AdapterPool>,
   dispose: DisposeMethod
}

export type AdapterOperationParameters<
  AdapterPool extends CommonAdapterPool,
  MethodImpl extends FunctionLike
> = Parameters<
  (store: ReadModelStore<StoreApi<AdapterPool>>, 
   readModelName: string,
   ...args: WrappedAdapterOperationParameters<AdapterPool, MethodImpl>   
  ) => void
>

export type ObjectKeys<T> = 
  T extends object ? (keyof T)[] :
  T extends number ? [] :
  T extends Array<infer R> | string ? string[] :
  never



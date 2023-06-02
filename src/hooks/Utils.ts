import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { CANCELLED_API_REQUEST_MESSAGE } from '../constants';
import { APIContext } from '../contexts/APIContext';
import {
  PaginatedRequestParams,
  PaginatedResponseData,
  RecordFinderRequestController,
  TAPIFunction,
  TaggedAPIRequest,
} from '../interfaces/Utils';
import { usePolling } from './Polling';

export interface QueryOptions {
  loadOnMount?: boolean;
  autoSync?: boolean;
  revalidationKey?: string;
}

export type GetStaleWhileRevalidateFunction<T> = (data: T) => void;

//#region useAPIService
export const useAPIService = <T>(defaultValue: T, loadOnMount = false) => {
  const baseDefaultValue = defaultValue;
  const isComponentMountedRef = useRef(true);
  const taggedAPIRequestsRef = useRef<TaggedAPIRequest[]>([]);
  const { call } = useContext(APIContext);
  const [record, setRecord] = useState<T>(defaultValue);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(loadOnMount);
  const [busy, setBusy] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const load = useCallback(
    async (apiFunction?: TAPIFunction, tag?: string, polling = false) => {
      if (apiFunction) {
        setErrorMessage('');
        setLoaded(false);
        setLoading(true);
        const taggedAPIRequest = (() => {
          if (tag) {
            return {
              id: tag,
              loading: true,
            } as TaggedAPIRequest;
          }
        })();
        taggedAPIRequest && taggedAPIRequestsRef.current.push(taggedAPIRequest);
        const response = await call(() => (apiFunction as TAPIFunction)())
          .then(async (payload) => {
            const response = await payload;
            if (response != null) {
              if (isComponentMountedRef.current) {
                setRecord(response);
              }
            }
            if (isComponentMountedRef.current) {
              setLoaded(true);
            }
            return payload;
          })
          .catch((err) => {
            if (
              !String(err.message).match(CANCELLED_API_REQUEST_MESSAGE) &&
              !polling
            ) {
              setErrorMessage(err.message);
            }
          });
        if (
          taggedAPIRequest &&
          taggedAPIRequestsRef.current.includes(taggedAPIRequest)
        ) {
          taggedAPIRequestsRef.current.splice(
            taggedAPIRequestsRef.current.indexOf(taggedAPIRequest),
            1
          );
        }
        if (isComponentMountedRef.current) {
          setLoading(false);
        }
        return response;
      }
    },
    [call]
  );

  const resetRef = useRef(() => {
    setRecord(baseDefaultValue);
    setLoaded(false);
    setLoading(loadOnMount);
    setBusy(false);
    setErrorMessage('');
  });

  useEffect(() => {
    isComponentMountedRef.current = true;
    return () => {
      isComponentMountedRef.current = false;
    };
  }, []);

  return {
    errorMessage,
    setErrorMessage,
    load,
    loaded,
    loading,
    record,
    setLoaded,
    setRecord,
    busy,
    setBusy,
    taggedAPIRequests: taggedAPIRequestsRef.current,
    reset: resetRef.current,
  };
};
//#endregion

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

//#region useMutation
export const useMutation = <MutateFunction extends TAPIFunction>(
  inputMutate: MutateFunction
) => {
  const {
    load: baseMutate,
    loading: mutating,
    record: mutatedRecord,
    loaded: mutated,
    setLoaded: setMutated,
    ...rest
  } = useAPIService<Awaited<ReturnType<MutateFunction>> | null>(null);

  const inputMutateRef = useRef(inputMutate);
  inputMutateRef.current = inputMutate;

  const mutate = useCallback(
    (...args: any) => {
      return baseMutate(() => inputMutateRef.current(...args));
    },
    [baseMutate]
  ) as MutateFunction;

  return {
    mutate,
    mutating,
    mutated,
    setMutated,
    mutatedRecord,
    ...rest,
  };
};
//#endregion

//#region useCreate
export const useCreate = <CreateFunction extends TAPIFunction>(
  inputCreate: CreateFunction
) => {
  const {
    mutate: create,
    mutating: creating,
    mutated: created,
    setMutated: setCreated,
    mutatedRecord: createdRecord,
    ...rest
  } = useMutation(inputCreate);

  return {
    create,
    creating,
    created,
    setCreated,
    createdRecord,
    ...rest,
  };
};
//#endregion

//#region useUpdate
export const useUpdate = <UpdateFunction extends TAPIFunction>(
  inputUpdate: UpdateFunction
) => {
  const { create, creating, created, createdRecord, setCreated, ...rest } =
    useCreate(inputUpdate);

  return {
    update: create,
    updating: creating,
    updated: created,
    updatedRecord: createdRecord,
    setUpdated: setCreated,
    ...rest,
  };
};
//#endregion

//#region useDelete
export const useDelete = <DeleteFunction extends TAPIFunction>(
  inputDelete: DeleteFunction
) => {
  const {
    mutate: _delete,
    mutating: deleting,
    mutated: deleted,
    setMutated: setDeleted,
    mutatedRecord: deletedRecord,
    ...rest
  } = useMutation(inputDelete);

  return {
    _delete,
    deleting,
    deleted,
    setDeleted,
    deletedRecord,
    ...rest,
  };
};
//#endregion

//#region useRecord
export interface UseRecordOptions<LoadableRecord> extends QueryOptions {
  defaultValue?: LoadableRecord;
}
export const useRecord = <LoadableRecord>(
  recordFinder?: TAPIFunction<LoadableRecord>,
  {
    defaultValue,
    loadOnMount = true,
    revalidationKey,
  }: UseRecordOptions<LoadableRecord> = {}
) => {
  // Refs
  const isInitialMountRef = useRef(true);
  const recordFinderRef = useRef(recordFinder);
  recordFinderRef.current = recordFinder;

  const {
    load: baseLoad,
    loading,
    errorMessage,
    busy,
    record,
    setRecord,
    ...rest
  } = useAPIService(defaultValue, loadOnMount);

  const load = useCallback(
    (...args: any) => {
      return baseLoad(() => {
        if (recordFinderRef.current) {
          return recordFinderRef.current(...args);
        }
        return Promise.resolve();
      });
    },
    [baseLoad]
  ) as NonNullable<typeof recordFinder>;

  useEffect(() => {
    if (loadOnMount && isInitialMountRef.current) {
      load();
    }
  }, [load, loadOnMount]);

  useEffect(() => {
    if (!isInitialMountRef.current && revalidationKey) {
      load();
    }
  }, [load, revalidationKey]);

  useEffect(() => {
    isInitialMountRef.current = false;
    return () => {
      isInitialMountRef.current = true;
    };
  }, []);

  return {
    load,
    loading,
    errorMessage,
    record: record ?? null,
    setRecord: setRecord as Dispatch<SetStateAction<LoadableRecord | null>>,
    busy,
    ...rest,
  };
};
//#endregion

//#region useRecords
export const useRecords = <LoadableRecord>(
  recordFinder?: TAPIFunction<LoadableRecord[]>,
  { ...inputRest }: QueryOptions = {}
) => {
  const { record, setRecord, ...rest } = useRecord(recordFinder, {
    defaultValue: [],
    ...inputRest,
  });

  return {
    records: record!,
    setRecords: setRecord as Dispatch<SetStateAction<LoadableRecord[]>>,
    ...rest,
  };
};
//#endregion

//#region useCacheableData
export type CacheableDataFinderOptions = {
  getRequestController?: (controller: RecordFinderRequestController) => void;
  getStaleWhileRevalidate?: GetStaleWhileRevalidateFunction<any>;
};
export type CacheableDataFinder<Data> = (
  options: CacheableDataFinderOptions
) => Promise<Data>;
export interface CacheableDataOptions extends QueryOptions {}
export const useCacheableData = <Data>(
  recordFinder?: CacheableDataFinder<Data>,
  { loadOnMount = true, revalidationKey }: CacheableDataOptions = {}
) => {
  // Refs
  const isInitialMountRef = useRef(true);
  const recordFinderRef = useRef(recordFinder);
  recordFinderRef.current = recordFinder;

  const pendingDataRequestControllerRef =
    useRef<RecordFinderRequestController | null>(null);

  const {
    load: baseLoad,
    loading,
    errorMessage,
    record,
    setRecord,
    ...rest
  } = useAPIService(null, loadOnMount);

  const load = useCallback(() => {
    return baseLoad(async () => {
      if (recordFinderRef.current) {
        if (pendingDataRequestControllerRef.current) {
          pendingDataRequestControllerRef.current.cancelRequest();
          pendingDataRequestControllerRef.current = null;
        }

        const responseData = await recordFinderRef
          .current({
            getRequestController: (requestController) => {
              pendingDataRequestControllerRef.current = requestController;
            },
            getStaleWhileRevalidate: (data) => {
              setRecord(data);
            },
          })
          .finally(() => {
            pendingDataRequestControllerRef.current = null;
          });

        return responseData;
      }
    });
  }, [baseLoad, setRecord]);

  useEffect(() => {
    if (loadOnMount && isInitialMountRef.current) {
      load();
    }
  }, [load, loadOnMount]);

  useEffect(() => {
    if (!isInitialMountRef.current && revalidationKey) {
      load();
    }
  }, [load, revalidationKey]);

  useEffect(() => {
    isInitialMountRef.current = false;
    return () => {
      isInitialMountRef.current = true;
    };
  }, []);

  return {
    load,
    loading,
    errorMessage,
    data: record,
    setData: setRecord,
    ...rest,
  };
};
//#endregion

//#region usePaginatedRecords
export type PaginatedRecordsFinderOptions<
  PaginatedResponseDataExtensions extends Record<string, any> = any
> = PaginatedRequestParams & {
  getRequestController?: (controller: RecordFinderRequestController) => void;
  getStaleWhileRevalidate?: GetStaleWhileRevalidateFunction<any>;
  lastLoadedPage?: ResponsePage<any, PaginatedResponseDataExtensions>;
  isLoadingNextPage?: boolean;
};

export type ResponsePage<
  DataRow,
  PaginatedResponseDataExtensions extends Record<string, any> = any
> = PaginatedResponseData<DataRow> & PaginatedResponseDataExtensions;

export type PaginatedRecordsFinder<
  DataRow,
  PaginatedResponseDataExtensions extends Record<string, any> = any
> = (
  options: PaginatedRecordsFinderOptions<PaginatedResponseDataExtensions>
) => Promise<
  ResponsePage<DataRow, PaginatedResponseDataExtensions> | DataRow[]
>;

export const PAGINATION_RECORDS_BASE_REFRESH_INTERVAL = 5000;

export interface PaginatedRecordsOptions<DataRow = any>
  extends PaginatedRequestParams,
    QueryOptions {
  /**
   * The revalidation key. If revalidationKey changes and autoSync is set to true. The records will synchronize
   */
  revalidationKey?: string;
  loadedPagesMap?: Map<number, DataRow[]>;
  canLoadNextPage?: boolean;
  refreshInterval?: number;
}
export const usePaginatedRecords = <
  DataRow,
  PaginatedResponseDataExtensions extends Record<string, any>
>(
  recordFinder: PaginatedRecordsFinder<
    DataRow,
    PaginatedResponseDataExtensions
  >,
  {
    loadOnMount = true,
    limit = 100,
    offset = 0,
    searchTerm,
    loadedPagesMap,
    revalidationKey,
    autoSync = true,
    canLoadNextPage = true,
    refreshInterval,
  }: PaginatedRecordsOptions<DataRow> = {}
) => {
  // Refs
  const isInitialMountRef = useRef(true);
  const pendingRecordRequestControllers = useRef<
    RecordFinderRequestController[]
  >([]);
  const recordFinderRef = useRef(recordFinder);
  recordFinderRef.current = recordFinder;
  const loadedPagesMapRef = useRef(loadedPagesMap);
  loadedPagesMapRef.current = loadedPagesMap;
  const recordsTotalCountRef = useRef(0);
  const hasNextPageRef = useRef(true);
  const limitRef = useRef(limit);
  limitRef.current = limit;
  const offsetRef = useRef(offset);
  offsetRef.current = offset;
  const searchTermRef = useRef(searchTerm);
  searchTermRef.current = searchTerm;

  const lastLoadedPageRef = useRef<
    ResponsePage<DataRow, PaginatedResponseDataExtensions> | undefined
  >(undefined);

  const {
    load: loadFromAPIService,
    loading,
    record: responseData,
    reset: baseReset,
    errorMessage,
    setRecord,
    ...rest
  } = useAPIService<PaginatedResponseData<DataRow> | null>(null, loadOnMount);

  const loadedPages = useMemo(() => {
    return loadedPagesMapRef.current || new Map<number, DataRow[]>();
  }, []);

  type LoadOptions = PaginatedRequestParams & {
    isLoadingNextPage?: boolean;
  };
  const load = useCallback(
    (params: LoadOptions = {}) => {
      params = { ...params };
      params.offset || (params.offset = offsetRef.current);
      params.limit || (params.limit = limitRef.current);
      params.searchTerm || (params.searchTerm = searchTermRef.current);
      params.isLoadingNextPage ?? (params.isLoadingNextPage = false);

      if (!params.isLoadingNextPage) {
        lastLoadedPageRef.current = undefined;
      }
      return loadFromAPIService(async () => {
        const localPendingRecordRequestControllers: RecordFinderRequestController[] =
          [];

        const processResponseData = (
          responseData: ResponsePage<DataRow, PaginatedResponseDataExtensions>
        ) => {
          const { records, recordsTotalCount, hasNextPage, loadedPageKey } =
            responseData;
          loadedPages.set(loadedPageKey ?? params.offset!, records);
          const allPageRecords = [...loadedPages.keys()]
            .sort((a, b) => a - b)
            .map((key) => loadedPages.get(key)!)
            .flat();
          lastLoadedPageRef.current = responseData;
          recordsTotalCountRef.current = recordsTotalCount ?? records.length;
          hasNextPageRef.current = (() => {
            if (hasNextPage != null) {
              return hasNextPage;
            }
            return allPageRecords.length < recordsTotalCountRef.current;
          })();
          setRecord(responseData);
        };

        const responseData = await recordFinderRef
          .current({
            ...params,
            getRequestController: (requestController) => {
              localPendingRecordRequestControllers.push(requestController);
              pendingRecordRequestControllers.current.push(requestController);
            },
            getStaleWhileRevalidate: (data) => {
              processResponseData(
                (() => {
                  if (Array.isArray(data)) {
                    return {
                      records: data,
                      recordsTotalCount: data.length,
                      hasNextPage: false,
                    };
                  }
                  return data;
                })()
              );
            },
            lastLoadedPage: lastLoadedPageRef.current,
          })
          .finally(() => {
            if (localPendingRecordRequestControllers.length > 0) {
              localPendingRecordRequestControllers.forEach(
                (requestController) => {
                  if (
                    pendingRecordRequestControllers.current.indexOf(
                      requestController
                    )
                  ) {
                    pendingRecordRequestControllers.current.splice(
                      pendingRecordRequestControllers.current.indexOf(
                        requestController
                      ),
                      1
                    );
                  }
                }
              );
            }
          });

        if (!params.isLoadingNextPage) {
          loadedPages.clear();
          recordsTotalCountRef.current = 0;
        }

        processResponseData(
          (() => {
            if (Array.isArray(responseData)) {
              return {
                records: responseData,
                recordsTotalCount: responseData.length,
                hasNextPage: false,
              } as any;
            }
            return responseData;
          })()
        );
        return responseData;
      });
    },
    [loadFromAPIService, loadedPages, setRecord]
  );
  const loadRef = useRef(load);
  loadRef.current = load;

  const loadNextPage = useCallback(
    (params?: Omit<PaginatedRequestParams, 'limit' | 'offset'>) => {
      if (canLoadNextPage && !loading && hasNextPageRef.current) {
        const lastPageOffset = [...loadedPages.keys()].sort((a, b) => b - a)[0];
        const lastPageRecords = loadedPages.get(lastPageOffset);
        if (lastPageRecords && lastPageOffset != null) {
          load({
            ...params,
            offset: lastPageOffset + lastPageRecords.length,
            limit: limit || lastPageRecords.length,
            isLoadingNextPage: true,
          });
        }
      }
    },
    [canLoadNextPage, limit, load, loadedPages, loading]
  );

  const resetRef = useRef(() => {
    loadedPages.clear();
    recordsTotalCountRef.current = 0;
    hasNextPageRef.current = true;
    lastLoadedPageRef.current = undefined;
    const requestControllersToClear = [
      ...pendingRecordRequestControllers.current,
    ];
    requestControllersToClear.forEach((pendingRecordRequestController) => {
      pendingRecordRequestController.cancelRequest();
    });
    requestControllersToClear.forEach((pendingRecordRequestController) => {
      if (
        pendingRecordRequestControllers.current.includes(
          pendingRecordRequestController
        )
      ) {
        pendingRecordRequestControllers.current.splice(
          pendingRecordRequestControllers.current.indexOf(
            pendingRecordRequestController
          ),
          1
        );
      }
    });
    baseReset; // Run to reset completely
  });

  useEffect(() => {
    if (
      !isInitialMountRef.current &&
      (limit || searchTerm || revalidationKey)
    ) {
      resetRef.current();
    }
  }, [limit, revalidationKey, searchTerm]);

  useEffect(() => {
    if (loadOnMount && isInitialMountRef.current) {
      loadRef.current();
    }
  }, [loadOnMount]);

  useEffect(() => {
    if (
      !isInitialMountRef.current &&
      autoSync &&
      (limit || searchTerm || offset || revalidationKey)
    ) {
      loadRef.current();
    }
  }, [autoSync, limit, offset, revalidationKey, searchTerm]);

  usePolling({
    load,
    autoSync,
    errorMessage,
    loading,
    refreshInterval,
  });

  useEffect(() => {
    isInitialMountRef.current = false;
    return () => {
      isInitialMountRef.current = true;
    };
  }, []);

  return {
    currentPageRecords: loadedPages.get(offset) || [],
    allPageRecords: [...loadedPages.keys()]
      .sort((a, b) => a - b)
      .map((key) => loadedPages.get(key)!)
      .flat(),
    recordsTotalCount: recordsTotalCountRef.current,
    loadedPages,
    load,
    loading,
    loadNextPage,
    responseData,
    reset: resetRef.current,
    hasNextPage: hasNextPageRef.current,
    errorMessage,
    ...rest,
  };
};
//#endregion

import { useMediaQuery, useTheme } from '@mui/material';
import { pick } from 'lodash';
import hash from 'object-hash';
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { CANCELLED_API_REQUEST_MESSAGE } from '../constants';
import { APIContext } from '../contexts/APIContext';
import { useCachedData } from '../contexts/DataStoreContext';
import {
  PaginatedRequestParams,
  PaginatedResponseData,
  TAPIFunction,
  TaggedAPIRequest,
} from '../interfaces/Utils';

export const useAPIService = <T>(defautValue: T, key?: string) => {
  const isComponentMountedRef = useRef(true);
  const taggedAPIRequestsRef = useRef<TaggedAPIRequest[]>([]);
  const { data, updateData } = useCachedData();
  if (key && data[key]) {
    defautValue = data[key];
  }
  const { call } = useContext(APIContext);
  const [record, setRecord] = useState<T>(defautValue);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (key && data[key] && isComponentMountedRef.current) {
      setRecord(data[key]);
    }
  }, [data, key]);

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
        const data = await call(() => (apiFunction as TAPIFunction)())
          .then((payload) => {
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
        if (data) {
          if (isComponentMountedRef.current) {
            setRecord(data);
          }
          if (key) {
            updateData({
              [key]: data,
            });
          }
        }
        if (isComponentMountedRef.current) {
          setLoading(false);
        }
      }
    },
    [call, key, updateData]
  );

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
  };
};

export const useCreate = <T>() => {
  const { load, loading, record, ...rest } = useAPIService<T | null>(null);
  const [created, setCreated] = useState(false);

  useEffect(() => {
    setCreated(record != null);
  }, [record]);

  return {
    create: load,
    creating: loading,
    created,
    setCreated,
    createdRecord: record,
    ...rest,
  };
};

export const useUpdate = <T>() => {
  const { create, creating, created, createdRecord, ...rest } = useCreate<T>();

  return {
    update: create,
    updating: creating,
    updated: created,
    updatedRecord: createdRecord,
    ...rest,
  };
};

const DEFAULT_SYNC_TIMEOUT = 5 * 60 * 1000;
const WINDOW_BLUR_THRESHOLD = 60 * 1000;
export const useRecord = <T>(
  recordFinder: TAPIFunction,
  defautValue: T,
  key?: string,
  loadOnMount = true,
  autoSync = true
) => {
  const nextSyncTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [apiFunction] = useState<TAPIFunction>(() => recordFinder);
  const {
    load: apiServiceLoad,
    loading,
    errorMessage,
    busy,
    ...rest
  } = useAPIService<T>(defautValue, key);

  const load = useCallback(
    (polling = false) => {
      apiServiceLoad(apiFunction, undefined, polling);
    },
    [apiFunction, apiServiceLoad]
  );

  useEffect(() => {
    loadOnMount && load();
  }, [load, loadOnMount]);

  useEffect(() => {
    if (autoSync && !busy && !loading && !errorMessage) {
      let blurTime: number;
      const mouseMoveEventCallback = () => {
        if (nextSyncTimeoutRef.current !== null) {
          clearTimeout(nextSyncTimeoutRef.current);
        }
        nextSyncTimeoutRef.current = setTimeout(() => {
          load(true);
        }, DEFAULT_SYNC_TIMEOUT);
      };
      const visiblityChangeEventCallback = (event?: Event) => {
        if (nextSyncTimeoutRef.current !== null) {
          clearTimeout(nextSyncTimeoutRef.current);
        }
        window.removeEventListener('mousemove', mouseMoveEventCallback);
        if (document.hidden) {
          blurTime = Date.now();
        } else {
          window.addEventListener('mousemove', mouseMoveEventCallback);
          mouseMoveEventCallback();
          if (
            event &&
            blurTime != null &&
            Date.now() - blurTime >= WINDOW_BLUR_THRESHOLD
          ) {
            load(true);
          }
        }
      };
      document.addEventListener(
        'visibilitychange',
        visiblityChangeEventCallback
      );
      visiblityChangeEventCallback();
      return () => {
        window.removeEventListener('mousemove', mouseMoveEventCallback);
        document.removeEventListener(
          'visibilitychange',
          visiblityChangeEventCallback
        );
        if (nextSyncTimeoutRef.current !== null) {
          clearTimeout(nextSyncTimeoutRef.current);
        }
      };
    }
  }, [autoSync, busy, errorMessage, load, loading]);

  return {
    load,
    loading,
    errorMessage,
    busy,
    ...rest,
  };
};

export const useRecords = <T>(
  recordFinder: TAPIFunction,
  key?: string,
  loadOnMount = true,
  autoSync = true
) => {
  const { record, setRecord, ...rest } = useRecord<T[]>(
    recordFinder,
    [],
    key,
    loadOnMount,
    autoSync
  );

  return {
    records: record,
    setRecords: setRecord,
    ...rest,
  };
};

export interface UsePaginatedRecordsOptions extends PaginatedRequestParams {
  key?: string;
  loadOnMount?: boolean;
  autoSync?: boolean;
  revalidationKey?: string;
}
export const usePaginatedRecords = <T>(
  recordFinder: TAPIFunction<PaginatedResponseData<T>>,
  {
    key,
    loadOnMount = true,
    limit: limitProp = 100,
    offset: offsetProp = 0,
    showRecords: showRecordsProp = true,
    revalidationKey,
  }: UsePaginatedRecordsOptions = {}
) => {
  const recordFinderRef = useRef(recordFinder);
  useEffect(() => {
    recordFinderRef.current = recordFinder;
  }, [recordFinder]);

  const {
    load: loadFromAPIService,
    record: responseData,
    ...rest
  } = useAPIService<PaginatedResponseData<T> | null>(
    null,
    (() => {
      if (key) {
        return `${key}_${limitProp}_${offsetProp}_${String(showRecordsProp)}`;
      }
    })()
  );

  const loadedPages = useMemo(() => {
    return new Map<string, T[]>();
  }, []);

  const [currentPageRecords, setCurrentPageRecords] = useState<T[]>([]);
  const [allPageRecords, setAllPageRecords] = useState<T[]>([]);
  const [recordsTotalCount, setRecordsTotalCount] = useState(0);

  const defaultPaginationParams = useMemo(() => {
    return {
      offset: offsetProp,
      limit: limitProp,
      showRecords: showRecordsProp,
    } as PaginatedRequestParams;
  }, [limitProp, offsetProp, showRecordsProp]);

  const [loadingPaginationParams, setLoadingPaginationParams] = useState(
    defaultPaginationParams
  );

  const load = useCallback(
    (params?: PaginatedRequestParams) => {
      revalidationKey; // Triggering reload whenever extra parameters change
      params = { ...params };
      params.offset || (params.offset = defaultPaginationParams.offset);
      params.limit || (params.limit = defaultPaginationParams.limit);
      setLoadingPaginationParams(pick(params, 'offset', 'limit'));
      loadFromAPIService(async () => {
        const responseData = await recordFinderRef.current();
        const { records, recordsTotalCount } = responseData;
        setCurrentPageRecords(records);
        setRecordsTotalCount(recordsTotalCount);
        return responseData;
      });
    },
    [
      defaultPaginationParams.limit,
      defaultPaginationParams.offset,
      loadFromAPIService,
      revalidationKey,
    ]
  );

  useEffect(() => {
    if (responseData) {
      const pageKey = `${loadingPaginationParams.offset},${loadingPaginationParams.limit}`;
      loadedPages.set(pageKey, responseData.records);
      setAllPageRecords(
        [...loadedPages.keys()]
          .sort((a, b) => a.localeCompare(b))
          .map((key) => loadedPages.get(key)!)
          .flat()
      );
    }
  }, [
    loadingPaginationParams.limit,
    loadingPaginationParams.offset,
    loadedPages,
    responseData,
  ]);

  useEffect(() => {
    if (loadOnMount) {
      load();
    }
  }, [load, loadOnMount]);

  return {
    currentPageRecords,
    allPageRecords,
    setCurrentPageRecords,
    setAllPageRecords,
    recordsTotalCount,
    loadedPages,
    load,
    responseData,
    ...rest,
  };
};

export const useSmallScreen = () => {
  const { breakpoints } = useTheme();
  return useMediaQuery(breakpoints.down('sm'));
};

export type SetSearchPrams = (
  nextInit: Record<string, string | string[]>,
  navigateOptions?: {
    replace?: boolean | undefined;
    state?: any;
  }
) => void;

export const useSetSearchParam = (baseSetSearchParams: SetSearchPrams) => {
  const setSearchParams = useCallback(
    (
      searchParams: Record<string, string | null>,
      navigateOptions?: {
        replace?: boolean | undefined;
        state?: any;
      }
    ) => {
      const entries = new URL(window.location.href).searchParams.entries();
      const existingSearchParams: Record<string, string | string[]> = {};
      for (const [key, value] of entries) {
        if (Array.isArray(existingSearchParams[key])) {
          (existingSearchParams[key] as string[]).push(value);
        } else if (typeof existingSearchParams[key] === 'string') {
          existingSearchParams[key] = [existingSearchParams[key] as string];
        } else {
          existingSearchParams[key] = value;
        }
      }
      const combinedSearchParams = {
        ...existingSearchParams,
        ...searchParams,
      };
      const nextSearchParams = Object.keys(combinedSearchParams)
        .filter((key) => {
          return (
            combinedSearchParams[key] != null &&
            combinedSearchParams[key]!.length > 0
          );
        })
        .reduce((accumulator, key) => {
          accumulator[key] = combinedSearchParams[key]!;
          return accumulator;
        }, {} as Record<string, string | string[]>);

      if (hash(nextSearchParams) !== hash(existingSearchParams)) {
        baseSetSearchParams(nextSearchParams, navigateOptions);
      }
    },
    [baseSetSearchParams]
  );

  return { setSearchParams };
};

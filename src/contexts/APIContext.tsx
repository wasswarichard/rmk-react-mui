import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { TAPIFunction } from '../models/Utils';
import { REDIRECTION_ERROR_MESSAGES } from '../utils/JWT';

export interface IAPIContext {
  call: <T extends TAPIFunction>(func: T) => Promise<ReturnType<T>>;
  sessionExpired: boolean;
  setSessionExpired: Dispatch<SetStateAction<boolean>>;
}
export const APIContext = createContext<IAPIContext>({} as any);

export const APIProvider: FC<{
  children: ReactNode;
  onSessionExpired?: () => void;
}> = ({ children, onSessionExpired }) => {
  // Refs
  const onSessionExpiredRef = useRef(onSessionExpired);
  useEffect(() => {
    onSessionExpiredRef.current = onSessionExpired;
  }, [onSessionExpired]);

  const [sessionExpired, setSessionExpired] = useState(false);
  const call = useCallback(
    async (apiCallback: TAPIFunction) => {
      return apiCallback().catch((err) => {
        if (
          REDIRECTION_ERROR_MESSAGES.some((message) => {
            return String(err.message)
              .toLowerCase()
              .match(String(message).toLowerCase());
          })
        ) {
          setSessionExpired(true);
        } else {
          throw err;
        }
      });
    },
    [setSessionExpired]
  );

  useEffect(() => {
    if (sessionExpired && onSessionExpiredRef.current) {
      onSessionExpiredRef.current();
    }
  }, [sessionExpired]);

  return (
    <APIContext.Provider value={{ call, sessionExpired, setSessionExpired }}>
      {children}
    </APIContext.Provider>
  );
};

export const useAPIContext = () => {
  return useContext(APIContext);
};

import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { logout as apiLogout } from '../api';
import { useAPIService } from '../hooks/Utils';
import { TPermissionCode } from '../interfaces/Users';
import { TAPIFunction } from '../interfaces/Utils';
import StorageManager from '../utils/StorageManager';
import { useAPIContext } from './APIContext';

export interface IAuthContext<T = any> {
  login: (loginFunction: TAPIFunction<T>) => Promise<void>;
  logout: () => Promise<void>;
  loggedInUser: T | null;
  updateLoggedInUser: (user: T) => void;
  authenticated: boolean;
  clearLoggedInUserSession: () => void;
  loggedInUserHasPermission: (
    permissionCode: TPermissionCode | TPermissionCode[]
  ) => boolean;
  loadingCurrentSession: boolean;
  loggingIn: boolean;
  loginErrorMessage: string;
}
export const AuthContext = createContext<IAuthContext>({} as any);

export const AuthProvider: FC<{
  children: ReactNode;
  value?: Record<string, any>;
}> = ({ children, value }) => {
  const [loggedInUser, setLoggedInUser] = useState<any | null>(null);
  const [loadingCurrentSession, setLoadingCurrentSession] = useState(true);
  const { sessionExpired } = useAPIContext();
  const {
    record: user,
    load,
    loading: loggingIn,
    errorMessage: loginErrorMessage,
  } = useAPIService(loggedInUser);

  useEffect(() => {
    const user = StorageManager.get('user');
    setLoggedInUser(user);
    setLoadingCurrentSession(false);
  }, []);

  const updateLoggedInUserSession = useCallback((user: any) => {
    StorageManager.add('user', user);
    setLoggedInUser(user);
  }, []);

  const clearLoggedInUserSession = useCallback(() => {
    StorageManager.remove('user');
  }, []);

  const login = useCallback(
    async (loginFunction): Promise<void> => {
      clearLoggedInUserSession();
      load(loginFunction);
    },
    [clearLoggedInUserSession, load]
  );

  const logout = useCallback(async () => {
    clearLoggedInUserSession();
    apiLogout();
    StorageManager.clear();
    setLoggedInUser(null);
  }, [clearLoggedInUserSession]);

  const updateLoggedInUser = useCallback(
    (user: any) => {
      updateLoggedInUserSession(user);
    },
    [updateLoggedInUserSession]
  );

  const loggedInUserPermissions = useCallback(() => {
    if (loggedInUser && loggedInUser.permissions) {
      return loggedInUser.permissions;
    }
    return [];
  }, [loggedInUser]);

  const loggedInUserHasPermission = useCallback(
    (permissionCode: TPermissionCode | TPermissionCode[]) => {
      const permissions = loggedInUserPermissions();
      const isSuperAdmin = permissions.includes('ALL_FUNCTIONS');
      if (isSuperAdmin) {
        return isSuperAdmin;
      }
      if (Array.isArray(permissionCode)) {
        return permissionCode.some((permission) => {
          return permissions.includes(permission);
        });
      }
      return permissions.includes(permissionCode);
    },
    [loggedInUserPermissions]
  );

  useEffect(() => {
    if (user) {
      updateLoggedInUserSession(user);
    }
  }, [user, updateLoggedInUserSession]);

  useEffect(() => {
    if (sessionExpired) {
      clearLoggedInUserSession();
    }
  }, [clearLoggedInUserSession, sessionExpired]);

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        login,
        logout,
        updateLoggedInUser,
        clearLoggedInUserSession,
        authenticated: loggedInUser !== null,
        loggedInUserHasPermission,
        loadingCurrentSession,
        loggingIn,
        loginErrorMessage,
        ...value,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

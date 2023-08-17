import { FC, ReactNode, createContext, useContext } from 'react';

import { DEFAULT_DATE_FORMAT, DEFAULT_DATE_TIME_FORMAT } from '../constants';

export interface GlobalConfigurationContext {
  dateFormat: string;
  dateTimeFormat: string;
}

export const baseGlobalConfiguration: GlobalConfigurationContext = {
  dateFormat: DEFAULT_DATE_FORMAT,
  dateTimeFormat: DEFAULT_DATE_TIME_FORMAT,
};

export const GlobalConfigurationContext = createContext(
  baseGlobalConfiguration
);

export const GlobalConfigurationProvider: FC<{
  children: ReactNode;
  value?: Partial<GlobalConfigurationContext>;
}> = ({ children, value }) => {
  return (
    <GlobalConfigurationContext.Provider
      value={{
        ...baseGlobalConfiguration,
        ...value,
      }}
    >
      {children}
    </GlobalConfigurationContext.Provider>
  );
};

export const useGlobalConfiguration = () => {
  return useContext(GlobalConfigurationContext);
};

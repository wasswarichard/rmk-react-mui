import {
  Box,
  BoxProps,
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Divider,
  Card as MuiCard,
  unstable_composeClasses as composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  gridClasses,
  useTheme,
  useThemeProps,
} from '@mui/material';
import Paper, { PaperProps } from '@mui/material/Paper';
import clsx from 'clsx';
import { ReactNode, forwardRef } from 'react';

import { useLoadingContext } from '../contexts/LoadingContext';
import { LoadingProps } from '../interfaces/Utils';
import SearchSyncToolbar, { SearchSyncToolbarProps } from './SearchSyncToolbar';

export interface CardClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type CardClassKey = keyof CardClasses;

// Adding theme prop types
declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MuiCardWithTools: CardProps;
  }
}

// Adding theme override types
declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiCardWithTools: keyof CardClasses;
  }
}

// Adding theme component types
declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MuiCardWithTools?: {
      defaultProps?: ComponentsProps['MuiCardWithTools'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiCardWithTools'];
      variants?: ComponentsVariants['MuiCardWithTools'];
    };
  }
}

export interface CardProps
  extends Partial<Omit<PaperProps, 'title'>>,
    Partial<LoadingProps> {
  title?: ReactNode;
  load?: () => void;
  SearchSyncToolbarProps?: Partial<SearchSyncToolbarProps>;
  CardBodyProps?: Partial<BoxProps>;
  layoutVariant?: 'paper' | 'card';
}

export function getCardUtilityClass(slot: string): string {
  return generateUtilityClass('MuiCardWithTools', slot);
}

export const cardClasses: CardClasses = generateUtilityClasses(
  'MuiCardWithTools',
  ['root']
);

const slots = {
  root: ['root'],
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  inProps,
  ref
) {
  const props = useThemeProps({ props: inProps, name: 'MuiCardWithTools' });
  const {
    className,
    children,
    title,
    load,
    loading,
    errorMessage,
    SearchSyncToolbarProps = {},
    CardBodyProps = {},
    layoutVariant = 'paper',
    ...rest
  } = props;

  const classes = composeClasses(
    slots,
    getCardUtilityClass,
    (() => {
      if (className) {
        return {
          root: className,
        };
      }
    })()
  );

  const { sx: SearchSyncToolbarPropsSx, ...SearchSyncToolbarPropsRest } =
    SearchSyncToolbarProps;
  const { sx: CardBodyPropsSx, ...CardBodyPropsRest } = CardBodyProps;
  const { loading: contextLoading, errorMessage: contextErrorMessage } =
    useLoadingContext();
  const { spacing } = useTheme();

  const searchSyncToolBar = (
    <SearchSyncToolbar
      load={load}
      loading={loading || contextLoading}
      errorMessage={errorMessage || contextErrorMessage}
      title={title}
      hasSearchTool={false}
      {...SearchSyncToolbarPropsRest}
      sx={{
        pr: `${spacing(1.75)} !important`,
        [`&>.${gridClasses.container}`]: {
          columnGap: 1,
        },
        ...SearchSyncToolbarPropsSx,
      }}
    />
  );

  if (layoutVariant === 'card') {
    return (
      <Box ref={ref} {...rest} className={clsx(classes.root)}>
        {searchSyncToolBar}
        <MuiCard>{children}</MuiCard>
      </Box>
    );
  }

  return (
    <Paper ref={ref} {...rest} className={clsx(classes.root)}>
      {title && (
        <Paper
          elevation={0}
          component="header"
          sx={{ position: 'sticky', top: 0, zIndex: 5 }}
        >
          {searchSyncToolBar}
          <Divider />
        </Paper>
      )}
      <Box
        {...CardBodyPropsRest}
        component="section"
        sx={{ pt: 2, px: 3, pb: 3, ...CardBodyPropsSx }}
      >
        {children}
      </Box>
    </Paper>
  );
});

export default Card;

import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Stack,
  StackProps,
  Typography,
  unstable_composeClasses as composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  useTheme,
  useThemeProps,
} from '@mui/material';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import { forwardRef, useMemo, useState } from 'react';

import { useLoadOnScrollToBottom } from '../../hooks/InfiniteScroller';
import { TimeScaleRow } from './models';

export interface TimeScaleMeterClasses {
  /** Styles applied to the root element. */
  root: string;
  timeScaleLevel1: string;
  timeScaleLevel1Tick: string;
}

export type TimeScaleMeterClassKey = keyof TimeScaleMeterClasses;

// Adding theme prop types
declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MuiTimeScaleMeter: TimeScaleMeterProps;
  }
}

// Adding theme override types
declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiTimeScaleMeter: keyof TimeScaleMeterClasses;
  }
}

// Adding theme component types
declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MuiTimeScaleMeter?: {
      defaultProps?: ComponentsProps['MuiTimeScaleMeter'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTimeScaleMeter'];
      variants?: ComponentsVariants['MuiTimeScaleMeter'];
    };
  }
}

export interface TimeScaleMeterProps extends Partial<StackProps> {
  timeScaleRows: [TimeScaleRow[], TimeScaleRow[], TimeScaleRow[]];
  timeScaleWidth: number;
  scrollingElement?: HTMLElement | null;
  leftOffset?: number;
  variant?: 'default' | 'compact';
}

export function getTimeScaleMeterUtilityClass(slot: string): string {
  return generateUtilityClass('MuiTimeScaleMeter', slot);
}

export const timeScaleMeterClasses: TimeScaleMeterClasses =
  generateUtilityClasses('MuiTimeScaleMeter', [
    'root',
    'timeScaleLevel1',
    'timeScaleLevel1Tick',
  ]);

const slots = {
  root: ['root'],
  timeScaleLevel1: ['timeScaleLevel1'],
  timeScaleLevel1Tick: ['timeScaleLevel1Tick'],
};

export const TimeScaleMeter = forwardRef<HTMLDivElement, TimeScaleMeterProps>(
  function TimeScaleMeter(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'MuiTimeScaleMeter' });
    const {
      className,
      timeScaleRows,
      timeScaleWidth,
      scrollingElement,
      leftOffset = 0,
      variant = 'default',
      sx,
      ...rest
    } = props;

    const classes = composeClasses(
      slots,
      getTimeScaleMeterUtilityClass,
      (() => {
        if (className) {
          return {
            root: className,
          };
        }
      })()
    );

    const { palette } = useTheme();

    const [timeScaleLevel1, timeScaleLevel2, timeScaleLevel3] = timeScaleRows;
    const {
      timeScaleLevel1TickWidth,
      timeScaleLevel2TickWidth,
      timeScaleLevel3TickWidth,
    } = useMemo(() => {
      const timeScaleLevel1TickWidth = timeScaleWidth / timeScaleLevel1.length;
      const timeScaleLevel2TickWidth = timeScaleWidth / timeScaleLevel2.length;
      const timeScaleLevel3TickWidth = timeScaleWidth / timeScaleLevel3.length;

      return {
        timeScaleLevel1TickWidth,
        timeScaleLevel2TickWidth,
        timeScaleLevel3TickWidth,
      };
    }, [
      timeScaleWidth,
      timeScaleLevel1.length,
      timeScaleLevel2.length,
      timeScaleLevel3.length,
    ]);

    const [offsets, setOffsets] = useState({
      timeScaleLevel1Offset: 0,
      timeScaleLevel2Offset: 0,
      timeScaleLevel3Offset: 0,
    });

    useLoadOnScrollToBottom({
      element: scrollingElement,
      onChangeScrollLength({ scrollLeft }) {
        const scrollOffset = Math.max(scrollLeft - leftOffset, 0);
        setOffsets({
          timeScaleLevel1Offset: Math.floor(
            scrollOffset / timeScaleLevel1TickWidth
          ),
          timeScaleLevel2Offset: Math.floor(
            scrollOffset / timeScaleLevel2TickWidth
          ),
          timeScaleLevel3Offset: Math.floor(
            scrollOffset / timeScaleLevel3TickWidth
          ),
        });
      },
      revalidationKey: `${timeScaleLevel1TickWidth}-${timeScaleLevel2TickWidth}-${timeScaleLevel3TickWidth}`,
    });

    const [timeScaleLevel1Limit, timeScaleLevel2Limit, timeScaleLevel3Limit] =
      useMemo(() => {
        return [
          timeScaleLevel1TickWidth,
          timeScaleLevel2TickWidth,
          timeScaleLevel3TickWidth,
        ].map((tickWidth) => {
          if (scrollingElement?.offsetWidth && tickWidth) {
            return Math.ceil(scrollingElement.offsetWidth / tickWidth) + 1;
          }
          return 1;
        });
      }, [
        scrollingElement?.offsetWidth,
        timeScaleLevel1TickWidth,
        timeScaleLevel2TickWidth,
        timeScaleLevel3TickWidth,
      ]);

    const {
      timeScaleLevel1Offset,
      timeScaleLevel2Offset,
      timeScaleLevel3Offset,
    } = offsets;

    const displayableTimeScaleLevel1 = timeScaleLevel1.slice(
      timeScaleLevel1Offset,
      timeScaleLevel1Offset + timeScaleLevel1Limit
    );
    const displayableTimeScaleLevel2 = timeScaleLevel2.slice(
      timeScaleLevel2Offset,
      timeScaleLevel2Offset + timeScaleLevel2Limit
    );
    const displayableTimeScaleLevel3 = timeScaleLevel3.slice(
      timeScaleLevel3Offset,
      timeScaleLevel3Offset + timeScaleLevel3Limit
    );

    return (
      <Stack
        ref={ref}
        {...rest}
        className={clsx(classes.root)}
        sx={{
          width: '100%',
          ...sx,
        }}
      >
        {(() => {
          switch (variant) {
            case 'default':
              return (
                <Box
                  sx={{
                    display: 'flex',
                    height: 56,
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: timeScaleLevel1TickWidth * timeScaleLevel1Offset,
                      minWidth: 0,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  />
                  {displayableTimeScaleLevel1.map(
                    ({ id, label, sx, ...rest }) => {
                      return (
                        <Box
                          {...rest}
                          key={id}
                          className={clsx(classes.timeScaleLevel1)}
                          sx={{
                            ...sx,
                            width: timeScaleLevel1TickWidth,
                            minWidth: 0,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Box
                            className={clsx(classes.timeScaleLevel1Tick)}
                            sx={{
                              position: 'sticky',
                              overflow: 'hidden',
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 500,
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {label}
                            </Typography>
                          </Box>
                        </Box>
                      );
                    }
                  )}
                </Box>
              );
          }
        })()}
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              width: timeScaleLevel2TickWidth * timeScaleLevel2Offset,
              minWidth: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          />
          {displayableTimeScaleLevel2.map(
            ({ id, label, showLabel = true, sx, ...rest }) => {
              return (
                <Box
                  {...rest}
                  key={id}
                  sx={{
                    ...sx,
                    width: timeScaleLevel2TickWidth,
                    minWidth: 0,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    ...(() => {
                      if (variant === 'default') {
                        return {
                          overflow: 'hidden',
                        };
                      }
                    })(),
                  }}
                >
                  {showLabel ? (
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: 11,
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                        ...(() => {
                          if (variant === 'compact') {
                            return {
                              transform: 'translateX(-50%)',
                            };
                          }
                        })(),
                      }}
                    >
                      {label}
                    </Typography>
                  ) : null}
                </Box>
              );
            }
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              width: timeScaleLevel3TickWidth * timeScaleLevel3Offset,
              minWidth: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          />
          {displayableTimeScaleLevel3.map(({ id, label, sx, ...rest }) => {
            return (
              <Box
                {...rest}
                key={id}
                sx={{
                  ...(() => {
                    if (variant === 'compact') {
                      return {
                        borderLeft: `1px solid ${palette.divider}`,
                        height: 11,
                      };
                    }
                    return {
                      height: 24,
                    };
                  })(),
                  ...sx,
                  width: timeScaleLevel3TickWidth,
                  minWidth: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {(() => {
                  if (variant === 'default') {
                    return (
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: 12,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {label}
                      </Typography>
                    );
                  }
                })()}
              </Box>
            );
          })}
        </Box>
      </Stack>
    );
  }
);

export default TimeScaleMeter;

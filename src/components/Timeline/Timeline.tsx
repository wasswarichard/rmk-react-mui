import {
  createDateWithoutTimezoneOffset,
  dateStringHasTimeComponent,
} from '@infinite-debugger/rmk-utils/dates';
import {
  Box,
  BoxProps,
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Grid,
  Tooltip,
  TooltipProps,
  Typography,
  alpha,
  unstable_composeClasses as composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  useMediaQuery,
  useTheme,
  useThemeProps,
} from '@mui/material';
import clsx from 'clsx';
import addDays from 'date-fns/addDays';
import addHours from 'date-fns/addHours';
import differenceInDays from 'date-fns/differenceInDays';
import differenceInHours from 'date-fns/differenceInHours';
import formatDate from 'date-fns/format';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isSameDay from 'date-fns/isSameDay';
import { omit, result, uniqueId } from 'lodash';
import {
  Fragment,
  ReactElement,
  ReactNode,
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { mergeRefs } from 'react-merge-refs';
import * as Yup from 'yup';

import { useReactRouterDOMSearchParams } from '../../hooks/ReactRouterDOM';
import { BaseDataRow, Table, TableColumn, TableProps } from '../Table';
import {
  SelectTimeScaleCallbackFunction,
  useScrollTimelineTools,
  useTimeScaleTool,
} from './hooks';
import {
  TimeScaleOption,
  fullMonthLabels,
  quarterLabels,
  shortMonthLabels,
  timeScaleOptions,
} from './models';
import TimeScaleMeter, {
  TimeScaleMeterProps,
  TimeScaleRow,
  timeScaleMeterClasses,
} from './TimeScaleMeter';

export interface TimelineClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type TimelineClassKey = keyof TimelineClasses;

// Adding theme prop types
declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MuiTimeline: TimelineProps;
  }
}

// Adding theme override types
declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiTimeline: keyof TimelineClasses;
  }
}

// Adding theme component types
declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MuiTimeline?: {
      defaultProps?: ComponentsProps['MuiTimeline'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTimeline'];
      variants?: ComponentsVariants['MuiTimeline'];
    };
  }
}

const baseTimeScaleWidth = 120;

export type ScrollToDateFunction = (date: Date) => void;

export type TimeScaleConfiguration = {
  timeScaleRows: [TimeScaleRow[], TimeScaleRow[], TimeScaleRow[]];
  unitTimeScaleWidth: number;
  timeScaleWidth: number;
};

export interface TimelineElement extends Partial<BoxProps> {
  startDate?: string | number | Date;
  endDate?: string | number | Date;
  label?: ReactNode;
  TooltipProps?: Partial<TooltipProps>;
}

export interface TimelineProps<RecordRow extends BaseDataRow = any>
  extends Partial<
    Pick<TableProps, 'className' | 'sx' | 'parentBackgroundColor'>
  > {
  rowLabelProperty?: keyof RecordRow;
  getRowLabel?: (row: RecordRow) => ReactNode;
  rows: RecordRow[];
  expandedRows?: string[];
  allRowsExpanded?: boolean;
  onChangeExpanded?: (expandedRows: string[]) => void;
  timelineElementLabelProperty?: keyof RecordRow;
  getTimelineElementLabel?: (timelineElement: RecordRow) => ReactNode;
  getTimelineElementTooltipProps?: (
    timelineElement: RecordRow
  ) => Partial<TooltipProps>;
  getTimelineElementProps?: (timelineElement: RecordRow) => BoxProps;
  startDateProperty?: keyof RecordRow;
  endDateProperty?: keyof RecordRow;
  showRowLabelsColumn?: boolean;
  rowLabelsColumnHeader?: ReactNode;
  getTimelineElements?: (row: RecordRow) => TimelineElement[];
  id?: string;
  minDate?: string | number | Date;
  maxDate?: string | number | Date;
  getTimelineDates?: (rows: RecordRow[]) => (string | number | Date)[];
  selectedTimeScale?: TimeScaleOption;
  clearSearchStateOnUnmount?: boolean;
  getDefaultViewResetFunction?: (resetToDefaultView: () => void) => void;
  onChangeSearchParams?: (changedSearchParamKeys: string[]) => void;
  rowLabelsColumnWidth?: number;
  showToolBar?: boolean;
  supportedTimeScales?: TimeScaleOption[];
  todayMarkerVariant?: 'default' | 'foregroundFullSpan';
  TimeScaleMeterProps?: Partial<
    Omit<
      TimeScaleMeterProps,
      | 'timeScaleRows'
      | 'timeScaleWidth'
      | 'scrollingElement'
      | 'leftOffset'
      | 'ref'
    >
  >;
  getScrollToDateFunction?: (scrollToDate: ScrollToDateFunction) => void;
  getSelectTimeScaleFunction?: (
    selectTimeScale: SelectTimeScaleCallbackFunction
  ) => void;
  getJumpToOptimalTimeScaleFunction?: (
    jumpToOptimalTimeScale: () => void
  ) => void;
  getJumpToPreviousUnitTimeScaleFunction?: (
    jumpToPreviousUnitTimeScale: () => void
  ) => void;
  getJumpToNextUnitTimeScaleFunction?: (
    jumpToPreviousUnitTimeScale: () => void
  ) => void;
}

export function getTimelineUtilityClass(slot: string): string {
  return generateUtilityClass('MuiTimeline', slot);
}

export const timelineClasses: TimelineClasses = generateUtilityClasses(
  'MuiTimeline',
  ['root']
);

const slots = {
  root: ['root'],
};

export const BaseTimeline = <RecordRow extends BaseDataRow>(
  inProps: TimelineProps<RecordRow>,
  ref: Ref<HTMLTableElement>
) => {
  const props = useThemeProps({ props: inProps, name: 'MuiTimeline' });
  const {
    className,
    rows,
    rowLabelProperty,
    getRowLabel,
    startDateProperty,
    endDateProperty,
    timelineElementLabelProperty,
    getTimelineElementLabel,
    getTimelineElementTooltipProps,
    getTimelineElementProps,
    getTimelineElements,
    showRowLabelsColumn = true,
    rowLabelsColumnHeader,
    id,
    minDate: minDateProp,
    maxDate: maxDateProp,
    selectedTimeScale: selectedTimeScaleProp,
    clearSearchStateOnUnmount = false,
    getDefaultViewResetFunction,
    onChangeSearchParams,
    rowLabelsColumnWidth = 256,
    getTimelineDates,
    showToolBar = true,
    supportedTimeScales = [...timeScaleOptions],
    TimeScaleMeterProps = {},
    getJumpToNextUnitTimeScaleFunction,
    getJumpToOptimalTimeScaleFunction,
    getJumpToPreviousUnitTimeScaleFunction,
    getScrollToDateFunction,
    getSelectTimeScaleFunction,
    todayMarkerVariant = 'default',
    ...rest
  } = omit(props, 'parentBackgroundColor');

  let { parentBackgroundColor } = props;

  const classes = composeClasses(
    slots,
    getTimelineUtilityClass,
    (() => {
      if (className) {
        return {
          root: className,
        };
      }
    })()
  );

  const {
    variant: TimeScaleMeterPropsVariant = 'default',
    sx: TimeScaleMeterPropsSx,
    ...TimeScaleMeterPropsRest
  } = TimeScaleMeterProps;

  const isInitialMountRef = useRef(true);
  const currentDateAtCenterRef = useRef<Date | null>(null);
  const lastDateAtCenterRef = useRef<Date | null>(null);
  const timelineContainerElementRef = useRef<HTMLTableElement>(null);
  const todayIndicatorRef = useRef<HTMLDivElement>(null);

  const getDefaultViewResetFunctionRef = useRef(getDefaultViewResetFunction);
  getDefaultViewResetFunctionRef.current = getDefaultViewResetFunction;

  const onChangeSearchParamsRef = useRef(onChangeSearchParams);
  onChangeSearchParamsRef.current = onChangeSearchParams;

  const getTimelineDatesRef = useRef(getTimelineDates);
  getTimelineDatesRef.current = getTimelineDates;

  const getScrollToDateFunctionRef = useRef(getScrollToDateFunction);
  getScrollToDateFunctionRef.current = getScrollToDateFunction;

  const getSelectTimeScaleFunctionRef = useRef(getSelectTimeScaleFunction);
  getSelectTimeScaleFunctionRef.current = getSelectTimeScaleFunction;

  const getJumpToOptimalTimeScaleFunctionRef = useRef(
    getJumpToOptimalTimeScaleFunction
  );
  getJumpToOptimalTimeScaleFunctionRef.current =
    getJumpToOptimalTimeScaleFunction;

  const getJumpToPreviousUnitTimeScaleFunctionRef = useRef(
    getJumpToPreviousUnitTimeScaleFunction
  );
  getJumpToPreviousUnitTimeScaleFunctionRef.current =
    getJumpToPreviousUnitTimeScaleFunction;

  const getJumpToNextUnitTimeScaleFunctionRef = useRef(
    getJumpToNextUnitTimeScaleFunction
  );
  getJumpToNextUnitTimeScaleFunctionRef.current =
    getJumpToNextUnitTimeScaleFunction;

  const { palette, breakpoints } = useTheme();
  const isSmallScreenSize = useMediaQuery(breakpoints.down('sm'));
  const baseSpacingUnits = isSmallScreenSize ? 16 : 24;

  parentBackgroundColor || (parentBackgroundColor = palette.background.paper);

  const [isTimelineAtCenterOfGravity, setIsTimelineAtCenterOfGravity] =
    useState(true);

  const shouldShowRowLabelsColumn = (() => {
    return !isSmallScreenSize && showRowLabelsColumn;
  })();

  const { searchParams, setSearchParams } = useReactRouterDOMSearchParams({
    mode: 'json',
    spec: {
      timeScale: Yup.mixed<TimeScaleOption>().oneOf([...supportedTimeScales]),
    },
    id,
    clearSearchStateOnUnmount,
  });

  const stringifiedSearchParamKeys = JSON.stringify(Object.keys(searchParams));
  useEffect(() => {
    if (onChangeSearchParamsRef.current) {
      onChangeSearchParamsRef.current(JSON.parse(stringifiedSearchParamKeys));
    }
  }, [stringifiedSearchParamKeys]);

  const { timeScale: searchParamsSelectedTimeScale } = searchParams;

  const {
    minCalendarDate,
    maxCalendarDate,
    timelineYears,
    totalNumberOfDays,
    totalNumberOfHours,
    centerOfGravity,
    allDates,
    timelineDifferenceInDays,
    timelineDifferenceInHours,
  } = useMemo(() => {
    const allDates = (() => {
      if (getTimelineDatesRef.current) {
        const dates = getTimelineDatesRef.current(rows);
        return dates.map((date) => {
          return createDateWithoutTimezoneOffset(date);
        });
      }
      return rows.flatMap((row) => {
        const dates: Date[] = [];
        const startDateValue = (() => {
          if (startDateProperty) {
            return result(row, startDateProperty);
          }
        })();
        if (startDateValue) {
          if (startDateValue instanceof Date) {
            dates.push(startDateValue);
          } else {
            const parsedStartDateValue = createDateWithoutTimezoneOffset(
              startDateValue as any
            );
            if (!isNaN(parsedStartDateValue.getTime())) {
              dates.push(parsedStartDateValue);
            }
          }
        }
        const endDateValue = (() => {
          if (endDateProperty) {
            return result(row, endDateProperty);
          }
        })();
        if (endDateValue) {
          if (endDateValue instanceof Date) {
            dates.push(endDateValue);
          } else {
            const parsedEndDateValue = createDateWithoutTimezoneOffset(
              endDateValue as any
            );
            if (!isNaN(parsedEndDateValue.getTime())) {
              dates.push(parsedEndDateValue);
            }
          }
        }
        return dates;
      });
    })().sort((a, b) => a.getTime() - b.getTime());

    const { maxDate, minDate, maxCalendarDate, minCalendarDate } = (() => {
      if (allDates.length > 0) {
        const minDate = minDateProp
          ? createDateWithoutTimezoneOffset(minDateProp)
          : allDates[0];
        const minCalendarDate = new Date(minDate.getFullYear(), 0, 1, 0, 0);

        const maxDate = maxDateProp
          ? createDateWithoutTimezoneOffset(maxDateProp)
          : allDates[allDates.length - 1];
        const maxCalendarDate = new Date(maxDate.getFullYear(), 11, 31, 23, 59);

        return {
          minDate,
          maxDate,
          minCalendarDate,
          maxCalendarDate,
        };
      }
      const thisYear = new Date().getFullYear();
      const minDate = new Date(thisYear, 0, 1, 0, 0);
      const maxDate = new Date(thisYear, 11, 31, 23, 59);
      return {
        minDate,
        maxDate,
        minCalendarDate: minDate,
        maxCalendarDate: maxDate,
      };
    })();

    const minDateYear = minCalendarDate.getFullYear();
    const maxDateYear = maxCalendarDate.getFullYear();
    const timelineYears: number[] = [];

    for (let year = minDateYear; year <= maxDateYear; year++) {
      timelineYears.push(year);
    }
    const totalNumberOfDays =
      differenceInDays(maxCalendarDate, minCalendarDate) + 1;
    const totalNumberOfHours =
      differenceInHours(maxCalendarDate, minCalendarDate) + 1;

    const timelineDifferenceInDays = differenceInDays(maxDate, minDate);
    const timelineDifferenceInHours = differenceInHours(maxDate, minDate);

    const centerOfGravity =
      allDates.length > 0
        ? addDays(minDate, Math.floor(timelineDifferenceInDays / 2))
        : new Date();

    return {
      minDate,
      maxDate,
      minCalendarDate,
      maxCalendarDate,
      timelineYears,
      totalNumberOfDays,
      totalNumberOfHours,
      timelineDifferenceInDays,
      timelineDifferenceInHours,
      centerOfGravity,
      allDates,
    };
  }, [endDateProperty, maxDateProp, minDateProp, rows, startDateProperty]);

  const optimalTimeScale = ((): TimeScaleOption => {
    if (allDates.length <= 1) {
      return 'Year';
    }
    const timelineViewPortWidth =
      (timelineContainerElementRef.current?.parentElement?.offsetWidth ||
        window.innerWidth) -
      (shouldShowRowLabelsColumn ? rowLabelsColumnWidth : 0);

    if (
      timelineDifferenceInHours <= 24 &&
      timelineDifferenceInHours * 64 <= timelineViewPortWidth
    ) {
      return 'Day';
    }
    if (
      timelineDifferenceInDays <= 7 &&
      timelineDifferenceInDays * 200 <= timelineViewPortWidth
    ) {
      return 'Week';
    }
    if (
      timelineDifferenceInDays <= 14 &&
      timelineDifferenceInDays * 100 <= timelineViewPortWidth
    ) {
      return '2 week';
    }
    if (
      timelineDifferenceInDays <= 30 &&
      timelineDifferenceInDays * 60 <= timelineViewPortWidth
    ) {
      return 'Month';
    }
    if (timelineDifferenceInDays <= 90) {
      return 'Quarter';
    }
    if (timelineDifferenceInDays <= 365) {
      return 'Year';
    }
    return '5 year';
  })();

  const scrollToDate: ScrollToDateFunction = useCallback(
    (date) => {
      if (
        timelineContainerElementRef.current?.parentElement &&
        isAfter(date, minCalendarDate) &&
        isBefore(date, maxCalendarDate)
      ) {
        const offsetPercentage =
          differenceInHours(date, minCalendarDate) / totalNumberOfHours;
        const { parentElement } = timelineContainerElementRef.current;
        const { scrollWidth, offsetWidth } = parentElement;
        parentElement.scrollTo({
          left:
            Math.round(scrollWidth * offsetPercentage) +
            baseSpacingUnits -
            Math.round(offsetWidth / 2),
          behavior: 'smooth',
        });
      }
    },
    [baseSpacingUnits, maxCalendarDate, minCalendarDate, totalNumberOfHours]
  );
  const scrollToDateRef = useRef(scrollToDate);
  scrollToDateRef.current = scrollToDate;

  useEffect(() => {
    getScrollToDateFunctionRef.current?.(scrollToDate);
  }, [scrollToDate]);

  const selectedTimeScale = ((): TimeScaleOption => {
    if (searchParamsSelectedTimeScale) {
      return searchParamsSelectedTimeScale;
    }
    if (selectedTimeScaleProp) {
      return selectedTimeScaleProp;
    }
    return optimalTimeScale;
  })();

  const { timeScaleRows, unitTimeScaleWidth, timeScaleWidth } =
    useMemo((): TimeScaleConfiguration => {
      const getDailyTickTimeScale = ({
        dayWidth,
        unitTimeScale,
        dayOfWeekFormat,
      }: {
        dayWidth: number;
        unitTimeScale: number;
        dayOfWeekFormat: string;
      }): TimeScaleConfiguration => {
        return {
          timeScaleRows: [
            timelineYears.flatMap((year) => {
              return fullMonthLabels.map((monthLabel) => {
                return {
                  id: uniqueId(),
                  label: `${monthLabel} ${year}`,
                };
              });
            }),
            (() => {
              if (TimeScaleMeterPropsVariant === 'compact') {
                return timelineYears.flatMap((year) => {
                  return fullMonthLabels.flatMap((_, index) => {
                    const unitTickDate = new Date(year, index, 1);
                    const daysInMonth = getDaysInMonth(unitTickDate);
                    return Array.from({ length: daysInMonth }).map(
                      (_, dayOfMonthIndex) => {
                        const tickDate = addDays(unitTickDate, dayOfMonthIndex);
                        const dayOfWeekIndex = tickDate.getDay();
                        return {
                          id: uniqueId(),
                          label: formatDate(
                            tickDate,
                            dayOfMonthIndex === 0 ? 'MMM d, yyyy' : 'EEE, MMM d'
                          ),
                          showLabel:
                            dayOfMonthIndex === 0 ||
                            (dayOfWeekIndex === 1 &&
                              dayOfMonthIndex >= 2 &&
                              daysInMonth - dayOfMonthIndex >= 2),
                        } as TimeScaleRow;
                      }
                    );
                  });
                });
              }
              return timelineYears.flatMap((year) => {
                return fullMonthLabels.flatMap((_, index) => {
                  const unitTickDate = new Date(year, index, 1);
                  const daysInMonth = getDaysInMonth(unitTickDate);
                  return Array.from({ length: daysInMonth }).map((_, index) => {
                    const tickDate = addDays(unitTickDate, index);
                    return {
                      id: uniqueId(),
                      label: formatDate(tickDate, dayOfWeekFormat),
                    };
                  });
                });
              });
            })(),
            timelineYears.flatMap((year) => {
              return fullMonthLabels.flatMap((_, index) => {
                const unitTickDate = new Date(year, index, 1);
                const daysInMonth = getDaysInMonth(unitTickDate);
                return Array.from({ length: daysInMonth }).map(
                  (_, dayOfMonthIndex) => {
                    const tickDate = addDays(unitTickDate, dayOfMonthIndex);
                    const dayOfWeekIndex = tickDate.getDay();
                    return {
                      id: uniqueId(),
                      label: formatDate(tickDate, 'd'),
                      ...(() => {
                        if (TimeScaleMeterPropsVariant === 'compact') {
                          return {
                            sx: {
                              ...(() => {
                                if (dayOfWeekIndex === 1) {
                                  return {
                                    borderLeftColor: '#f00',
                                  };
                                }
                              })(),
                              ...(() => {
                                if (dayOfMonthIndex === 0) {
                                  return {
                                    borderLeftColor: palette.text.primary,
                                  };
                                }
                              })(),
                            },
                          };
                        }
                      })(),
                    };
                  }
                );
              });
            }),
          ],
          unitTimeScaleWidth: dayWidth * unitTimeScale,
          timeScaleWidth: totalNumberOfDays * dayWidth,
        };
      };

      const getMonthlyTickTimeScale = ({
        monthSplit,
        unitTimeScaleWidth,
      }: {
        monthSplit: number;
        unitTimeScaleWidth: number;
      }): TimeScaleConfiguration => {
        const totalTimeScaleRegions = timelineYears.length * 12 * monthSplit;
        return {
          timeScaleRows: [
            timelineYears.flatMap((year) => {
              return quarterLabels.map((quarter) => {
                const label = `${quarter} ${year}`;
                return {
                  id: uniqueId(),
                  label,
                };
              });
            }),
            (() => {
              if (TimeScaleMeterPropsVariant === 'compact') {
                return timelineYears.flatMap((year) => {
                  return fullMonthLabels.map((label, monthIndex) => {
                    return {
                      id: uniqueId(),
                      label: (() => {
                        if (
                          selectedTimeScale === 'Quarter' ||
                          monthIndex === 0
                        ) {
                          if (
                            selectedTimeScale === 'Quarter' &&
                            monthIndex % 3 === 0
                          ) {
                            return `Q${
                              Math.floor(monthIndex / 3) + 1
                            } ${label.slice(0, 3)} ${year}`;
                          }
                          return `${label.slice(0, 3)} ${year}`;
                        }
                        return label.slice(0, 3);
                      })(),
                      sx: {
                        color: alpha(palette.text.primary, 0.3),
                        ...(() => {
                          if (
                            (selectedTimeScale === 'Quarter' &&
                              monthIndex % 3 === 0) ||
                            monthIndex === 0
                          ) {
                            return {
                              color: palette.text.primary,
                            };
                          }
                        })(),
                      },
                    } as TimeScaleRow;
                  });
                });
              }
              return timelineYears.flatMap(() => {
                return fullMonthLabels.map((label) => {
                  return {
                    id: uniqueId(),
                    label,
                  };
                });
              });
            })(),
            timelineYears.flatMap((_, yearIndex) => {
              return Array.from({ length: 12 }).flatMap((_, monthIndex) => {
                return Array.from({ length: monthSplit }).map(
                  (_, periodIndex) => {
                    const unitTickDate = addDays(
                      minCalendarDate,
                      Math.round(
                        totalNumberOfDays *
                          (((yearIndex * 12 + monthIndex) * monthSplit +
                            periodIndex) /
                            totalTimeScaleRegions)
                      )
                    );
                    return {
                      id: uniqueId(),
                      label: unitTickDate.getDate(),
                      sx: {
                        ...(() => {
                          if (
                            (selectedTimeScale === 'Quarter' &&
                              monthIndex % 3 === 0) ||
                            (monthIndex === 0 && periodIndex === 0)
                          ) {
                            return {
                              borderLeftColor: palette.text.primary,
                            };
                          }
                        })(),
                      },
                    };
                  }
                );
              });
            }),
          ],
          unitTimeScaleWidth,
          timeScaleWidth: unitTimeScaleWidth * timelineYears.length,
        };
      };

      switch (selectedTimeScale) {
        case 'Day':
          const hourWidth = 64;
          return {
            timeScaleRows: [
              timelineYears.flatMap((year) => {
                return fullMonthLabels.flatMap((_, monthIndex) => {
                  return Array.from({
                    length: getDaysInMonth(new Date(year, monthIndex, 1)),
                  }).map((_, dayIndex) => {
                    return {
                      id: uniqueId(),
                      label: formatDate(
                        new Date(year, monthIndex, dayIndex + 1),
                        'MMMM d, yyyy'
                      ),
                    };
                  });
                });
              }),
              timelineYears.flatMap((year) => {
                return fullMonthLabels.flatMap((_, monthIndex) => {
                  return Array.from({
                    length: getDaysInMonth(new Date(year, monthIndex, 1)),
                  }).map((_, dayIndex) => {
                    return {
                      id: uniqueId(),
                      label: formatDate(
                        new Date(year, monthIndex, dayIndex + 1),
                        'EEEE'
                      ),
                    };
                  });
                });
              }),
              timelineYears.flatMap((year) => {
                return fullMonthLabels.flatMap((_, monthIndex) => {
                  return Array.from({
                    length: getDaysInMonth(new Date(year, monthIndex, 1)),
                  }).flatMap((_, dayIndex) => {
                    const tickDate = new Date(year, monthIndex, dayIndex + 1);
                    return Array.from({ length: 24 }).map((_, hourIndex) => {
                      return {
                        id: uniqueId(),
                        label: formatDate(addHours(tickDate, hourIndex), 'h a'),
                      };
                    });
                  });
                });
              }),
            ],
            unitTimeScaleWidth: 24 * hourWidth,
            timeScaleWidth: totalNumberOfHours * hourWidth,
          };
        case 'Week':
          return getDailyTickTimeScale({
            dayOfWeekFormat: 'EEEE',
            dayWidth: 200,
            unitTimeScale: 7,
          });
        case '2 week':
          return getDailyTickTimeScale({
            dayOfWeekFormat: 'EEE',
            dayWidth: 100,
            unitTimeScale: 15,
          });
        case 'Month':
          return getDailyTickTimeScale({
            dayOfWeekFormat: 'EEEEE',
            dayWidth: 60,
            unitTimeScale: 30,
          });
        case 'Quarter':
          return getMonthlyTickTimeScale({
            monthSplit: 4,
            unitTimeScaleWidth: baseTimeScaleWidth * 4 * 12,
          });
        case 'Year':
          return getMonthlyTickTimeScale({
            monthSplit: (() => {
              if (TimeScaleMeterPropsVariant === 'compact') {
                return 2;
              }
              return 3;
            })(),
            unitTimeScaleWidth: baseTimeScaleWidth * 12,
          });
        case '5 year':
          const unitTimeScaleWidth = baseTimeScaleWidth * 12;
          return {
            timeScaleRows: [
              timelineYears.flatMap((year) => {
                return {
                  id: uniqueId(),
                  label: String(year),
                };
              }),
              timelineYears.flatMap(() => {
                return quarterLabels.map((quarter) => {
                  return {
                    id: uniqueId(),
                    label: quarter,
                  };
                });
              }),
              timelineYears.flatMap(() => {
                return shortMonthLabels.map((label) => {
                  return {
                    id: uniqueId(),
                    label,
                  };
                });
              }),
            ],
            unitTimeScaleWidth,
            timeScaleWidth: (unitTimeScaleWidth * timelineYears.length) / 4,
          };
      }
    }, [
      TimeScaleMeterPropsVariant,
      minCalendarDate,
      palette.text.primary,
      selectedTimeScale,
      timelineYears,
      totalNumberOfDays,
      totalNumberOfHours,
    ]);

  const resetToDefaultView = useRef(() => {
    setSearchParams(
      {
        timeScale: null,
      },
      {
        replace: true,
      }
    );
  });

  useEffect(() => {
    if (getDefaultViewResetFunctionRef.current) {
      getDefaultViewResetFunctionRef.current(resetToDefaultView.current);
    }
  }, []);

  useEffect(() => {
    if (timelineContainerElementRef.current?.parentElement) {
      const { parentElement } = timelineContainerElementRef.current;
      const scrollEventCallback = () => {
        const { scrollLeft, offsetWidth, scrollWidth } = parentElement;
        currentDateAtCenterRef.current = addHours(
          minCalendarDate,
          totalNumberOfHours *
            ((scrollLeft - baseSpacingUnits + Math.round(offsetWidth / 2)) /
              scrollWidth)
        );
        setIsTimelineAtCenterOfGravity(
          isSameDay(currentDateAtCenterRef.current!, centerOfGravity)
        );
      };
      parentElement.addEventListener('scroll', scrollEventCallback);
      return () => {
        return parentElement.removeEventListener('scroll', scrollEventCallback);
      };
    }
  }, [baseSpacingUnits, centerOfGravity, minCalendarDate, totalNumberOfHours]);

  const getTimelineElementNode = ({
    startDate: startDateValue,
    endDate: endDateValue,
    label,
    TooltipProps = {},
    sx,
    ...rest
  }: TimelineElement) => {
    if (startDateValue) {
      const startDate = createDateWithoutTimezoneOffset(startDateValue as any);
      if (!isNaN(startDate.getTime())) {
        const endDate = (() => {
          if (endDateValue) {
            const endDate = createDateWithoutTimezoneOffset(
              endDateValue as any
            );
            if (!isNaN(endDate.getTime())) {
              if (
                typeof endDateValue === 'string' &&
                !dateStringHasTimeComponent(endDateValue)
              ) {
                endDate.setHours(23, 59, 59, 999);
              }
              return endDate;
            }
          }
          return maxCalendarDate;
        })();
        if (isAfter(endDate, startDate)) {
          const numberOfHours = differenceInHours(endDate, startDate);
          const offsetPercentage =
            differenceInHours(startDate, minCalendarDate) / totalNumberOfHours;
          const percentage = numberOfHours / totalNumberOfHours;

          const baseTimelineElementLabel = `${formatDate(
            startDate,
            'MMM dd, yyyy'
          )} - ${formatDate(endDate, 'MMM dd, yyyy')}`;

          const timelineElementLabel = ((): ReactNode => {
            if (label) {
              return label;
            }
            return baseTimelineElementLabel;
          })();

          const {
            PopperProps: TooltipPropsPopperProps = {},
            ...TooltipPropsRest
          } = TooltipProps;

          return (
            <Tooltip
              title={baseTimelineElementLabel}
              followCursor
              enterDelay={1000}
              enterNextDelay={500}
              {...TooltipPropsRest}
              PopperProps={{
                ...TooltipPropsPopperProps,
                sx: {
                  pointerEvents: 'none',
                  ...TooltipPropsPopperProps.sx,
                },
              }}
            >
              <Box
                {...rest}
                sx={{
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  px: 2,
                  bgcolor: palette.background.paper,
                  border: `1px solid ${palette.divider}`,
                  ...sx,
                  width: `${percentage * 100}%`,
                  position: 'absolute',
                  top: 0,
                  left: `${offsetPercentage * 100}%`,
                  height: 42,
                  borderRadius: '4px',
                }}
              >
                <Typography
                  component="div"
                  variant="body2"
                  noWrap
                  sx={{
                    width: '100%',
                  }}
                >
                  {timelineElementLabel}
                </Typography>
              </Box>
            </Tooltip>
          );
        }
      }
    }
  };

  useEffect(() => {
    scrollToDateRef.current(centerOfGravity);
  }, [centerOfGravity]);

  useEffect(() => {
    if (selectedTimeScale && lastDateAtCenterRef.current) {
      scrollToDateRef.current(lastDateAtCenterRef.current);
      lastDateAtCenterRef.current = null;
    }
  }, [selectedTimeScale]);

  useEffect(() => {
    isInitialMountRef.current = false;
    return () => {
      isInitialMountRef.current = true;
    };
  }, []);

  //#region TimeScale Tool
  const onSelectTimeScale: SelectTimeScaleCallbackFunction = useCallback(
    (timeScale) => {
      lastDateAtCenterRef.current = currentDateAtCenterRef.current;
      setSearchParams(
        {
          timeScale,
        },
        {
          replace: true,
        }
      );
    },
    [setSearchParams]
  );

  useEffect(() => {
    getSelectTimeScaleFunctionRef.current?.(onSelectTimeScale);
  }, [onSelectTimeScale]);

  const { element: timeScaleToolElement } = useTimeScaleTool({
    selectedTimeScale,
    supportedTimeScales,
    onSelectTimeScale,
  });
  //#endregion

  //#region Scroll Timeline Tools
  const jumpToOptimalTimeScale = useCallback(() => {
    lastDateAtCenterRef.current = centerOfGravity;
    if (selectedTimeScale !== optimalTimeScale) {
      setSearchParams(
        {
          timeScale: optimalTimeScale,
        },
        {
          replace: true,
        }
      );
    } else {
      scrollToDate(centerOfGravity);
    }
  }, [
    centerOfGravity,
    optimalTimeScale,
    scrollToDate,
    selectedTimeScale,
    setSearchParams,
  ]);

  useEffect(() => {
    getJumpToOptimalTimeScaleFunctionRef.current?.(jumpToOptimalTimeScale);
  }, [jumpToOptimalTimeScale]);

  const jumpToPreviousUnitTimeScale = useCallback(() => {
    timelineContainerElementRef.current?.parentElement?.scrollBy({
      left: -unitTimeScaleWidth,
      behavior: 'smooth',
    });
  }, [unitTimeScaleWidth]);

  useEffect(() => {
    getJumpToPreviousUnitTimeScaleFunctionRef.current?.(
      jumpToPreviousUnitTimeScale
    );
  }, [jumpToPreviousUnitTimeScale]);

  const jumpToNextUnitTimeScale = useCallback(() => {
    timelineContainerElementRef.current?.parentElement?.scrollBy({
      left: unitTimeScaleWidth,
      behavior: 'smooth',
    });
  }, [unitTimeScaleWidth]);

  useEffect(() => {
    getJumpToNextUnitTimeScaleFunctionRef.current?.(jumpToNextUnitTimeScale);
  }, [jumpToNextUnitTimeScale]);

  const { element: scrollTimelineToolsElement } = useScrollTimelineTools({
    JumpToDateToolProps: {
      minDate: minCalendarDate,
      maxDate: maxCalendarDate,
      selectedDate: currentDateAtCenterRef.current,
    },
    scrollToDate,
    showJumpToOptimalTimeScaleTool:
      selectedTimeScale !== optimalTimeScale || !isTimelineAtCenterOfGravity,
    jumpToOptimalTimeScale,
    jumpToPreviousUnitTimeScale,
    jumpToNextUnitTimeScale,
  });
  //#endregion

  const columns: TableColumn<RecordRow>[] = [
    {
      id: 'timeline',
      label: (
        <TimeScaleMeter
          {...TimeScaleMeterPropsRest}
          {...{ timeScaleRows, timeScaleWidth }}
          scrollingElement={timelineContainerElementRef.current?.parentElement}
          leftOffset={
            (shouldShowRowLabelsColumn ? rowLabelsColumnWidth : 0) +
            baseSpacingUnits
          }
          variant={TimeScaleMeterPropsVariant}
          sx={{
            ...TimeScaleMeterPropsSx,
            [`.${timeScaleMeterClasses.timeScaleLevel1Tick}`]: {
              left:
                (shouldShowRowLabelsColumn ? rowLabelsColumnWidth : 0) +
                (() => {
                  if (shouldShowRowLabelsColumn) {
                    return 16;
                  }
                  return baseSpacingUnits;
                })(),
            },
          }}
        />
      ),
      secondaryHeaderRowContent: (() => {
        const today = new Date();
        if (
          isAfter(today, minCalendarDate) &&
          isBefore(today, maxCalendarDate)
        ) {
          const offsetPercentage =
            differenceInHours(today, minCalendarDate) / totalNumberOfHours;
          return (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
              }}
            >
              <Box
                ref={todayIndicatorRef}
                sx={{
                  position: 'absolute',
                  width: 2,
                  bgcolor: palette.primary.main,
                  height: rows.length * 51,
                  top: (() => {
                    if (todayMarkerVariant === 'foregroundFullSpan') {
                      return `calc(100% - 400px)`;
                    }
                    return '100%';
                  })(),
                  left: `${offsetPercentage * 100}%`,
                }}
              />
            </Box>
          );
        }
      })(),
      getColumnValue: (row) => {
        if (getTimelineElements) {
          const timelineElements = getTimelineElements(row);
          return (
            <>
              {timelineElements.map((timelineElement, index) => {
                return (
                  <Fragment key={index}>
                    {getTimelineElementNode(timelineElement)}
                  </Fragment>
                );
              })}
            </>
          );
        }
        if (startDateProperty && endDateProperty) {
          return getTimelineElementNode({
            startDate: result(row, startDateProperty),
            endDate: result(row, endDateProperty),
            label: ((): ReactNode => {
              if (getTimelineElementLabel) {
                return getTimelineElementLabel(row);
              }
              if (timelineElementLabelProperty) {
                return result(row, timelineElementLabelProperty);
              }
            })(),
            TooltipProps: (() => {
              if (getTimelineElementTooltipProps) {
                return getTimelineElementTooltipProps(row);
              }
            })(),
            ...(() => {
              if (getTimelineElementProps) {
                return getTimelineElementProps(row);
              }
            })(),
          });
        }
      },
      width: timeScaleWidth + baseSpacingUnits * 2,
      wrapColumnContentInFieldValue: false,
      headerSx: {
        '&>div': {
          py: 0,
          pl: `${baseSpacingUnits}px`,
          pr: `${baseSpacingUnits}px`,
        },
      },
      bodySx: {
        pl: `${baseSpacingUnits}px`,
        pr: `${baseSpacingUnits}px`,
        py: 0.5,
        '&>div': {
          height: 42,
        },
      },
    },
  ];

  if (shouldShowRowLabelsColumn) {
    columns.unshift({
      id: 'label',
      label: rowLabelsColumnHeader,
      width: rowLabelsColumnWidth,
      showHeaderText: Boolean(rowLabelsColumnHeader),
      getColumnValue: (row) => {
        if (getRowLabel) {
          return getRowLabel(row);
        }
        if (rowLabelProperty) {
          return result(row, rowLabelProperty);
        }
      },
      headerSx: {
        ...(() => {
          if (todayMarkerVariant === 'foregroundFullSpan') {
            return {
              zIndex: 3,
            };
          }
        })(),
        ...(() => {
          if (!rowLabelsColumnHeader) {
            return {
              borderRight: 'none !important',
              zIndex: 1,
              '&>div': {
                py: 0,
                pl: `${baseSpacingUnits}px`,
                pr: `${baseSpacingUnits}px`,
              },
            };
          }
        })(),
      },
      secondaryHeaderSx: {
        borderRight: 'none !important',
        '&>div': {
          py: 0,
          pl: `${baseSpacingUnits}px`,
          pr: `${baseSpacingUnits}px`,
        },
      },
      bodySx: {
        zIndex: 2,
        ...(() => {
          if (todayMarkerVariant === 'foregroundFullSpan') {
            return {
              zIndex: 3,
            };
          }
        })(),
      },
    });
    columns.push({
      id: 'gutter',
      label: 'Gutter',
      width: 40,
      showHeaderText: false,
      headerSx: {
        '&>div': {
          p: 0,
        },
      },
    });
  }

  return (
    <>
      {showToolBar ? (
        <Box
          sx={{
            height: 0,
            zIndex: 5,
            position: 'sticky',
            top: 0,
            left: 0,
            display: 'flex',
          }}
        >
          <Box sx={{ flex: 1 }} />
          <Grid
            container
            sx={{
              pr: `${baseSpacingUnits}px`,
              pl: 1,
              py: 1,
              position: 'sticky',
              right: 0,
              display: 'inline-flex',
              gap: isSmallScreenSize ? 0.5 : 2,
              bgcolor: parentBackgroundColor,
              height: 56,
              width: 'auto',
            }}
          >
            <Grid item>{timeScaleToolElement}</Grid>
            <Grid item>{scrollTimelineToolsElement}</Grid>
          </Grid>
        </Box>
      ) : null}
      <Table
        ref={mergeRefs([timelineContainerElementRef, ref])}
        className={clsx(className, classes.root)}
        {...rest}
        parentBackgroundColor={parentBackgroundColor}
        columns={columns}
        paging={false}
        bordersVariant="square"
        rows={rows}
        {...(() => {
          if (!isSmallScreenSize) {
            return {
              startStickyColumnIndex: 0,
            };
          }
        })()}
        stickyHeader
        enableSmallScreenOptimization={false}
        HeaderRowProps={{
          sx: {
            position: 'relative',
            zIndex: 3,
          },
        }}
        SecondaryHeaderRowProps={{
          sx: {
            position: 'relative',
            zIndex: -1,
            ...(() => {
              if (todayMarkerVariant === 'foregroundFullSpan') {
                return {
                  zIndex: 3,
                };
              }
            })(),
          },
        }}
        TableBodyRowPlaceholderProps={{
          sx: {
            height: 51,
          },
        }}
        sx={{
          tr: {
            verticalAlign: 'middle',
          },
        }}
      />
    </>
  );
};

export const Timeline = forwardRef(BaseTimeline) as <
  RecordRow extends BaseDataRow
>(
  p: TimelineProps<RecordRow> & { ref?: Ref<HTMLDivElement> }
) => ReactElement;

export default Timeline;

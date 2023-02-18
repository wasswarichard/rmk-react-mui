import SearchIcon from '@mui/icons-material/Search';
import {
  Divider,
  Grid,
  Tooltip,
  alpha,
  iconButtonClasses,
  outlinedInputClasses,
} from '@mui/material';
import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import {
  Dispatch,
  Fragment,
  SetStateAction,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { usePaginatedRecords } from '../../hooks/Utils';
import {
  DropdownOption as BaseDropdownOption,
  PaginatedRequestParams,
  PaginatedResponseData,
} from '../../interfaces/Utils';
import ReloadIconButton from '../ReloadIconButton';
import SearchField, { SearchFieldProps } from '../SearchField';
import DropdownOption, {
  DEFAULT_DROPDOWN_OPTION_HEIGHT,
  DropdownOptionVariant,
} from './DropdownOption';

export interface DropdownOption
  extends Pick<MenuItemProps, 'onClick'>,
    BaseDropdownOption {}

export interface PaginatedDropdownOptionListProps {
  options?: DropdownOption[];
  selectedOptions?: DropdownOption[];
  setSelectedOptions?: Dispatch<SetStateAction<DropdownOption[]>>;
  minWidth?: number;
  maxHeight?: number;
  optionHeight?: number;
  paging?: boolean;
  multiple?: boolean;
  loading?: boolean;
  onClose?: () => void;
  onLoadOptions?: (options: DropdownOption[]) => void;
  onSelectOption?: (selectedOption: DropdownOption) => void;
  onChangeSelectedOption?: (selectedOptions: DropdownOption[]) => void;
  CardProps?: CardProps;
  optionVariant?: DropdownOptionVariant;
  searchable?: boolean;
  searchTerm?: string;
  SearchFieldProps?: Partial<SearchFieldProps>;

  // Async options
  getDropdownOptions?: (
    options: Pick<PaginatedRequestParams, 'limit' | 'offset' | 'searchTerm'>
  ) => Promise<PaginatedResponseData<DropdownOption> | DropdownOption[]>;
  callGetDropdownOptions?: 'always' | 'whenNoOptions';
  externallyPaginated?: boolean;
  dataKey?: string;
  limit?: number;
}

const DEFAULT_DROPDOWN_MENU_MAX_HEIGHT = 200;

export const PaginatedDropdownOptionList = forwardRef<
  HTMLDivElement,
  PaginatedDropdownOptionListProps
>(function PaginatedDropdownOptionList(
  {
    selectedOptions: selectedOptionsProp,
    setSelectedOptions: setSelectedOptionsProp,
    minWidth = DEFAULT_DROPDOWN_MENU_MAX_HEIGHT,
    maxHeight = DEFAULT_DROPDOWN_MENU_MAX_HEIGHT,
    optionHeight = DEFAULT_DROPDOWN_OPTION_HEIGHT,
    paging = true,
    options: optionsProp,
    onLoadOptions,
    multiple,
    onClose,
    loading: loadingProp,
    getDropdownOptions,
    onSelectOption,
    onChangeSelectedOption,
    CardProps,
    optionVariant,
    searchable = false,
    searchTerm: searchTermProp = '',
    SearchFieldProps = {},
    externallyPaginated,
    dataKey,
    limit: limitProp = 100,
  },
  ref
) {
  const { sx: SearchFieldPropsSx, ...SearchFieldPropsRest } = SearchFieldProps;

  // Refs
  const isInitialMount = useRef(true);
  const optionsRef = useRef(optionsProp);
  const onCloseRef = useRef(onClose);
  const onSelectOptionRef = useRef(onSelectOption);
  const onChangeSelectedOptionRef = useRef(onChangeSelectedOption);
  const onLoadOptionsRef = useRef(onLoadOptions);
  useEffect(() => {
    optionsRef.current = optionsProp;
    onCloseRef.current = onClose;
    onSelectOptionRef.current = onSelectOption;
    onChangeSelectedOptionRef.current = onChangeSelectedOption;
    onLoadOptionsRef.current = onLoadOptions;
  }, [
    onChangeSelectedOption,
    onClose,
    onLoadOptions,
    onSelectOption,
    optionsProp,
  ]);

  const displayLimit = useMemo(() => {
    return Math.ceil(maxHeight / optionHeight) + 1;
  }, [maxHeight, optionHeight]);

  if (limitProp < displayLimit) {
    limitProp = displayLimit;
  }

  const { palette } = useTheme();
  const [scrollableDropdownWrapper, setScrollableDropdownWrapper] =
    useState<HTMLDivElement | null>(null);

  const [limit, setLimit] = useState(displayLimit);
  const [offset, setOffset] = useState(0);

  const [searchTerm, setSearchTerm] = useState(searchTermProp);
  const [scrolledToSelectedOption, setScrolledToSelectedOption] =
    useState(false);

  const {
    load: loadAsyncOptions,
    loading,
    allPageRecords: asyncOptions,
    loaded: isAsyncOptionsLoaded,
    loadNextPage: loadNextAsyncOptions,
    errorMessage,
    reset: resetAsyncOptionState,
  } = usePaginatedRecords(
    async ({ limit, offset, searchTerm }) => {
      if (getDropdownOptions) {
        const optionsResponse = await getDropdownOptions({
          searchTerm,
          limit,
          offset,
        });
        if (Array.isArray(optionsResponse)) {
          return {
            records: optionsResponse,
            recordsTotalCount: optionsResponse.length,
          };
        }
        return optionsResponse;
      }
      return { records: [], recordsTotalCount: 0 };
    },
    {
      loadOnMount: false,
      autoSync: false,
      key: dataKey,
      revalidationKey: searchTerm,
      limit: limitProp,
    }
  );

  useEffect(() => {
    if (
      getDropdownOptions &&
      !isAsyncOptionsLoaded &&
      (!optionsRef.current || optionsRef.current.length <= 0)
    ) {
      loadAsyncOptions({ searchTerm });
    }
  }, [getDropdownOptions, loadAsyncOptions, isAsyncOptionsLoaded, searchTerm]);

  useEffect(() => {
    if (!isInitialMount.current && onLoadOptionsRef.current) {
      onLoadOptionsRef.current(asyncOptions);
    }
  }, [asyncOptions]);

  useEffect(() => {
    if (getDropdownOptions && externallyPaginated) {
      resetAsyncOptionState();
      loadAsyncOptions({ searchTerm });
    }
  }, [
    externallyPaginated,
    getDropdownOptions,
    loadAsyncOptions,
    resetAsyncOptionState,
    searchTerm,
  ]);

  const options = ((): typeof asyncOptions => {
    if (getDropdownOptions && asyncOptions.length > 0) {
      return asyncOptions;
    }
    if (optionsRef.current && optionsRef.current.length > 0) {
      return optionsRef.current;
    }
    return [];
  })();

  // Options state
  const [filteredOptions, setFilteredOptions] =
    useState<DropdownOption[]>(options); // Filtered options state
  const [selectedOptions, setSelectedOptions] = useState<DropdownOption[]>(
    selectedOptionsProp || []
  ); // Selected options state
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    setSearchTerm(searchTermProp);
  }, [searchTermProp]);

  // Filtering options
  useEffect(() => {
    setFilteredOptions(
      (() => {
        if (searchTerm && !externallyPaginated) {
          return options.filter(
            ({ searchableLabel: baseSearchableLabel, label }) => {
              const searchableLabel = baseSearchableLabel || String(label);
              return (
                searchableLabel &&
                searchableLabel.toLowerCase().match(searchTerm.toLowerCase())
              );
            }
          );
        }
        return options;
      })()
    );
  }, [externallyPaginated, options, searchTerm]);

  const triggerChangeEvent = useCallback(
    (option: DropdownOption) => {
      const { value } = option;
      const nextOptions = (() => {
        if (multiple) {
          const localOptions = [...selectedOptions];
          const selectedOption = localOptions.find(
            ({ value: selectedOptionValue }) => {
              return selectedOptionValue === value;
            }
          );
          if (selectedOption) {
            localOptions.splice(localOptions.indexOf(selectedOption), 1);
          } else {
            localOptions.push(option);
          }
          return localOptions.sort((a, b) => {
            const aOption = options.find(({ value }) => value === a.value);
            const bOption = options.find(({ value }) => value === b.value);

            if (aOption && bOption) {
              return options.indexOf(aOption) - options.indexOf(bOption);
            }
            return 0;
          });
        }
        return [option];
      })();
      setSelectedOptions(nextOptions);
      onChangeSelectedOptionRef.current &&
        onChangeSelectedOptionRef.current(nextOptions);
      if (!multiple && onCloseRef.current) {
        onCloseRef.current();
      }
    },
    [multiple, options, selectedOptions]
  );

  useEffect(() => {
    if (selectedOptionsProp) {
      setSelectedOptions(selectedOptionsProp);
    }
  }, [selectedOptionsProp]);

  useEffect(() => {
    if (setSelectedOptionsProp) {
      setSelectedOptionsProp(selectedOptions);
    }
  }, [setSelectedOptionsProp, selectedOptions]);

  useEffect(() => {
    const keydownCallback = (event: KeyboardEvent) => {
      const nextFocusedOptionIndex = (() => {
        switch (event.key) {
          case 'ArrowUp':
            if (focusedOptionIndex != null) {
              return (
                (!!focusedOptionIndex
                  ? focusedOptionIndex
                  : filteredOptions.length) - 1
              );
            }
            return filteredOptions.length - 1;
          case 'ArrowDown':
            if (focusedOptionIndex != null) {
              return (focusedOptionIndex + 1) % filteredOptions.length;
            }
            return 0;
          case 'Enter':
            if (focusedOptionIndex != null) {
              onSelectOptionRef.current &&
                onSelectOptionRef.current(filteredOptions[focusedOptionIndex]);
              triggerChangeEvent(filteredOptions[focusedOptionIndex]);
            }
            break;
          case 'Escape':
            onCloseRef.current && onCloseRef.current();
            break;
        }
      })();
      if (nextFocusedOptionIndex != null) {
        setFocusedOptionIndex(nextFocusedOptionIndex);
        if (scrollableDropdownWrapper) {
          if (nextFocusedOptionIndex > offset + limit - 1) {
            scrollableDropdownWrapper.scrollTop =
              (nextFocusedOptionIndex + 1) * optionHeight - maxHeight;
          } else {
            const { scrollTop } = scrollableDropdownWrapper;
            const nextFocusedOptionScrollTop =
              (nextFocusedOptionIndex + 1) * optionHeight;
            if (nextFocusedOptionScrollTop <= scrollTop) {
              scrollableDropdownWrapper.scrollTop =
                nextFocusedOptionScrollTop - optionHeight;
            }
          }
        }
      }
    };
    window.addEventListener('keydown', keydownCallback);
    return () => {
      window.removeEventListener('keydown', keydownCallback);
    };
  }, [
    filteredOptions,
    focusedOptionIndex,
    limit,
    maxHeight,
    offset,
    optionHeight,
    scrollableDropdownWrapper,
    triggerChangeEvent,
  ]);

  useEffect(() => {
    if (scrollableDropdownWrapper && paging) {
      const scrollCallback = () => {
        const { scrollTop } = scrollableDropdownWrapper;
        setOffset(Math.floor(scrollTop / optionHeight));
      };
      scrollableDropdownWrapper.addEventListener('scroll', scrollCallback);
      return () => {
        scrollableDropdownWrapper.removeEventListener('scroll', scrollCallback);
      };
    }
  }, [optionHeight, paging, scrollableDropdownWrapper]);

  useEffect(() => {
    if (scrollableDropdownWrapper && externallyPaginated) {
      const scrollCallback = () => {
        const { scrollTop, scrollHeight, offsetHeight } =
          scrollableDropdownWrapper;
        if (scrollHeight - (scrollTop + offsetHeight) <= optionHeight * 5) {
          loadNextAsyncOptions({ searchTerm });
        }
      };
      scrollableDropdownWrapper.addEventListener('scroll', scrollCallback);
      return () => {
        scrollableDropdownWrapper.removeEventListener('scroll', scrollCallback);
      };
    }
  }, [
    externallyPaginated,
    loadNextAsyncOptions,
    optionHeight,
    scrollableDropdownWrapper,
    searchTerm,
  ]);

  useEffect(() => {
    setLimit(Math.ceil(maxHeight / optionHeight) + 1);
  }, [maxHeight, optionHeight]);

  useEffect(() => {
    if (
      scrollableDropdownWrapper &&
      selectedOptionsProp &&
      !scrolledToSelectedOption
    ) {
      const selectedOptionIndices = selectedOptionsProp
        .map(({ value: selectedOptionValue }) => {
          return filteredOptions.findIndex(({ value }) => {
            return value === selectedOptionValue;
          });
        })
        .filter((index) => index >= 0)
        .sort();
      if (selectedOptionIndices.length > 0) {
        scrollableDropdownWrapper.scrollTop =
          selectedOptionIndices[0] * optionHeight;
      }
      setScrolledToSelectedOption(true);
    }
  }, [
    optionHeight,
    filteredOptions,
    scrollableDropdownWrapper,
    scrolledToSelectedOption,
    selectedOptionsProp,
  ]);

  useEffect(() => {
    isInitialMount.current = false;
    return () => {
      isInitialMount.current = true;
    };
  }, []);

  const displayOptions = paging
    ? filteredOptions.slice(offset, offset + limit)
    : filteredOptions;
  const hasAllOptionsSelected = filteredOptions.every(({ value }) => {
    return selectedOptions.find(
      ({ value: selectedOptionValue }) => value === selectedOptionValue
    );
  });

  return (
    <Card {...CardProps} ref={ref} tabIndex={-1}>
      {(() => {
        if (searchable) {
          return (
            <>
              <Box
                sx={{
                  py: 1,
                  px: 2,
                }}
              >
                <SearchField
                  size="small"
                  placeholder="Search"
                  {...SearchFieldPropsRest}
                  InputProps={{
                    startAdornment: (
                      <SearchIcon sx={{ pointerEvents: 'none', mr: 1 }} />
                    ),
                    ...SearchFieldPropsRest.InputProps,
                  }}
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  fullWidth
                  sx={{
                    [`.${outlinedInputClasses.root}`]: {
                      borderRadius: '20px',
                      bgcolor: alpha(palette.divider, 0.1),
                      height: 38,
                    },
                    [`.${outlinedInputClasses.notchedOutline}`]: {
                      borderWidth: 0,
                    },
                    ...SearchFieldPropsSx,
                  }}
                />
              </Box>
              <Divider />
            </>
          );
        }
      })()}
      <Box
        ref={(scrollableDropdownWrapper: HTMLDivElement) => {
          setScrollableDropdownWrapper(scrollableDropdownWrapper);
        }}
        sx={{
          minWidth,
          maxHeight,
          boxSizing: 'border-box',
          overflowY: 'auto',
        }}
        tabIndex={-1}
      >
        <Box
          component="ul"
          sx={{
            m: 0,
            p: 0,
            minHeight: paging
              ? filteredOptions.length * optionHeight
              : undefined,
          }}
          tabIndex={-1}
        >
          <Box sx={{ height: offset * optionHeight }} />
          {(() => {
            if (displayOptions.length > 0) {
              return displayOptions.map((option) => {
                const {
                  value,
                  label,
                  icon,
                  description,
                  selectable,
                  isDropdownOption = true,
                  isDropdownOptionWrapped = true,
                  onClick,
                  component,
                  sx,
                } = option;
                if (isDropdownOption && isDropdownOptionWrapped) {
                  const classNames = [];
                  const isFocused =
                    filteredOptions.indexOf(option) === focusedOptionIndex;
                  if (isFocused) {
                    classNames.push('Mui-focusVisible');
                  }
                  const dropdownOptionElement = (
                    <DropdownOption
                      className={classNames.join(' ')}
                      value={value}
                      key={value}
                      onClick={(event) => {
                        triggerChangeEvent(option);
                        onClick && onClick(event);
                        onSelectOption && onSelectOption(option);
                      }}
                      selected={(() => {
                        const selectedOptionValues = selectedOptions.map(
                          ({ value }) => value
                        );
                        return selectedOptionValues.includes(value);
                      })()}
                      tabIndex={isFocused ? 0 : -1}
                      height={optionHeight}
                      variant={optionVariant}
                      {...{ selectable, component, icon, sx }}
                    >
                      {label}
                    </DropdownOption>
                  );
                  if (description) {
                    return (
                      <Tooltip
                        title={description}
                        key={value}
                        placement="left"
                        sx={{
                          pointerEvents: 'none',
                        }}
                      >
                        {dropdownOptionElement}
                      </Tooltip>
                    );
                  }
                  return dropdownOptionElement;
                }
                return <Fragment key={value}>{label}</Fragment>;
              });
            }

            if (
              !loading &&
              !loadingProp &&
              (!getDropdownOptions || isAsyncOptionsLoaded)
            ) {
              return (
                <MenuItem disabled>
                  <Typography variant="body2" color={palette.error.main}>
                    No options found
                  </Typography>
                </MenuItem>
              );
            }
          })()}
        </Box>
      </Box>
      {multiple && filteredOptions.length > 1 ? (
        <>
          <Divider />
          <DropdownOption
            onClick={(event) => {
              event.preventDefault();
              const selectableOptions = (() => {
                const selectedLockedOptions = selectedOptions
                  .map(({ value: selectedOptionValue }) => {
                    return options.find(
                      ({ value }) => value === selectedOptionValue
                    )!;
                  })
                  .filter((option) => {
                    return option?.selectable === false;
                  });
                const selectedOptionsNotInFilter = selectedOptions
                  .map(({ value: selectedOptionValue }) => {
                    return options.find(
                      ({ value }) => value === selectedOptionValue
                    )!;
                  })
                  .filter((option) => {
                    return !filteredOptions.includes(option);
                  });
                if (hasAllOptionsSelected) {
                  return options.filter((option) => {
                    return (
                      selectedLockedOptions.includes(option) ||
                      selectedOptionsNotInFilter.includes(option)
                    );
                  });
                }
                return filteredOptions.filter((option) => {
                  const { selectable = true } = option;
                  return selectable || selectedLockedOptions.includes(option);
                });
              })();
              setSelectedOptions(selectableOptions);
              onChangeSelectedOption &&
                onChangeSelectedOption(selectableOptions);
            }}
          >
            {hasAllOptionsSelected ? 'Deselect' : 'Select'} All
          </DropdownOption>
        </>
      ) : null}
      {getDropdownOptions && (
        <>
          {displayOptions.length > 0 ? <Divider /> : null}
          <DropdownOption
            onClick={(event) => {
              event.preventDefault();
              loadAsyncOptions({ searchTerm });
            }}
          >
            <Grid container sx={{ alignItems: 'center', gap: 1 }}>
              <Grid item>
                <ReloadIconButton
                  {...{ loading: loading || loadingProp, errorMessage }}
                  sx={{
                    pointerEvents: 'none',
                    [`& .${iconButtonClasses.root}`]: {
                      p: 0,
                    },
                  }}
                />
              </Grid>
              {!loadingProp ? (
                <Grid item xs sx={{ minWidth: 0 }}>
                  Refresh
                </Grid>
              ) : null}
            </Grid>
          </DropdownOption>
        </>
      )}
    </Card>
  );
});

export default PaginatedDropdownOptionList;

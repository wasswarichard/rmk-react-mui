import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  alpha,
  unstable_composeClasses as composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  inputBaseClasses,
  useMediaQuery,
  useTheme,
  useThemeProps,
} from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import clsx from 'clsx';
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { mergeRefs } from 'react-merge-refs';

import { useRecord } from '../../hooks/Utils';
import { isDescendant } from '../../utils/html';
import FieldValueDisplay from '../FieldValueDisplay';
import ModalPopup from '../ModalPopup';
import PaginatedDropdownOptionList, {
  DropdownOption,
  PaginatedDropdownOptionListProps,
} from '../PaginatedDropdownOptionList';
import TextField, { TextFieldProps } from './TextField';

export interface DataDropdownFieldClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type DataDropdownFieldClassKey = keyof DataDropdownFieldClasses;

// Adding theme prop types
declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MuiDataDropdownField: DataDropdownFieldProps;
  }
}

// Adding theme override types
declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiDataDropdownField: keyof DataDropdownFieldClasses;
  }
}

// Adding theme component types
declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MuiDataDropdownField?: {
      defaultProps?: ComponentsProps['MuiDataDropdownField'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiDataDropdownField'];
      variants?: ComponentsVariants['MuiDataDropdownField'];
    };
  }
}

export interface DataDropdownFieldProps
  extends Omit<TextFieldProps, 'value' | 'variant'>,
    Partial<
      Pick<
        PaginatedDropdownOptionListProps,
        | 'optionVariant'
        | 'onSelectOption'
        | 'searchable'
        | 'getDropdownOptions'
        | 'callGetDropdownOptions'
        | 'externallyPaginated'
        | 'limit'
        | 'sortOptions'
      >
    > {
  disableEmptyOption?: boolean;
  options?: DropdownOption[];
  dataKey?: string;
  value?: string | string[];
  selectedOption?: DropdownOption;
  getSelectedOptions?: (
    selectedValue: string | string[]
  ) => Promise<DropdownOption[]>;
  dropdownListMaxHeight?: number;
  optionPaging?: boolean;
  onChangeSearchTerm?: (searchTerm: string) => void;
  SelectedOptionPillProps?: Partial<BoxProps>;
  PaginatedDropdownOptionListProps?: Partial<PaginatedDropdownOptionListProps>;
  variant?: 'standard' | 'filled' | 'outlined' | 'text';
}

export function getDataDropdownFieldUtilityClass(slot: string): string {
  return generateUtilityClass('MuiDataDropdownField', slot);
}

export const dataDropdownFieldClasses: DataDropdownFieldClasses =
  generateUtilityClasses('MuiDataDropdownField', ['root']);

const slots = {
  root: ['root'],
};

export const DataDropdownField = forwardRef<
  HTMLDivElement,
  DataDropdownFieldProps
>(function DataDropdownField(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MuiDataDropdownField' });
  const {
    className,
    SelectProps,
    name,
    id,
    value,
    dataKey,
    options: optionsProp,
    sortOptions,
    onChange,
    onFocus,
    onBlur,
    InputProps,
    dropdownListMaxHeight,
    optionPaging = true,
    selectedOption,
    onChangeSearchTerm,
    optionVariant,
    sx,
    SelectedOptionPillProps = {},
    PaginatedDropdownOptionListProps = {},
    WrapperProps = {},
    disabled,
    showClearButton = true,
    searchable = true,
    getDropdownOptions,
    callGetDropdownOptions,
    onSelectOption,
    variant: variantProp,
    label,
    limit,
    externallyPaginated,
    getSelectedOptions,
    ...rest
  } = props;

  const classes = composeClasses(
    slots,
    getDataDropdownFieldUtilityClass,
    (() => {
      if (className) {
        return {
          root: className,
        };
      }
    })()
  );

  const isTextVariant = variantProp === 'text';
  const variant = (() => {
    if (variantProp !== 'text') {
      return variantProp;
    }
  })();

  const { sx: SelectedOptionPillPropsSx, ...SelectedOptionPillPropsRest } =
    SelectedOptionPillProps;
  const { ...PaginatedDropdownOptionListPropsRest } =
    PaginatedDropdownOptionListProps;
  const { sx: WrapperPropsSx, ...WrapperPropsRest } = WrapperProps;

  const multiple = SelectProps?.multiple;

  const { palette, breakpoints } = useTheme();

  const isSmallScreenSize = useMediaQuery(breakpoints.down('sm'));

  const [options, setOptions] = useState<DropdownOption[]>(optionsProp || []);

  // Refs
  const anchorRef = useRef<HTMLInputElement>(null);
  const onChangeRef = useRef(onChange);
  const optionsRef = useRef(options);
  const selectedOptionRef = useRef(selectedOption);
  const asyncOptionPagesMapRef = useRef<Map<number, DropdownOption[]>>();
  const getSelectedOptionsRef = useRef(getSelectedOptions);
  useEffect(() => {
    onChangeRef.current = onChange;
    optionsRef.current = options;
    selectedOptionRef.current = selectedOption;
    getSelectedOptionsRef.current = getSelectedOptions;
  }, [getSelectedOptions, onChange, options, selectedOption]);

  const [searchTerm, setSearchTerm] = useState('');

  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState<DropdownOption[]>([]);

  const selectedOptionValue = useMemo(() => {
    if (multiple) {
      return selectedOptions.map(({ value }) => value);
    }
    return selectedOptions[0]?.value;
  }, [multiple, selectedOptions]);

  const { load: loadAsyncSelectedOptions, record: asyncSelectedOptions } =
    useRecord<DropdownOption[]>(getSelectedOptions, {
      autoSync: false,
      loadOnMount: false,
    });

  const triggerChangeEvent = useCallback(
    (selectedOptions: DropdownOption[]) => {
      const selectedOptionValue = (() => {
        if (multiple) {
          return selectedOptions.map(({ value }) => value);
        }
        return selectedOptions[0]?.value;
      })();
      const event: any = new Event('blur', { bubbles: true });
      Object.defineProperty(event, 'target', {
        writable: false,
        value: { id, name, value: selectedOptionValue },
      });
      onChangeRef.current && onChangeRef.current(event);
    },
    [multiple, id, name]
  );

  const selectedOptionDisplayString = useMemo(() => {
    return selectedOptions
      .filter(({ label, searchableLabel }) => {
        return typeof label === 'string' || searchableLabel;
      })
      .map(({ label, searchableLabel }) => searchableLabel || label)
      .join(', ');
  }, [selectedOptions]);

  useEffect(() => {
    if (optionsProp) {
      setOptions((prevOptions) => {
        const nextOptions = optionsProp;
        if (
          JSON.stringify(
            prevOptions.map(({ value, label, searchableLabel }) => ({
              value,
              label: String(label),
              searchableLabel,
            }))
          ) !==
          JSON.stringify(
            nextOptions.map(({ value, label, searchableLabel }) => ({
              value,
              label: String(label),
              searchableLabel,
            }))
          )
        ) {
          return nextOptions;
        }
        return prevOptions;
      });
    }
  }, [optionsProp, sortOptions]);

  useEffect(() => {
    const fieldValues = Array.isArray(value) ? value : [value];
    setSelectedOptions((prevSelectedOptions) => {
      const nextSelectedOptions = fieldValues
        .map((value) => {
          return optionsRef.current.find(
            ({ value: optionValue }) => value === optionValue
          )!;
        })
        .filter((option) => option);
      if (
        prevSelectedOptions.map(({ value }) => value).join() !==
        nextSelectedOptions.map(({ value }) => value).join()
      ) {
        return nextSelectedOptions;
      }
      return prevSelectedOptions;
    });
  }, [value]);

  useEffect(() => {
    setSelectedOptions((prevSelectedOptions) => {
      if (selectedOption?.value && selectedOptionRef.current) {
        const nextSelectedOptions = [selectedOptionRef.current];
        if (
          nextSelectedOptions.map(({ value }) => value).join(';') !==
          prevSelectedOptions.map(({ value }) => value).join(';')
        ) {
          return nextSelectedOptions;
        }
      }
      return prevSelectedOptions;
    });
  }, [selectedOption?.value]);

  useEffect(() => {
    if (asyncSelectedOptions && asyncSelectedOptions.length > 0) {
      setSelectedOptions((prevSelectedOptions) => {
        if (
          asyncSelectedOptions.map(({ value }) => value).join(';') !==
          prevSelectedOptions.map(({ value }) => value).join(';')
        ) {
          return asyncSelectedOptions;
        }
        return prevSelectedOptions;
      });
    }
  }, [asyncSelectedOptions]);

  useEffect(() => {
    if (value) {
      setSelectedOptions((prevSelectedOptions) => {
        const selectedValue = [...(Array.isArray(value) ? value : [value])];
        if (
          getSelectedOptionsRef.current &&
          (prevSelectedOptions.length <= 0 ||
            selectedValue.join(';') !==
              prevSelectedOptions.map(({ value }) => value).join(';'))
        ) {
          loadAsyncSelectedOptions(value);
        }
        return prevSelectedOptions;
      });
    }
  }, [loadAsyncSelectedOptions, value]);

  const endAdornment = (
    <>
      {showClearButton &&
      selectedOptions.length > 0 &&
      !disabled &&
      !focused ? (
        <Tooltip title="Clear">
          <IconButton
            className="data-dropdown-input-clear-button"
            onClick={(event) => {
              event.stopPropagation();
              setSearchTerm('');
              const options: DropdownOption[] = [];
              setSelectedOptions(options);
              triggerChangeEvent(options);
            }}
            sx={{ p: 0.4 }}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
      ) : null}
      <ExpandMoreIcon />
    </>
  );

  return (
    <>
      {(() => {
        if (isTextVariant) {
          return (
            <FieldValueDisplay
              ref={mergeRefs([ref, anchorRef])}
              {...{ label }}
              FieldValueProps={{
                variant: 'inherit',
                noWrap: true,
                ContainerGridProps: {
                  sx: {
                    mt: 0,
                  },
                },
                sx: {
                  cursor: 'pointer',
                },
              }}
              value={
                <Stack
                  sx={{
                    alignItems: 'center',
                    gap: 1,
                  }}
                  direction="row"
                >
                  {selectedOptions[0]?.label || rest.placeholder}
                  {endAdornment}
                </Stack>
              }
              onClick={() => {
                setOpen(true);
              }}
              enableLoadingState={rest.enableLoadingState}
            />
          );
        }
        return (
          <TextField
            ref={ref}
            onClick={(event) => {
              event.preventDefault();
              setOpen(true);
            }}
            onFocus={(event) => {
              event.preventDefault();
              if (!isSmallScreenSize) {
                setOpen(true);
              }
              setFocused(true);
              onFocus && onFocus(event);
            }}
            onBlur={() => {
              setFocused(false);
              if (onBlur) {
                const event: any = new Event('blur', { bubbles: true });
                Object.defineProperty(event, 'target', {
                  writable: false,
                  value: {
                    name,
                    id,
                    value: selectedOptionValue,
                  },
                });
                onBlur(event);
              }
            }}
            onChange={(event) => {
              if (searchable) {
                setSearchTerm(event.target.value);
                onChangeSearchTerm && onChangeSearchTerm(event.target.value);
              }
            }}
            InputProps={{
              endAdornment,
              ...InputProps,
              ...(() => {
                const props: Partial<typeof InputProps> = {};
                if (selectedOptions.length > 0) {
                  props.placeholder = '';
                }
                return props;
              })(),
              ref: anchorRef,
              readOnly: !searchable || isSmallScreenSize,
            }}
            value={(() => {
              if (
                !isSmallScreenSize &&
                searchable &&
                (focused || (open && selectedOptionDisplayString.length <= 0))
              ) {
                return searchTerm;
              }
              return selectedOptionDisplayString;
            })()}
            className={clsx(classes.root)}
            {...{ variant, label, disabled }}
            {...rest}
            endChildren={(() => {
              if (searchable && !focused && selectedOptions.length > 0) {
                return (
                  <Box
                    className="data-dropdown-field-selected-option-wrapper"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      pointerEvents: 'none',
                      display: 'flex',
                      whiteSpace: 'nowrap',
                      gap: 0.5,
                      overflow: 'hidden',
                      ...(() => {
                        if (variant === 'standard') {
                          return {
                            pb: '5px',
                            bottom: 2,
                          };
                        }
                        if (variant === 'filled') {
                          return {
                            pb: '4px',
                            pl: '12px',
                            bottom: -1,
                          };
                        }
                        return {
                          height: '100%',
                          pl: '14px',
                          alignItems: 'center',
                        };
                      })(),
                    }}
                  >
                    {multiple ? (
                      selectedOptions.map(({ label, value }) => {
                        return (
                          <Box
                            key={value}
                            {...SelectedOptionPillPropsRest}
                            sx={{
                              fontSize: 14,
                              bgcolor: alpha(palette.primary.main, 0.1),
                              borderRadius: '20px',
                              height: 25,
                              py: 0.25,
                              pl: (() => {
                                if (
                                  ['string', 'number'].includes(typeof label)
                                ) {
                                  return 1;
                                }
                                return 0.25;
                              })(),
                              pr: 1,
                              mr: 0.5,
                              ...SelectedOptionPillPropsSx,
                            }}
                          >
                            {label}
                          </Box>
                        );
                      })
                    ) : (
                      <Typography
                        component="div"
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        {selectedOptions[0]?.label}
                      </Typography>
                    )}
                  </Box>
                );
              }
            })()}
            WrapperProps={{
              ...WrapperPropsRest,
              sx: {
                width: '100%',
                ...WrapperPropsSx,
                [`& .${inputBaseClasses.input}`]: (() => {
                  if (
                    searchable &&
                    !focused &&
                    selectedOptionDisplayString.length > 0
                  ) {
                    return { color: 'transparent' };
                  }
                  return {};
                })(),
                '&>.data-dropdown-field-selected-option-wrapper': {
                  width: 'calc(100% - 40px)',
                },
                ...(() => {
                  if (showClearButton) {
                    return {
                      '&:hover>.data-dropdown-field-selected-option-wrapper': {
                        width: 'calc(100% - 72px)',
                      },
                    };
                  }
                })(),
              },
            }}
            showClearButton={!focused}
            sx={{
              '& .data-dropdown-input-clear-button': {
                visibility: 'hidden',
              },
              '&:hover .data-dropdown-input-clear-button': {
                visibility: 'visible',
              },
              ...sx,
            }}
          />
        );
      })()}
      {(() => {
        const optionsElement = (
          <PaginatedDropdownOptionList
            paging={optionPaging}
            {...PaginatedDropdownOptionListPropsRest}
            {...(() => {
              if (isTextVariant) {
                return {
                  searchable: true,
                };
              }
            })()}
            {...{
              maxHeight: dropdownListMaxHeight,
              ...(() => {
                if (isSmallScreenSize) {
                  return {
                    optionHeight: 50,
                    searchable: true,
                    maxHeight:
                      dropdownListMaxHeight ?? window.innerHeight - 240,
                    sx: {
                      border: 'none',
                    },
                  };
                }
              })(),
              optionVariant,
              multiple,
              onSelectOption,
              searchTerm,
              options,
              selectedOptions,
              dataKey,
              getDropdownOptions,
              callGetDropdownOptions,
              externallyPaginated,
              limit,
              sortOptions,
            }}
            onChangeSearchTerm={(searchTerm) => {
              setSearchTerm(searchTerm);
            }}
            minWidth={
              anchorRef.current ? anchorRef.current.offsetWidth : undefined
            }
            onLoadOptions={(options) => {
              setOptions(options);
            }}
            onClose={() => {
              setOpen(false);
            }}
            onChangeSelectedOptions={(options) => {
              setSelectedOptions(options);
              triggerChangeEvent(options);
            }}
            asyncOptionPagesMap={asyncOptionPagesMapRef.current}
            onChangeAsyncOptionPagesMap={(asyncOptionPagesMap) => {
              asyncOptionPagesMapRef.current = asyncOptionPagesMap;
            }}
          />
        );
        if (isSmallScreenSize) {
          return (
            <ModalPopup
              {...{ open }}
              onClose={() => {
                setOpen(false);
              }}
              CardProps={{
                sx: {
                  maxHeight: 'none',
                },
              }}
              CardBodyProps={{
                sx: {
                  p: 0,
                },
              }}
              disableEscapeKeyDown={false}
              disableAutoFocus={false}
              showHeaderToolbar={false}
              enableCloseOnBackdropClick
            >
              {optionsElement}
            </ModalPopup>
          );
        }
        return (
          <Popper
            {...{ open }}
            anchorEl={anchorRef.current}
            transition
            placement="bottom-start"
            tabIndex={-1}
            sx={{
              zIndex: 1400,
            }}
          >
            {({ TransitionProps }) => {
              return (
                <Grow {...TransitionProps} style={{ transformOrigin: '0 0 0' }}>
                  <Box tabIndex={-1}>
                    <ClickAwayListener
                      onClickAway={(event) => {
                        if (anchorRef.current) {
                          setOpen(
                            isDescendant(anchorRef.current, event.target as any)
                          );
                        }
                      }}
                    >
                      {optionsElement}
                    </ClickAwayListener>
                  </Box>
                </Grow>
              );
            }}
          </Popper>
        );
      })()}
    </>
  );
});

export default DataDropdownField;

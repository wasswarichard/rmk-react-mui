import { Box, Card, MenuItem, Typography, useTheme } from '@mui/material';
import {
  Dispatch,
  Fragment,
  ReactNode,
  SetStateAction,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';

import ReloadIconButton from './ReloadIconButton';

export interface IDropdownOption {
  value: string | number;
  label: ReactNode;
  fieldValueLabel?: string;
  searchableLabel?: string;
  selectable?: boolean;
  isDropdownOption?: boolean;
  isDropdownOptionWrapped?: boolean;
}

export interface IPaginatedDropdownOptionListProps {
  options: IDropdownOption[];
  selectedOptions?: IDropdownOption[];
  setSelectedOptions?: Dispatch<SetStateAction<IDropdownOption[]>>;
  minWidth?: number;
  maxHeight?: number;
  optionHeight?: number;
  paging?: boolean;
  multiple?: boolean;
  loading?: boolean;
  onClose?: () => void;
  loadOptions?: () => void;
}

const DEFAULT_DROPDOWN_MENU_MAX_HEIGHT = 200;
const DEFAULT_DROPDOWN_OPTION_HEIGHT = 36;

export const PaginatedDropdownOptionList = forwardRef<
  HTMLDivElement,
  IPaginatedDropdownOptionListProps
>(function PaginatedDropdownOptionList(
  {
    selectedOptions: selectedOptionsProp,
    setSelectedOptions: setSelectedOptionsProp,
    minWidth = DEFAULT_DROPDOWN_MENU_MAX_HEIGHT,
    maxHeight = DEFAULT_DROPDOWN_MENU_MAX_HEIGHT,
    optionHeight = DEFAULT_DROPDOWN_OPTION_HEIGHT,
    paging = true,
    options,
    multiple,
    onClose,
    loading,
    loadOptions,
  },
  ref
) {
  const [scrollableDropdownWrapper, setScrollableDropdownWrapper] =
    useState<HTMLDivElement | null>(null);
  const [limit, setLimit] = useState(0);
  const [offset, setOffset] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<IDropdownOption[]>(
    selectedOptionsProp || []
  );
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number | null>(
    null
  );

  const { palette } = useTheme();

  const selectOption = useCallback(
    (option: IDropdownOption) => {
      const { value } = option;
      if (multiple) {
        setSelectedOptions((prevOptions) => {
          const selectedOption = prevOptions.find(
            ({ value: selectedOptionValue }) => {
              return selectedOptionValue === value;
            }
          );
          if (selectedOption) {
            prevOptions.splice(prevOptions.indexOf(selectedOption), 1);
          } else {
            prevOptions.push(option);
          }
          return [...prevOptions];
        });
      } else {
        setSelectedOptions([option]);
        onClose && onClose();
      }
    },
    [multiple, onClose]
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
                (!!focusedOptionIndex ? focusedOptionIndex : options.length) - 1
              );
            }
            return options.length - 1;
          case 'ArrowDown':
            if (focusedOptionIndex != null) {
              return (focusedOptionIndex + 1) % options.length;
            }
            return 0;
          case 'Enter':
            if (focusedOptionIndex) {
              selectOption(options[focusedOptionIndex]);
            }
            break;
          case 'Escape':
            onClose && onClose();
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
    focusedOptionIndex,
    limit,
    maxHeight,
    offset,
    onClose,
    optionHeight,
    options,
    options.length,
    scrollableDropdownWrapper,
    selectOption,
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
  }, [maxHeight, optionHeight, paging, scrollableDropdownWrapper]);

  useEffect(() => {
    setLimit(Math.ceil(maxHeight / optionHeight));
  }, [maxHeight, optionHeight]);

  const displayOptions = paging
    ? options.slice(offset, offset + limit)
    : options;

  return (
    <Card ref={ref} tabIndex={-1}>
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
            minHeight: paging ? options.length * optionHeight : undefined,
          }}
          onClick={() => {
            if (!multiple && onClose) {
              onClose();
            }
          }}
          tabIndex={-1}
        >
          <Box sx={{ height: offset * optionHeight }} />
          {displayOptions.length > 0 ? (
            displayOptions.map((option) => {
              const {
                value,
                label,
                selectable = true,
                isDropdownOption = true,
                isDropdownOptionWrapped = true,
              } = option;
              if (isDropdownOption && isDropdownOptionWrapped) {
                const classNames = [];
                const isFocused =
                  options.indexOf(option) === focusedOptionIndex;
                if (isFocused) {
                  classNames.push('Mui-focusVisible');
                }
                return (
                  <MenuItem
                    className={classNames.join(' ')}
                    value={value}
                    key={value}
                    onClick={
                      selectable
                        ? () => {
                            selectOption(option);
                          }
                        : undefined
                    }
                    selected={selectedOptions
                      .map(({ value }) => value)
                      .includes(value)}
                    sx={{
                      minHeight: optionHeight,
                      fontSize: 14,
                      lineHeight: `24px`,
                      p: 0,
                    }}
                    tabIndex={isFocused ? 0 : -1}
                  >
                    <Box
                      sx={{
                        py: 0.75,
                        px: 2,
                        width: `100%`,
                      }}
                    >
                      {label}
                    </Box>
                  </MenuItem>
                );
              }
              return <Fragment key={value}>{label}</Fragment>;
            })
          ) : (
            <MenuItem disabled>
              <Typography variant="body2" color={palette.error.main}>
                No options found
              </Typography>
            </MenuItem>
          )}
        </Box>
      </Box>
      {loadOptions && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            py: 1,
          }}
        >
          <ReloadIconButton load={loadOptions} {...{ loading }} />
        </Box>
      )}
    </Card>
  );
});

export default PaginatedDropdownOptionList;
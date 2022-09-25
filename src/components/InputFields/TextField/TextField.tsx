import CloseIcon from '@mui/icons-material/Close';
import { Box, BoxProps } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { ReactNode, forwardRef, useCallback, useEffect, useState } from 'react';

import { useLoadingContext } from '../../../contexts/LoadingContext';
import ErrorSkeleton from '../../ErrorSkeleton';
import FieldValueDisplay from '../../FieldValueDisplay';

export interface ITextFieldProps
  extends Omit<TextFieldProps, 'variant'>,
    Pick<TextFieldProps, 'variant'> {
  labelWrapped?: boolean;
  value?: string;
  endAdornment?: ReactNode;
  endChildren?: ReactNode;
  WrapperProps?: Partial<BoxProps>;
  showClearButton?: boolean;
}

export const TextField = forwardRef<HTMLDivElement, ITextFieldProps>(
  function TextField(
    {
      label,
      placeholder,
      variant,
      size,
      multiline,
      rows,
      fullWidth,
      name,
      id,
      onChange,
      disabled,
      value,
      required,
      labelWrapped = false,
      endAdornment: endAdornmentProp,
      endChildren,
      WrapperProps = {},
      showClearButton = true,
      sx,
      ...rest
    },
    ref
  ) {
    const { sx: wrapperPropsSx, ...wrapperPropsRest } = WrapperProps;

    const { InputProps = {} } = rest;
    const { endAdornment, ...restInputProps } = InputProps;

    const { loading, errorMessage } = useLoadingContext();
    const [inputValue, setInputValue] = useState('');

    const triggerChangeEvent = useCallback(
      (inputValue: string) => {
        const event: any = new Event('change', { bubbles: true });
        Object.defineProperty(event, 'target', {
          writable: false,
          value: {
            name,
            id,
            value: inputValue,
          },
        });
        onChange && onChange(event);
      },
      [id, name, onChange]
    );

    useEffect(() => {
      setInputValue(value ?? '');
    }, [value]);

    const labelSkeletonWidth = typeof label === 'string' ? label.length * 7 : 0;

    const textField = (() => {
      if (errorMessage) {
        return (
          <MuiTextField
            {...{ size, variant, multiline, rows, fullWidth }}
            label={<ErrorSkeleton width={labelSkeletonWidth} />}
            value=""
            disabled
          />
        );
      }

      if (loading) {
        return (
          <MuiTextField
            {...{ size, variant, multiline, rows, fullWidth }}
            label={<Skeleton width={labelSkeletonWidth} />}
            value=""
            disabled
            InputProps={{
              endAdornment: <CircularProgress size={18} color="inherit" />,
            }}
          />
        );
      }

      return (
        <Box
          {...wrapperPropsRest}
          sx={{
            position: 'relative',
            ...wrapperPropsSx,
          }}
        >
          <MuiTextField
            ref={ref}
            {...{
              size,
              variant,
              multiline,
              rows,
              fullWidth,
              id,
              name,
              disabled,
              required,
            }}
            {...rest}
            label={(() => {
              if (!labelWrapped) {
                return label;
              }
            })()}
            placeholder={(() => {
              if (labelWrapped && !placeholder && typeof label === 'string') {
                return label;
              }
              return placeholder;
            })()}
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
              triggerChangeEvent(event.target.value);
            }}
            InputProps={{
              endAdornment:
                endAdornment ??
                (() => {
                  if (inputValue.length > 0 || endAdornmentProp) {
                    return (
                      <>
                        {showClearButton &&
                        inputValue.length > 0 &&
                        !disabled ? (
                          <Tooltip title="Clear">
                            <IconButton
                              className="text-input-clear-button"
                              onClick={(event) => {
                                event.stopPropagation();
                                setInputValue('');
                                triggerChangeEvent('');
                              }}
                              sx={{ p: 0.4 }}
                            >
                              <CloseIcon />
                            </IconButton>
                          </Tooltip>
                        ) : null}
                        {endAdornmentProp ? endAdornmentProp : null}
                      </>
                    );
                  }
                })(),
              ...restInputProps,
            }}
            sx={{
              '& .text-input-clear-button': {
                visibility: 'hidden',
              },
              '&:hover .text-input-clear-button': {
                visibility: 'visible',
              },
              ...sx,
            }}
          />
          {endChildren}
        </Box>
      );
    })();

    if (labelWrapped && label) {
      return <FieldValueDisplay {...{ label, required }} value={textField} />;
    }

    return textField;
  }
);

export default TextField;

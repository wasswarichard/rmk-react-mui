import { forwardRef } from 'react';

import { useAggregatedFormikContext } from '../../hooks/Formik';
import TextField, { TextFieldProps } from '../InputFields/TextField';

export interface FormikTextFieldProps extends TextFieldProps {}

export const FormikTextField = forwardRef<HTMLDivElement, FormikTextFieldProps>(
  function FormikTextField(
    {
      name,
      value: valueProp,
      onBlur: onBlurProp,
      onChange: onChangeProp,
      error: errorProp,
      helperText: helperTextProp,
      ...rest
    },
    ref
  ) {
    const { value, onChange, onBlur, error, helperText } =
      useAggregatedFormikContext({
        value: valueProp,
        name,
        error: errorProp,
        helperText: helperTextProp,
        onBlur: onBlurProp,
        onChange: onChangeProp,
      });

    return (
      <TextField
        ref={ref}
        {...rest}
        {...{ name, value, onChange, onBlur, error, helperText }}
      />
    );
  }
);

export default FormikTextField;

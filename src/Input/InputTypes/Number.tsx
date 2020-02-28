import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../../hooks';
import { Error, HelperText } from '../../messages';

interface INumber extends IInputType {}

export const Number: React.FC<INumber> = ({
  id,
  type = 'number',
  className,
  placeholder,
  required = false,
  validate,
  showError,
  autoComplete,
  helperText,
  style,
}) => {
  const { value, error, handleChange, handleBlur, handleFocus } = useFormData({
    id,
    value: 0,
    validate,
    required,
  });
  return (
    <>
      <input
        id={id}
        name={id}
        value={value || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        type={type}
        placeholder={placeholder}
        style={style}
        className={`flow-form-input ${className}-input`}
        required={required}
        autoComplete={autoComplete}
      />
      {!error && <HelperText id={id} helperText={helperText} className={className} />}
      {showError && error && <Error id={id} message={showError} />}
    </>
  );
};

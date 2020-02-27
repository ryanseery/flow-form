import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../../hooks';
import { Error, HelperText } from '../../messages';

interface IPassword extends IInputType {}

export const Password: React.FC<IPassword> = ({
  id,
  type = 'password',
  className,
  placeholder,
  required = false,
  validate,
  showError,
  autoComplete,
  helperText,
}) => {
  const { value, error, handleChange, handleBlur, handleFocus } = useFormData({
    id,
    value: '',
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
        style={{ display: `block` }}
        className={`flow-form-input ${className}-input`}
        required={required}
        autoComplete={autoComplete}
      />
      {!error && <HelperText id={id} helperText={helperText} className={className} />}
      {showError && error && <Error id={id} message={showError} />}
    </>
  );
};

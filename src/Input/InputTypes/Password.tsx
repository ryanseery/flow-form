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
  errMsg,
  autoComplete,
  helperText,
  style,
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
        style={style}
        className={`flow-form-input ${className}-input`}
        required={required}
        autoComplete={autoComplete}
      />
      {!error && <HelperText id={id} helperText={helperText} className={className} />}
      {error && <Error id={id} className={className} errMsg={errMsg} />}
    </>
  );
};

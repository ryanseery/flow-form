import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../../hooks';
import { Error } from '../../messages';

interface INumber extends IInputType {}

export const Number: React.FC<INumber> = ({
  id,
  type = 'number',
  className,
  placeholder,
  required = false,
  validate,
  errMsg,
  autoComplete,
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
        style={{ display: `block` }}
        className={`flow-form-input ${className}-input`}
        required={required}
        autoComplete={autoComplete}
      />
      {error && <Error id={id} errMsg={errMsg ?? `${id} error.`} />}
    </>
  );
};

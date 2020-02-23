import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../hooks';
import { Error } from '../messages';

interface IText extends IInputType {}

export const Text: React.FC<IText> = ({ id, type, className, placeholder, required, validate, errMsg }) => {
  const { value, error, handleChange, handleFocus } = useFormData({
    id,
    value: '',
    error: required ?? false,
    validate,
  });
  console.log('test test: ', validate && validate(value));
  return (
    <>
      <input
        id={id}
        name={id}
        value={value || ''}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleFocus}
        type={type}
        placeholder={placeholder}
        style={{ display: `block` }}
        className={`flow-form-input ${className}-input`}
        required={required}
      />
      {error && <Error id={id} errMsg={errMsg ?? `${id} error.`} />}
    </>
  );
};

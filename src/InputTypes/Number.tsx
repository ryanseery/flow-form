import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../hooks';
import { Error } from '../messages';

interface INumber extends IInputType {}

export const Number: React.FC<INumber> = ({ id, type, className, placeholder, required, validate, errMsg }) => {
  const { value, error, handleChange, handleBlur } = useFormData({
    id,
    value: 0,
    validate,
  });
  return (
    <>
      <input
        id={id}
        name={id}
        value={value || ''}
        onChange={handleChange}
        onBlur={e => {
          if (validate) {
            validate(e);
          }
          handleBlur(e);
        }}
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

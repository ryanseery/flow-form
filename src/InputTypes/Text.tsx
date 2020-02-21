import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../hooks';

interface IText extends IInputType {}

export const Text: React.FC<IText> = ({ id, type, className, placeholder }) => {
  const { value, handleChange, handleFocus } = useFormData({
    id,
    value: '',
    error: false,
  });
  return (
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
    />
  );
};

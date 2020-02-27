import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../../hooks';
import { Error } from '../../messages';

interface ITel extends IInputType {
  pattern?: string;
}

export const Tel: React.FC<ITel> = ({
  id,
  type = 'tel',
  className,
  placeholder,
  required = false,
  validate,
  errMsg,
  autoComplete,
  pattern = '[0-9]{3}-[0-9]{2}-[0-9]{3}',
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
        pattern={pattern}
      />
      {error && <Error id={id} errMsg={errMsg ?? `${id} error.`} />}
    </>
  );
};

import * as React from 'react';
import { useFormData2 } from '../../useFormData2';
import { IInput } from '../Input2';

interface INumber extends IInput {
  id: string;
}

export const Number: React.FC<INumber> = ({
  step,
  id,
  type,
  required = false,
  validate,
  placeholder,
  autoComplete,
  style,
}) => {
  const { value, onChange, onBlur } = useFormData2({ step, id, value: '', required, validate });

  return (
    <>
      <input
        id={id}
        name={id}
        type={type}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        className={`flow-form-input ${id}-input`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={style}
      />
    </>
  );
};

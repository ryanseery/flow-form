import * as React from 'react';
import { useFormData2 } from '../../useFormData2';
import { IInput } from '../Input';
import { Error } from '../../Error';

interface IText extends IInput {
  id: string;
  label?: string;
}

export const Text: React.FC<IText> = ({
  step,
  id,
  type,
  required = false,
  validate,
  placeholder,
  autoComplete,
  style,
  className,
  label,
  errMsg,
}) => {
  const { value, onChange, onBlur, onFocus, showError } = useFormData2({ step, id, value: '', required, validate });

  return (
    <>
      <input
        id={`${id}-input-text`}
        data-input-id={`${id}-input-text`}
        name={id}
        type={type}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-input flow-form-text ${className}-input`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={style}
      />
      {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

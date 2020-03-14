import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../../useFormData';
import { Error, HelperText } from '../../messages';

interface ITel extends IInputType {
  pattern?: string;
}

export const Tel: React.FC<ITel> = ({
  label,
  step,
  id,
  type = 'tel',
  className,
  placeholder,
  required = false,
  validate,
  errMsg,
  autoComplete,
  pattern = '[0-9]{3}-[0-9]{2}-[0-9]{3}',
  helperText,
  style,
}) => {
  const { value, showError, handleChange, handleBlur, handleFocus } = useFormData({
    step,
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
        pattern={pattern}
      />
      {!showError && <HelperText id={id} helperText={helperText} className={className} />}
      {showError && <Error id={id} label={label} className={className} errMsg={errMsg} />}
    </>
  );
};

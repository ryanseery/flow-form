import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../../hooks';
import { Error, HelperText } from '../../messages';

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
        pattern={pattern}
      />
      {!error && <HelperText id={id} helperText={helperText} className={className} />}
      {error && <Error id={id} className={className} errMsg={errMsg} />}
    </>
  );
};
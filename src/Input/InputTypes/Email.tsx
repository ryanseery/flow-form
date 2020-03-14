import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../../hooks';
import { Error, HelperText } from '../../messages';

interface IEmail extends IInputType {}

export const Email: React.FC<IEmail> = ({
  step,
  id,
  type = 'email',
  className,
  placeholder,
  required = false,
  validate,
  errMsg,
  autoComplete,
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
      />
      {!showError && <HelperText id={id} helperText={helperText} className={className} />}
      {showError && <Error id={id} className={className} errMsg={errMsg} />}
    </>
  );
};

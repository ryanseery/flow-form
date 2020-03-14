import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../../hooks';
import { Error, HelperText } from '../../messages';

interface IUrl extends IInputType {
  pattern?: string;
}

export const Url: React.FC<IUrl> = ({
  step,
  id,
  type = 'url',
  className,
  placeholder,
  required = false,
  validate,
  errMsg,
  autoComplete,
  pattern = 'https://.*',
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
      {showError && <Error id={id} className={className} errMsg={errMsg} />}
    </>
  );
};

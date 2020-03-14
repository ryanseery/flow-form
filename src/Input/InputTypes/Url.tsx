import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../../useFormData';
import { Error, HelperText } from '../../messages';

interface IUrl extends IInputType {
  pattern?: string;
}

export const Url: React.FC<IUrl> = ({
  label,
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
  const { value, showError, handleChange, handleBlur } = useFormData({
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

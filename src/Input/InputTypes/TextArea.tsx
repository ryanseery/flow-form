import * as React from 'react';
import { IInputType } from './@types';
import { useFormData } from '../../hooks';
import { Error, HelperText } from '../../messages';

interface ITextArea extends IInputType {
  rows?: number;
  cols?: number;
}

export const TextArea: React.FC<ITextArea> = ({
  id,
  className,
  placeholder,
  required = false,
  validate,
  errMsg,
  autoComplete,
  rows = 4,
  cols = 20,
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
      <textarea
        id={id}
        name={id}
        value={value || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        style={style}
        className={`flow-form-input ${className}-input`}
        required={required}
        autoComplete={autoComplete}
        rows={rows}
        cols={cols}
      />
      {!error && <HelperText id={id} helperText={helperText} className={className} />}
      {error && <Error id={id} className={className} errMsg={errMsg} />}
    </>
  );
};
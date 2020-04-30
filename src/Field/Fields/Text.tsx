import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps } from './@types';
import { DisplayError } from '../../DisplayError';
import { border } from '../../utils';

interface IText extends IProps {}

export const Text: React.FC<IText> = ({
  step,
  id,
  type = 'text',
  required = false,
  validation,
  placeholder,
  autoComplete,
  style,
  className,
  label,
  errMsg,
}) => {
  const { value, onChange, onBlur, onFocus, showError, focused } = useFormData({
    step,
    id,
    value: '',
    required,
    validation,
  });

  return (
    <>
      <input
        id={`${id}-field-text`}
        data-input-id={`${id}-field-text`}
        name={id}
        type={type}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-text ${className}-field`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={{ ...style, border: `${border(focused, showError)}` }}
      />
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Text.defaultProps = {
  ffComp: FFComponent.TEXT,
};

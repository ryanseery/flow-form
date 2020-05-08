import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps } from './@types';
import { DisplayError } from '../../DisplayError';
import { InputWrapper } from './@styles';

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
      <InputWrapper
        id={`${id}-field-text`}
        data-input-id={`${id}-field-text`}
        name={id}
        type={type}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-text ${className}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        focused={focused}
        showError={showError}
        style={style}
      />
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Text.defaultProps = {
  ffComp: FFComponent.TEXT,
};

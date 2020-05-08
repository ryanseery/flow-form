import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps } from './@types';
import { DisplayError } from '../../DisplayError';
import { InputWrapper } from './@styles';

interface IPassword extends IProps {}

export const Password: React.FC<IPassword> = ({
  step,
  id,
  type = 'password',
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
        id={`${id}-field-password`}
        data-input-id={`${id}-field-password`}
        name={id}
        type={type}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-password ${className}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={style}
        focused={focused}
        showError={showError}
      />
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Password.defaultProps = {
  ffComp: FFComponent.PASSWORD,
};

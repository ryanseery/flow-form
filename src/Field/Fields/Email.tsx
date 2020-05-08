import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps } from './@types';
import { DisplayError } from '../../DisplayError';
import { InputWrapper } from './@styles';

interface IEmail extends IProps {}

export const Email: React.FC<IEmail> = ({
  step,
  id,
  type = 'email',
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
        id={`${id}-field-email`}
        data-input-id={`${id}-field-email`}
        name={id}
        type={type}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-email ${className}`}
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

Email.defaultProps = {
  ffComp: FFComponent.EMAIL,
};

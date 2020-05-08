import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps } from './@types';
import { DisplayError } from '../../DisplayError';
import { InputWrapper } from './@styles';

interface ITel extends IProps {
  pattern?: string;
}

export const Tel: React.FC<ITel> = ({
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
  pattern = '[0-9]{3}-[0-9]{2}-[0-9]{3}',
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
        id={`${id}-field-tel`}
        data-input-id={`${id}-field-tel`}
        name={id}
        type={type}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-tel ${className}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={style}
        pattern={pattern}
        focused={focused}
        showError={showError}
      />
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Tel.defaultProps = {
  ffComp: FFComponent.TEL,
};

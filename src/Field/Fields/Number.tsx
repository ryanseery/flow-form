import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps } from './@types';
import { DisplayError } from '../../DisplayError';

interface INumber extends IProps {}

export const Number: React.FC<INumber> = ({
  step,
  id,
  type,
  required = false,
  validation,
  placeholder,
  autoComplete,
  style,
  className,
  label,
  errMsg,
}) => {
  const { value, onChange, onBlur, onFocus, showError } = useFormData({ step, id, value: '', required, validation });

  return (
    <>
      <input
        id={`${id}-field-number`}
        data-input-id={`${id}-field-number`}
        name={id}
        type={type}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-number ${className}-field`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={style}
      />
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Number.defaultProps = {
  ffComp: FFComponent.NUMBER,
};

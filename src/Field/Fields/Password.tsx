import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps } from './@types';
import { Error } from '../../Error';

interface IPassword extends IProps {}

export const Password: React.FC<IPassword> = ({
  step,
  id,
  type = 'password',
  required = false,
  validate,
  placeholder,
  autoComplete,
  style,
  className,
  label,
  errMsg,
}) => {
  const { value, onChange, onBlur, onFocus, showError } = useFormData({ step, id, value: '', required, validate });

  return (
    <>
      <input
        id={`${id}-field-password`}
        data-input-id={`${id}-field-password`}
        name={id}
        type={type}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-password ${className}-field`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={style}
      />
      {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Password.defaultProps = {
  ffComp: FFComponent.PASSWORD,
};

import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IField } from '../Field';
import { Error } from '../../Error';

interface IEmail extends IField {
  id: string;
  label?: string;
}

export const Email: React.FC<IEmail> = ({
  step,
  id,
  type = 'email',
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
        id={`${id}-field-email`}
        data-input-id={`${id}-field-email`}
        name={id}
        type={type}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-email ${className}-field`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={style}
      />
      {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Email.defaultProps = {
  ffComp: FFComponent.EMAIL,
};

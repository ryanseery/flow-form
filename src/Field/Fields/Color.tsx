import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps } from './@types';
import { DisplayError } from '../../DisplayError';
import { border } from '../../utils';

interface IColor extends IProps {}

export const Color: React.FC<IColor> = ({
  step,
  id,
  type = 'color',
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
        id={`${id}-field-color`}
        data-input-id={`${id}-field-color`}
        name={id}
        type={type}
        value={value || '#519839'}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-color ${className}-field`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={{ ...style, border: `${border(focused, showError)}`, cursor: 'pointer' }}
      />
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Color.defaultProps = {
  ffComp: FFComponent.COLOR,
};

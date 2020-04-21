import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IField } from '../Field';
import { Error } from '../../Error';

interface IColor extends IField {
  id: string;
  label?: string;
}

export const Color: React.FC<IColor> = ({
  step,
  id,
  type = 'color',
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
        style={style}
      />
      {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Color.defaultProps = {
  ffComp: FFComponent.COLOR,
};

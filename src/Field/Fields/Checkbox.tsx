import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps } from './@types';
import { DisplayError } from '../../DisplayError';
import { ButtonInputWrapper, ButtonInputLabel } from './@styles';

interface ICheckbox extends IProps {}

export const Checkbox: React.FC<ICheckbox> = ({
  step,
  id,
  required = false,
  validation,
  placeholder,
  autoComplete,
  style,
  className,
  label,
  errMsg,
  options = [],
  type,
}) => {
  const { value, onChange, focused, showError } = useFormData({
    step,
    id,
    value: '',
    required,
    validation,
  });

  return (
    <ButtonInputWrapper style={style}>
      {(options as string[]).map((option: string, index: number) => (
        <ButtonInputLabel
          key={index}
          htmlFor={option}
          className={`flow-form-legend ${id}-legend ${className}`}
          index={index}
          optionsLength={options.length - 1}
          type={type}
          focused={focused}
          showError={showError}
        >
          <input
            id={option}
            data-input-id={`${option}-field-checkbox`}
            name={id}
            type={type}
            value={option}
            required={required}
            onChange={onChange}
            className={`flow-form-field flow-form-${type}-${id} ${className}`}
            placeholder={placeholder}
            autoComplete={autoComplete}
            checked={value === option}
          />
          {option}
        </ButtonInputLabel>
      ))}
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </ButtonInputWrapper>
  );
};

Checkbox.defaultProps = {
  ffComp: FFComponent.CHECKBOX,
};

import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps } from './@types';
import { DisplayError } from '../../DisplayError';
import { theme } from '../../theme';

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
  const { value, onChange, showError } = useFormData({
    step,
    id,
    value: '',
    required,
    validation,
  });

  console.log(`${id}:`, value);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
      {(options as string[]).map((option: string, index: number) => (
        <label
          key={index}
          htmlFor={option}
          className={`flow-form-legend ${className}-legend`}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontSize: `${theme.fonts.small}`,
            textTransform: 'capitalize',
            marginRight: `${index === options.length - 1 ? '0' : '0.9375em'}`,
          }}
        >
          <input
            id={option}
            data-input-id={`${option}-field-checkbox`}
            name={id}
            type={type}
            value={option}
            required={required}
            onChange={onChange}
            className={`flow-form-field flow-form-text ${className}-field`}
            placeholder={placeholder}
            autoComplete={autoComplete}
            style={{
              ...style,
              width: '1rem',
              fontSize: `${type === 'radio' ? theme.inputs.radio : theme.inputs.checkbox}`,
            }}
            checked={value === option}
          />
          {option}
        </label>
      ))}
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </div>
  );
};

Checkbox.defaultProps = {
  ffComp: FFComponent.CHECKBOX,
};

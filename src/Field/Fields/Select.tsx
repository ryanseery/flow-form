import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps, Option } from './@types';
import { DisplayError } from '../../DisplayError';
import { border } from '../../utils';

interface ISelect extends IProps {}

export const Select: React.FC<ISelect> = ({
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
  options,
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
      <select
        id={`${id}-field-text`}
        data-input-id={`${id}-field-text`}
        name={id}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-text ${className}-field`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={{ ...style, border: `${border(focused, showError)}` }}
      >
        <option disabled defaultValue=""></option>
        {options &&
          options.map((option: Option) => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Select.defaultProps = {
  ffComp: FFComponent.SELECT,
};

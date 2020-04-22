import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps, Option } from './@types';
import { Error } from '../../Error';

interface ISelect extends IProps {}

export const Select: React.FC<ISelect> = ({
  step,
  id,
  required = false,
  validate,
  placeholder,
  autoComplete,
  style,
  className,
  label,
  errMsg,
  options,
}) => {
  const { value, onChange, onBlur, onFocus, showError } = useFormData({ step, id, value: '', required, validate });

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
        style={style}
      >
        {options &&
          options.map((option: Option) => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Select.defaultProps = {
  ffComp: FFComponent.SELECT,
};

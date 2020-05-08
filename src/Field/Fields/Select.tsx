import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps, Option } from './@types';
import { DisplayError } from '../../DisplayError';
import { SelectWrapper } from './@styles';

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
      <SelectWrapper
        id={`${id}-field-text`}
        data-input-id={`${id}-field-text`}
        name={id}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-text ${className}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={style}
        focused={focused}
        showError={showError}
      >
        <option disabled defaultValue=""></option>
        {options &&
          (options as Option[]).map((option: Option) => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
      </SelectWrapper>
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Select.defaultProps = {
  ffComp: FFComponent.SELECT,
};

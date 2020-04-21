import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IField } from '../Field';
import { Error } from '../../Error';

interface IUrl extends IField {
  id: string;
  label?: string;
  pattern?: string;
}

export const Url: React.FC<IUrl> = ({
  step,
  id,
  type = 'text',
  required = false,
  validate,
  placeholder,
  autoComplete,
  style,
  className,
  label,
  errMsg,
  pattern = 'https://.*',
}) => {
  const { value, onChange, onBlur, onFocus, showError } = useFormData({ step, id, value: '', required, validate });

  return (
    <>
      <input
        id={`${id}-filed-url`}
        data-input-id={`${id}-field-url`}
        name={id}
        type={type}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-url ${className}-field`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={style}
        pattern={pattern}
      />
      {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

Url.defaultProps = {
  ffComp: FFComponent.URL,
};

import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IField } from '../Field';
import { Error } from '../../Error';

interface ITextArea extends IField {
  id: string;
  label?: string;
  rows?: number;
  cols?: number;
}

export const TextArea: React.FC<ITextArea> = ({
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
  rows = 4,
  cols = 20,
}) => {
  const { value, onChange, onBlur, onFocus, showError } = useFormData({ step, id, value: '', required, validate });

  return (
    <>
      <textarea
        id={`${id}-field-textarea`}
        data-input-id={`${id}-field-textarea`}
        name={id}
        value={value || ''}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`flow-form-field flow-form-textarea ${className}-field`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={style}
        rows={rows}
        cols={cols}
      />
      {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

TextArea.defaultProps = {
  ffComp: FFComponent.TEXTAREA,
};

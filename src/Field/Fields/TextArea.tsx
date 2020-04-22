import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps } from './@types';
import { Error } from '../../Error';

interface ITextArea extends IProps {
  rows?: number;
  cols?: number;
}

export const TextArea: React.FC<ITextArea> = ({
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
  rows = 4,
  cols = 20,
}) => {
  const { value, onChange, onBlur, onFocus, showError } = useFormData({ step, id, value: '', required, validation });

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

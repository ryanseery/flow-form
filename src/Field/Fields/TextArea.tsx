import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps } from './@types';
import { DisplayError } from '../../DisplayError';
import { TextareaWrapper } from './@styles';

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
  const { value, onChange, onBlur, onFocus, showError, focused } = useFormData({
    step,
    id,
    value: '',
    required,
    validation,
  });

  return (
    <>
      <TextareaWrapper
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
        focused={focused}
        showError={showError}
      />
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

TextArea.defaultProps = {
  ffComp: FFComponent.TEXTAREA,
};

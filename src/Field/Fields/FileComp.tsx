import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { IProps } from './@types';
import { useFormData } from '../../useFormData';
import { DisplayError } from '../../DisplayError';

interface IFileComp extends IProps {}

export const FileComp: React.FC<IFileComp> = ({
  step,
  id,
  type = 'file',
  required = false,
  validation,
  placeholder,
  autoComplete,
  style,
  className,
  label,
  errMsg,
}) => {
  const { value, onChange, onBlur, onFocus, showError } = useFormData({ step, id, value: '', required, validation });

  const fileRef = React.useRef<HTMLInputElement>(null);

  const overrideEventDefaults = (e: Event | React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={`flow-form-file-upload`}
        onDrag={onDrag}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <input
          ref={fileRef}
          hidden
          multiple
          id={`${id}-field-file`}
          data-input-id={`${id}-field-file`}
          name={id}
          type={type}
          value={value || ''}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={`flow-form-field flow-form-file ${className}-field`}
          placeholder={placeholder}
          autoComplete={autoComplete}
          style={style}
        />
      </div>
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

FileComp.defaultProps = {
  ffComp: FFComponent.FILE_COMP,
};

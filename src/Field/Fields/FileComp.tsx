import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { IProps } from './@types';
import { useFormData } from '../../useFormData';
import { DisplayError } from '../../DisplayError';

interface IFileComp extends IProps {}

export const FileComp: React.FC<IFileComp> = ({
  step,
  id,
  // type = 'file',
  required = false,
  validation,
  placeholder,
  autoComplete,
  // style,
  className,
  label,
  errMsg,
}) => {
  const { value, onChange, onBlur, onFocus, showError } = useFormData({ step, id, value: '', required, validation });

  const fileRef = React.useRef<HTMLInputElement>(null);

  const handleDefaults = (e: Event | React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    handleDefaults(e);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    handleDefaults(e);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handleDefaults(e);

    console.log('HERE: ', e.dataTransfer);
  };

  const handleFileBtn = () => {
    if (fileRef.current == null) return;
    fileRef.current.click();
  };

  return (
    <>
      <div
        className={`flow-form-file-upload`}
        style={{
          border: '1px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '5rem',
          width: '100%',
        }}
        onDrag={handleDefaults}
        onDragStart={handleDefaults}
        onDragEnd={handleDefaults}
        onDragOver={handleDefaults}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <button type="button" id={`${id}-btn`} className={`${id}-btn`} onClick={handleFileBtn}>
          {placeholder ? placeholder : `Drag and Drop or Click to upload`}
        </button>
        <input
          ref={fileRef}
          multiple
          id={`${id}-field-file`}
          data-input-id={`${id}-field-file`}
          name={id}
          type="file"
          value={value || ''}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={`flow-form-field flow-form-file ${className}-field`}
          autoComplete={autoComplete}
          style={{ display: 'none' }}
        />
      </div>
      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

FileComp.defaultProps = {
  ffComp: FFComponent.FILE_COMP,
};

import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { IProps } from './@types';
import { useFormData } from '../../useFormData';
import { DisplayError } from '../../DisplayError';
import { colors } from '../../colors';

const handleDefaults = (e: Event | React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  e.stopPropagation();
};

interface IDragAndDrop extends IProps {}

export const DragAndDrop: React.FC<IDragAndDrop> = ({
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
  const { value, onFileChange, onFileDrop, onFileRemove, onBlur, onFocus, showError } = useFormData({
    step,
    id,
    value: '',
    required,
    validation,
  });

  const fileRef = React.useRef<HTMLInputElement>(null);

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    handleDefaults(e);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    handleDefaults(e);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handleDefaults(e);
    onFileDrop(e, id);
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
          border: `1px solid ${colors.grey}`,
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
          // value={value || ''}
          required={required}
          onChange={onFileChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={`flow-form-field flow-form-drag-and-drop ${className}-field`}
          autoComplete={autoComplete}
          style={{ display: 'none' }}
        />
      </div>
      {value.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {value.map((file: File, index: number) => (
            <li
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '0.3rem',
              }}
            >
              <span>{file.name}</span>{' '}
              <button
                type="button"
                onClick={() => onFileRemove(index)}
                style={{
                  backgroundColor: `${colors.red}`,
                  color: `${colors.white}`,
                  border: 'none',
                  cursor: 'pointer',
                  width: '20px',
                  height: '20px',
                  textAlign: 'center',
                }}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}

      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

DragAndDrop.defaultProps = {
  ffComp: FFComponent.DRAG_AND_DROP,
};

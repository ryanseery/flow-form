import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { IProps } from './@types';
import { useFormData } from '../../useFormData';
import { DisplayError } from '../../DisplayError';
import { theme } from '../../theme';
import { ListButton } from '../../buttons';
import { border } from '../../utils';

const handleDefaults = (e: Event | React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  e.stopPropagation();
};

interface IDragAndDrop extends IProps {}

export const DragAndDrop: React.FC<IDragAndDrop> = ({
  step,
  id,
  required = false,
  validation,
  placeholder,
  autoComplete,
  className,
  label,
  errMsg,
}) => {
  const { value, onFileChange, onFileDrop, onFileRemove, onBlur, onFocus, showError, focused } = useFormData({
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
          border: `${border(focused, showError)}`,
          borderRadius: `${theme.border.radius}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '5rem',
          width: '100%',
          cursor: 'pointer',
        }}
        onDrag={handleDefaults}
        onDragStart={handleDefaults}
        onDragEnd={handleDefaults}
        onDragOver={handleDefaults}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={handleFileBtn}
      >
        <span className="flow-form-file-call-to-action" style={{ fontSize: `${theme.fonts.small}` }}>
          {placeholder ? placeholder : `Drag and Drop or Click to upload`}
        </span>

        <input
          ref={fileRef}
          multiple
          id={`${id}-field-file`}
          data-input-id={`${id}-field-file`}
          name={id}
          type="file"
          required={required}
          onChange={onFileChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={`flow-form-field flow-form-drag-and-drop ${className}-field`}
          autoComplete={autoComplete}
          style={{ display: 'none' }}
        />
      </div>

      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}

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
                fontSize: `${theme.fonts.small}`,
              }}
            >
              <span>{file.name}</span>
              <ListButton onClick={() => onFileRemove(index)} remove>
                &times;
              </ListButton>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

DragAndDrop.defaultProps = {
  ffComp: FFComponent.DRAG_AND_DROP,
};

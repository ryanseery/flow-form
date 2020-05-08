import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { IProps } from './@types';
import { useFormData } from '../../useFormData';
import { DisplayError } from '../../DisplayError';
import { ListButton } from '../../buttons';
import { handleDefaults } from '../../utils';
import { DragAndDropWrapper, ListWrapper } from './@styles';

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
  style,
}) => {
  const { value, onFileChange, onFileDrop, onFileRemove, onBlur, onFocus, showError, focused } = useFormData({
    step,
    id,
    value: '',
    required,
    validation,
  });

  React.useEffect(() => {
    window.addEventListener('dragover', (event: Event) => {
      handleDefaults(event);
    });
    window.addEventListener('drop', (event: Event) => {
      handleDefaults(event);
    });

    return () => {
      window.removeEventListener('dragover', handleDefaults);
      window.removeEventListener('drop', handleDefaults);
    };
  }, []);

  const fileRef = React.useRef<HTMLInputElement>(null);

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
      <DragAndDropWrapper
        className={`flow-form-file-upload ${className}`}
        style={style}
        focused={focused}
        showError={showError}
        onDrag={handleDefaults}
        onDragStart={handleDefaults}
        onDragEnd={handleDefaults}
        onDragOver={handleDefaults}
        onDragEnter={handleDefaults}
        onDragLeave={handleDefaults}
        onDrop={onDrop}
        onClick={handleFileBtn}
      >
        <span className="flow-form-file-call-to-action">
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
          className="flow-form-field flow-form-drag-and-drop"
          autoComplete={autoComplete}
        />
      </DragAndDropWrapper>

      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}

      {value.length > 0 && (
        <ListWrapper>
          {value.map((file: File, index: number) => (
            <li key={index}>
              <span>{file.name}</span>
              <ListButton onClick={() => onFileRemove(index)} remove>
                &times;
              </ListButton>
            </li>
          ))}
        </ListWrapper>
      )}
    </>
  );
};

DragAndDrop.defaultProps = {
  ffComp: FFComponent.DRAG_AND_DROP,
};

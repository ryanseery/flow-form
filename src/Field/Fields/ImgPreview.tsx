import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { IProps } from './@types';
import { useFormData } from '../../useFormData';
import { DisplayError } from '../../DisplayError';
import { theme } from '../../theme';
import { border, handleDefaults } from '../../utils';

interface IImgPreview extends IProps {}

export const ImgPreview: React.FC<IImgPreview> = ({
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
  const { value, onImgChange, onImgDrop, onBlur, onFocus, showError, focused } = useFormData({
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
    onImgDrop(e);
  };

  const handleFileBtn = () => {
    if (fileRef.current == null) return;
    fileRef.current.click();
  };

  return (
    <>
      <div
        className={`flow-form-img-preview`}
        style={{
          border: `${border(focused, showError)}`,
          borderRadius: `${theme.border.radius}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '12rem',
          width: '45%',
          cursor: 'pointer',
          marginBottom: '0.9375em',
        }}
        onDrag={handleDefaults}
        onDragStart={handleDefaults}
        onDragEnd={handleDefaults}
        onDragOver={handleDefaults}
        onDragEnter={handleDefaults}
        onDragLeave={handleDefaults}
        onDrop={onDrop}
        onClick={handleFileBtn}
      >
        {typeof value === 'string' ? (
          <span
            className="flow-form-file-call-to-action"
            style={{ fontSize: `${theme.fonts.small}`, textAlign: 'center' }}
          >
            {placeholder ? placeholder : `Drag and Drop or Click to upload`}
          </span>
        ) : (
          <img
            className={`flow-form-img`}
            src={URL.createObjectURL(value)}
            alt={value.name}
            style={{ height: '100%', width: '100%' }}
          />
        )}

        <input
          ref={fileRef}
          multiple
          id={`${id}-field-file`}
          data-input-id={`${id}-field-file`}
          name={id}
          type="file"
          required={required}
          onChange={onImgChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={`flow-form-field flow-form-drag-and-drop ${className}-field`}
          autoComplete={autoComplete}
          style={{ display: 'none' }}
        />
      </div>

      {showError && <DisplayError id={id} className={className} label={label} errMsg={errMsg} />}
    </>
  );
};

ImgPreview.defaultProps = {
  ffComp: FFComponent.IMG_PREVIEW,
};

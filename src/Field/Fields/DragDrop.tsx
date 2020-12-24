import * as React from 'react';
import { IField } from '../Field';
import { IDelete } from '../../@types';

function handleDefaults(e: React.DragEvent<HTMLDivElement>): void {
  e.preventDefault();
  e.stopPropagation();
}
//TODO fix 'string | number | readonly string[]' on array map
interface IDragDrop extends IField {
  id: string;
  onFileDrop: (e: React.DragEvent<HTMLDivElement>, id?: string, required?: boolean) => void;
  onRemove: (args: IDelete) => void;
}
export const DragDrop = React.forwardRef<HTMLInputElement, IDragDrop>((props, ref) => {
  const { id, required, className, value, style, placeholder, onFileDrop, onRemove, ...rest } = props;
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [focus, setFocus] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof ref === 'function') {
      ref(inputRef.current);
    }
  }, []);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    handleDefaults(e);
    setFocus(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    handleDefaults(e);
    setFocus(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handleDefaults(e);
    onFileDrop(e, id, required);
    setFocus(false);
  };

  const handleClick = () => {
    inputRef?.current?.click();
  };

  const styles = `drag-drop-container ${focus ? 'focus' : ''} ${className ?? ''}`;

  return (
    <>
      <div
        style={style}
        className={styles}
        onDrag={handleDefaults}
        onDragStart={handleDefaults}
        onDragEnd={handleDefaults}
        onDragOver={onDragOver}
        onDragEnter={handleDefaults}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={handleClick}
      >
        <span className="drag-drop-cta">{placeholder}</span>
        <input {...rest} id={id} required={required} ref={inputRef} type="file" className="drag-drop-input" />
      </div>
      <ul className="drag-drop-list">
        {value &&
          (value as []).map((item: File, i: number) => (
            <li key={i} className="drag-drop-item">
              <span>{item.name}</span>
              <button type="button" className="drag-drop-btn" onClick={() => onRemove({ id, name: item.name })}>
                x
              </button>
            </li>
          ))}
      </ul>
    </>
  );
});

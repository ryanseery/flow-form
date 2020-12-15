import * as React from 'react';
import { IField } from '../Field';

function handleDefaults(e: React.DragEvent<HTMLDivElement>): void {
  e.preventDefault();
  e.stopPropagation();
}

//TODO handle on click
//TODO text for click, prop
interface IDragDrop extends IField {
  onFileDrop: (e: React.DragEvent<HTMLDivElement>, id?: string, required?: boolean) => void;
}
export const DragDrop = React.forwardRef<HTMLInputElement, IDragDrop>((props, ref) => {
  const [focus, setFocus] = React.useState<boolean>(false);

  const { id, required, className, value, style, onFileDrop, ...rest } = props;

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
      >
        <input {...rest} multiple id={id} required={required} ref={ref} type="file" className="drag-drop-input" />
      </div>
      <ul className="drag-drop-list">
        {value && (value as []).map((item: File, i: number) => <li key={i}>{item.name}</li>)}
      </ul>
    </>
  );
});

import * as React from 'react';
import { IField } from '../Field';

function handleDefaults(e: Event | React.DragEvent<HTMLDivElement>): void {
  e.preventDefault();
  e.stopPropagation();
}

// TODO to figure out file click!
export const DragDrop = React.forwardRef<HTMLInputElement, IField>((props, ref) => {
  const fileRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    window.addEventListener('dragover', (e: Event) => {
      handleDefaults(e);
    });
    window.addEventListener('drop', (e: Event) => {
      handleDefaults(e);
    });

    return () => {
      window.removeEventListener('dragover', handleDefaults);
      window.removeEventListener('drop', handleDefaults);
    };
  }, []);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handleDefaults(e);
    // props.onChange(e);
  };

  const handleFileBtn = () => {
    if (fileRef.current == null) return;
    fileRef.current.click();
  };

  return (
    <div
      onDrag={handleDefaults}
      onDragStart={handleDefaults}
      onDragEnd={handleDefaults}
      onDragOver={handleDefaults}
      onDragEnter={handleDefaults}
      onDragLeave={handleDefaults}
      onDrop={onDrop}
      onClick={handleFileBtn}
    >
      <input {...props} ref={ref} />
    </div>
  );
});

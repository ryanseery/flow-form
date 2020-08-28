import * as React from 'react';
import { IField } from '../Field';

export const DragAndDrop = React.forwardRef<HTMLInputElement, IField>((props, ref) => (
  <input {...props} ref={ref} />
));

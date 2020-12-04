import * as React from 'react';
import { IField } from '../Field';

export const TextArea = React.forwardRef<HTMLTextAreaElement, IField>((props, ref) => (
  <textarea {...props} ref={ref} />
));

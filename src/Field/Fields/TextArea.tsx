import * as React from 'react';
import { IField } from '../Field';

export const TextArea = React.forwardRef<HTMLTextAreaElement, IField>((props, ref) => (
  <textarea data-flow-id="textarea" {...props} ref={ref} />
));

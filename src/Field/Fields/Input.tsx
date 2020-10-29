import * as React from 'react';
import { IField } from '../Field';

export const Input = React.forwardRef<HTMLInputElement, IField>((props, ref) => (
  <input data-flow-id="input" {...props} ref={ref} />
));

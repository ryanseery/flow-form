import * as React from 'react';
import { IField } from '../Field';

export const Select = React.forwardRef<HTMLSelectElement, IField>((props, ref) => (
  <select {...props} ref={ref}>
    {props.children}
  </select>
));

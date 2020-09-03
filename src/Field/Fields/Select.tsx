import * as React from 'react';
import { IField } from '../Field';

// TODO optgroup functionality
export const Select = React.forwardRef<HTMLSelectElement, IField>((props, ref) => (
  <select {...props} ref={ref}>
    {props.children}
  </select>
));

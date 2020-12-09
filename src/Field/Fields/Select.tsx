import * as React from 'react';
import { IField } from '../Field';

// TODO optgroup functionality
export const Select = React.forwardRef<HTMLSelectElement, IField>(({ children, ...rest }, ref) => (
  <select {...rest} ref={ref}>
    {children}
  </select>
));

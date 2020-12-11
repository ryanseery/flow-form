import * as React from 'react';
import { IField } from '../Field';

export const CheckboxRadio = React.forwardRef<HTMLInputElement, IField>((props, ref) => (
  <input {...props} ref={ref} checked={props.value === props.name} />
));

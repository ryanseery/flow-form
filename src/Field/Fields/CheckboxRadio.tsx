import * as React from 'react';
import { IField } from '../Field';

//TODO not working
export const CheckboxRadio = React.forwardRef<HTMLInputElement, IField>((props, ref) => (
  <input ref={ref} value={props.name} checked={props.value === props.name} {...props} />
));

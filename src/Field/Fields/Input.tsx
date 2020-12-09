import * as React from 'react';
import { IField } from '../Field';

//TODO error on delete of numbers
export const Input = React.forwardRef<HTMLInputElement, IField>((props, ref) => <input ref={ref} {...props} />);

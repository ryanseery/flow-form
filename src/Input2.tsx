import * as React from 'react';
import { FFComponent } from './FFComponent';

export interface IInput {
  ffComp: string;
  step: string | null;
  index: number;
}

export const Input2: React.FC<IInput> = ({ step, index }) => {
  console.log('INPUT: ', { step, index });
  return (
    <label htmlFor="name" style={{ display: `block`, minHeight: '4rem' }}>
      <input type="text" />
    </label>
  );
};

Input2.defaultProps = {
  ffComp: FFComponent.INPUT,
  step: null,
  index: 0,
};

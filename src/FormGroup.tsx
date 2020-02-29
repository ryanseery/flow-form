import * as React from 'react';

interface IFormGroup {}

export const FormGroup: React.FC<IFormGroup> = ({ children }) => {
  return <div>{children}</div>;
};

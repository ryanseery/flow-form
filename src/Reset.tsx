import * as React from 'react';
import { FormContext } from './FormWrapper';

interface IReset {
  className: string;
  title?: string;
}

export const Reset: React.FC<IReset> = ({ className, title }) => {
  const { clearForm } = React.useContext(FormContext);
  return (
    <button type="submit" className={`flow-form-reset ${className}`} onClick={clearForm}>
      {title ? title : `Reset`}
    </button>
  );
};

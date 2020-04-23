import * as React from 'react';
import { FFComponent } from '../FFComponent';

interface ISubmit {
  ffComp: string;
  className?: string;
  label?: string;
}

export const Submit: React.FC<ISubmit> = ({ className, label }) => {
  return (
    <button type="submit" className={`flow-form-submit-btn ${className ?? ''}`}>
      {label ?? `Submit`}
    </button>
  );
};

Submit.defaultProps = {
  ffComp: FFComponent.SUBMIT,
};

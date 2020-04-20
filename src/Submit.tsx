import * as React from 'react';
import { FFComponent } from './FFComponent';

interface ISubmit {
  ffComp: string;
  className?: string;
  title?: string;
}

export const Submit: React.FC<ISubmit> = ({ className, title }) => {
  return (
    <button type="submit" className={`flow-form-submit-btn ${className ?? ''}`}>
      {title ?? `Submit`}
    </button>
  );
};

Submit.defaultProps = {
  ffComp: FFComponent.SUBMIT,
};

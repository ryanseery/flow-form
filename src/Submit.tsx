import * as React from 'react';
import { FFComponent } from './@types/ffFormComponents';

interface ISubmit {
  flowComp: string;
  className?: string;
  title?: string;
}

export const Submit: React.FC<ISubmit> = ({ className, title }) => {
  return (
    <button type="submit" className={`flow-form-submit ${className ?? ''}`}>
      {title ?? `Submit`}
    </button>
  );
};

Submit.defaultProps = {
  flowComp: FFComponent.STEP,
};

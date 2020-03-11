import * as React from 'react';

interface ISubmit {
  className: string;
  title?: string;
}

export const Submit: React.FC<ISubmit> = ({ className, title }) => {
  return (
    <button type="submit" className={`flow-form-submit ${className}`}>
      {title ? title : `Submit`}
    </button>
  );
};

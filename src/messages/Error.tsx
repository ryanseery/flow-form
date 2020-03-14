import * as React from 'react';

interface IError {
  label?: string;
  id?: string;
  className?: string;
  errMsg?: string;
}

export const Error: React.FC<IError> = ({ label, id, className, errMsg }) => (
  <small id={`${id}-error`} className={`flow-form-error ${className}-error`} style={{ color: 'red' }}>
    {typeof errMsg === 'string' ? errMsg : `Please provide a valid ${label} `}
  </small>
);

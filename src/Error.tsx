import * as React from 'react';

interface IError {
  id: string;
  className?: string;
  label?: string;
  errMsg?: string;
}

export const Error: React.FC<IError> = ({ id, className, label, errMsg }) => (
  <small
    id={`${id}-error`}
    data-error-id={`${id}-error`}
    className={`flow-form-error ${className}-error`}
    style={{ color: `red` }}
  >
    {typeof errMsg === 'string' ? errMsg : `Please provide a valid value for ${label}`}
  </small>
);

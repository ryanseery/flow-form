import * as React from 'react';

interface IError {
  id: string;
  errMsg: string;
}

export const Error: React.FC<IError> = ({ id, errMsg }) => (
  <span style={{ fontSize: '0.8em', color: 'red' }} className={`${id}-error`}>
    {errMsg}
  </span>
);

import * as React from 'react';

interface IError {
  id: string;
  errMsg: string;
}

export const Error: React.FC<IError> = ({ id, errMsg }) => <span className={`${id}-error`}>{errMsg}</span>;

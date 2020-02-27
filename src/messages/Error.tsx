import * as React from 'react';
import { toCamelCase } from '../utils';
import { useFormError } from '../hooks';

interface IError {
  id: string;
  message: string | boolean;
}

export const Error: React.FC<IError> = ({ id, message }) => {
  const name = toCamelCase(id);

  const errMsg = () => (typeof message === 'string' ? message : `${id} error.`);

  const { error } = useFormError({ id: name });

  if (error) {
    return (
      <span id={`${name}-error`} style={{ fontSize: '0.8em', color: 'red' }} className={`${name}-error`}>
        {errMsg()}
      </span>
    );
  }

  return null;
};

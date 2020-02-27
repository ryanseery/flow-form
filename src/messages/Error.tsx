import * as React from 'react';
import { toCamelCase, toKebabCase } from '../utils';
import { useFormError } from '../hooks';

interface IError {
  id: string;
  message: string | boolean;
}

export const Error: React.FC<IError> = ({ id, message }) => {
  const { error } = useFormError({ id: toCamelCase(id) });

  if (error) {
    return (
      <small id={`${toCamelCase(id)}-error`} style={{ color: 'red' }} className={`${toKebabCase(name)}-error`}>
        {typeof message === 'string' ? message : `${id} error.`}
      </small>
    );
  }

  return null;
};

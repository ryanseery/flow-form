import * as React from 'react';
import { toCamelCase, toKebabCase } from '../utils';
import { useFormError } from '../hooks';

interface IError {
  id: string;
  message: string | boolean;
  style?: {};
}

export const Error: React.FC<IError> = ({ id, message, style }) => {
  const { error } = useFormError({ id: toCamelCase(id) });

  if (error) {
    return (
      <small
        id={`${toCamelCase(id)}-error`}
        className={`${toKebabCase(name)}-error`}
        style={{ color: 'red', ...style }}
      >
        {typeof message === 'string' ? message : `${id} error.`}
      </small>
    );
  }

  return null;
};

import * as React from 'react';
import { FormContext } from '../FormWrapper';

interface IShowFormDataReturn {
  data: {};
  error: {};
}

export function showFormData(): IShowFormDataReturn {
  const { data, error } = React.useContext(FormContext);

  return {
    data,
    error,
  };
}

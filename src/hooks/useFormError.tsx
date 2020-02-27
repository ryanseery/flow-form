import * as React from 'react';
import { FormContext } from '../FormWrapper/FormWrapper';

export interface IUseFormError {
  id: string;
}

export interface IUseFormErrorReturn {
  error: boolean;
}

export function useFormError({ id }: IUseFormError): IUseFormErrorReturn {
  const { error } = React.useContext(FormContext);

  return { error: error[id] };
}

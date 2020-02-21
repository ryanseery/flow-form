import * as React from 'react';
import { FormContext } from '../FormWrapper';

export interface IUseFormData {
  id: string;
  value: string | boolean | number | object;
  error: boolean;
}

export function useFormData({ id, value, error }: IUseFormData) {
  const { data, setValue, updateValue, updateFocus } = React.useContext(FormContext);

  React.useEffect(() => {
    setValue({ id, value, error });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.persist();
    updateValue({ id: e.target.name, value: e.target.value.toLowerCase() });
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.persist();
    updateFocus({ id: e.target.name });
  };

  return {
    value: data[id],
    error: error[id],
    handleChange,
    handleFocus,
  };
}

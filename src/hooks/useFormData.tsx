import * as React from 'react';
import { FormContext } from '../FormWrapper/FormWrapper';

export interface IUseFormData {
  id: string;
  value: string | boolean | number | object;
  required?: boolean;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
}

export function useFormData({ id, value, validate }: IUseFormData) {
  const { data, error, setValue, updateValue, updateBlur } = React.useContext(FormContext);

  React.useEffect(() => {
    setValue({ id, value });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.persist();
    updateValue({
      id,
      value: e.target.value,
      error: validate ? validate(e) : false,
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.persist();
    updateBlur({ id, error: validate ? validate(e) : false });
  };

  return {
    value: data[id],
    error: error[id],
    handleChange,
    handleBlur,
  };
}

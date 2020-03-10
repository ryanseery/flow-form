import * as React from 'react';
import { FormContext } from '../FormWrapper';

export interface IUseFormData {
  id: string;
  value: string | boolean | number | object;
  required: boolean;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
}

export function useFormData({ id, value, required, validate }: IUseFormData) {
  const { data, error, setValue, updateValue, updateBlur } = React.useContext(FormContext);

  React.useEffect(() => {
    setValue({ id, value });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.persist();

    function validation(): boolean {
      if (required) {
        return validate ? validate(e) : false;
      }
      return false;
    }

    updateValue({
      id,
      value: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
      error: validation(),
    });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.persist();

    function validation(): boolean {
      if (required) {
        return validate ? validate(e) : false;
      }
      return false;
    }

    updateBlur({ id, error: validation() });
  };

  const handleFocus = () => {
    updateBlur({ id, error: false });
  };

  return {
    value: data[id],
    error: error[id],
    handleChange,
    handleBlur,
    handleFocus,
  };
}

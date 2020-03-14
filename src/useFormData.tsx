import * as React from 'react';
import { FlowFormContext } from '../FlowFormWrapper';
import { isObjectEmpty } from '../utils';

export interface IUseFormData {
  step: string | number;
  id: string;
  value: string | boolean | number | object;
  required: boolean;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
}

export function useFormData({ step, id, value, required, validate }: IUseFormData) {
  const { data, error, showError, setValue, updateValue, updateBlur } = React.useContext(FlowFormContext);

  React.useEffect(() => {
    setValue({ step, id, value, error: required ?? false });
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
      step,
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

    updateBlur({ step, id, showError: validation() });
  };

  const handleFocus = () => {
    updateBlur({ step, id, showError: false });
  };

  return {
    value: isObjectEmpty(data) ? data[id] : data[step][id],
    error: isObjectEmpty(error) ? error[id] : error[step][id],
    showError: isObjectEmpty(showError) ? showError[id] : showError[step][id],
    handleChange,
    handleBlur,
    handleFocus,
  };
}

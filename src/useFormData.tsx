import * as React from 'react';
import { FlowFormContext } from './FlowFormWrapper';
import { isObjectEmpty } from './utils';

export interface UseFormData {
  step: string | number;
  id: string;
  value: string | boolean | number | object;
  required: boolean;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
}

export function useFormData({ step, id, value, required, validate }: UseFormData) {
  const { data, error, showError, setValue, updateValue, updateBlur } = React.useContext(FlowFormContext);

  function validation(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): boolean {
    if (required) {
      return validate ? validate(e) : !e.target.value;
    }
    return false;
  }

  React.useEffect(() => {
    console.log('MOUNTED');
    setValue({ step, id, value, error: required ?? false });
  }, [step, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.preventDefault();

    updateValue({
      step,
      id,
      value: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
      error: validation(e),
    });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.preventDefault();

    updateBlur({ step, id, showError: validation(e) });
  };

  // const handleFocus = () => {
  //   // updateBlur({ step, id, showError: false });
  // };

  // TODO need to see if id and step are in data before trying to return it.
  // function isInState() {
  //   if (!(id in data) && !(id in data[step])) return '';
  //   if (id in data) return data[id];
  //   if (id in data[step]) return data[step][id];
  // }

  return {
    value: isObjectEmpty(data) ? data[id] : data[step][id],
    error: isObjectEmpty(error) ? error[id] : error[step][id],
    showError: isObjectEmpty(showError) ? showError[id] : showError[step][id],
    handleChange,
    handleBlur,
  };
}

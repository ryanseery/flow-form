import * as React from 'react';
import { Context } from './Context';
import { isObjectEmpty } from './utils';

interface IUseFormData {
  step: string | null;
  id: string;
  value: string;
  required: boolean;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
}

export function useFormData2({ step, id, value, required, validate }: IUseFormData) {
  const { setInput, data, updateInput, updateBlur } = React.useContext(Context);

  React.useEffect(() => {
    setInput({ step, id, value, error: false });
  }, [id]);

  function validation(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): boolean {
    if (required) {
      return validate ? validate(e) : !e.target.value;
    }
    return false;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.persist();

    updateInput({
      step,
      id: e.target.name,
      value: e.target.value,
      error: false,
    });
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.preventDefault();

    updateBlur({ step, id, showError: validation(e) });
  };

  return {
    value: isObjectEmpty(data) ? '' : step != null ? data[step][id] : data[id],
    onChange,
    onBlur,
  };
}

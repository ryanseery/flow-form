import * as React from 'react';
import { Context } from './Context';
import { isObjectEmpty } from './utils';

interface IUseFormData {
  step: string | null;
  id: string;
  value: string | boolean | number | object | [];
  required: boolean;
  validation?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
}

export function useFormData({ step, id, value, required, validation }: IUseFormData) {
  const { setField, formData, error, updateField, setBlur, setFocus, showError, flow } = React.useContext(Context);

  React.useEffect(() => {
    setField({ step, id, value, error: required || validation ? true : false });
  }, [step, id, flow.currentStep, flow.key]);

  function validate(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): boolean {
    if (required || validation) {
      return validation ? validation(e) : !e.target.value;
    }
    return false;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.persist();

    updateField({
      step,
      id: e.target.name,
      value: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
      error: validate(e),
    });
  };

  // TODO make custom dispatch
  // const onFileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  // }

  const onBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.preventDefault();

    setBlur({ step, id, showError: validate(e) });
  };

  const onFocus = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.preventDefault();

    setFocus({ step, id });
  };

  // TODO clean this mess up
  return {
    value: isObjectEmpty(formData) ? '' : step != null ? formData?.[step]?.[id] ?? '' : formData?.[id] ?? '',
    error: isObjectEmpty(error) ? false : step != null ? error?.[step]?.[id] ?? false : error?.[id] ?? false,
    showError: isObjectEmpty(showError)
      ? false
      : step != null
      ? showError?.[step]?.[id] ?? false
      : showError?.[id] ?? false,
    onChange,
    onBlur,
    onFocus,
  };
}

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

export function useFormData({ step, id, value, required, validate }: IUseFormData) {
  const { setField, formData, error, updateField, updateBlur, updateFocus, showError, flow } = React.useContext(
    Context,
  );

  React.useEffect(() => {
    setField({ step, id, value, error: required || validate ? true : false });
  }, [step, id, flow.currentStep, flow.key]);

  function validation(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): boolean {
    if (required || validate) {
      return validate ? validate(e) : !e.target.value;
    }
    return false;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.persist();

    updateField({
      step,
      id: e.target.name,
      value: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
      error: validation(e),
    });
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.preventDefault();

    updateBlur({ step, id, showError: validation(e) });
  };

  const onFocus = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.preventDefault();

    updateFocus({ step, id });
  };

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

import * as React from 'react';
import { Context } from './Context';
import { KeyValue } from './@types/keyValue';
import { KeyValBool } from './@types/keyValBool';

type RefType = HTMLInputElement | HTMLSelectElement;

type EventType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

function validate(
  e: EventType,
  validation: UseFormProps['validation'] | undefined,
  required: boolean,
): boolean {
  if (required) {
    return !e.target.value;
  }

  if (typeof validation === 'function') {
    return validation(e);
  }
  return false;
}

type UseFormProps = {
  validation?: (e: EventType) => boolean;
};
type UseFormReturn = {
  data: KeyValue;
  showError: KeyValBool;
  onRegister: (ref: RefType) => void;
  onChange: (e: EventType) => void;
  onFocus: (e: EventType) => void;
  onBlur: (e: EventType) => void;
};
export function useFormData({ validation }: UseFormProps): UseFormReturn {
  const {
    data,
    showError,
    registerField,
    updateField,
    handleFocus,
    handleBlur,
  } = React.useContext(Context);

  const onRegister = (ref: RefType) => {
    const { id, value, required } = ref;

    registerField({ id, value, error: required });
  };

  const onChange = (e: EventType) => {
    e.persist();

    const { id, value, type, required } = e.target;

    updateField({
      id,
      value: type === 'number' ? parseFloat(value) : value,
      error: validate(e, validation, required),
    });
  };

  const onFocus = (e: EventType) => {
    e.persist();

    const { id, value, required } = e.target;

    handleFocus({
      id,
      value,
      error: validate(e, validation, required),
    });
  };

  const onBlur = (e: EventType) => {
    e.persist();

    const { id, value, required } = e.target;

    handleBlur({
      id,
      value,
      error: validate(e, validation, required),
    });
  };

  return {
    data,
    showError,
    onRegister: React.useCallback(onRegister, []),
    onChange: React.useCallback(onChange, []),
    onFocus: React.useCallback(onFocus, []),
    onBlur: React.useCallback(onBlur, []),
  };
}

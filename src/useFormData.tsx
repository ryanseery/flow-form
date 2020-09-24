import * as React from 'react';
import { Context } from './Context';
import { KeyValue, KeyValBool } from './@types/keyTypes';
import { EventType } from './@types/eventType';
import { IField } from './Field/Field';

// TODO get these in a file to export together
type RefType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type UseFormArgs = {
  validation?: (e: EventType) => boolean;
};

function validate(
  e: EventType,
  validation: UseFormArgs['validation'] | undefined,
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

type UseFormReturn = {
  data: KeyValue;
  showError: KeyValBool;
  onRegister: (ref: RefType & IField) => void;
  onChange: (e: EventType) => void;
  onFocus: (e: EventType) => void;
  onBlur: (e: EventType) => void;
};
export function useFormData({ validation }: UseFormArgs): UseFormReturn {
  const { data, showError, registerField, updateField, handleFocus, handleBlur } = React.useContext(
    Context,
  );

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

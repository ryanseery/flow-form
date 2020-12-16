import * as React from 'react';
import { Context, Meta } from './Context';
import { KeyValue } from './@types/keys';
import { EventType } from './@types/event';
import { IField } from './Field/Field';

export type RefType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

interface UseFormArgs {
  validation?: (e: EventType) => boolean;
}

function validate(e: EventType, validation: UseFormArgs['validation'], required: boolean): boolean {
  if (required) {
    return !e.target.value;
  }

  if (typeof validation === 'function') {
    return validation(e);
  }
  return false;
}

interface UseFormReturn {
  data: KeyValue;
  meta: Meta;
  onRegister: (ref: RefType & IField) => void;
  onChange: (e: EventType) => void;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFileDrop: (e: React.DragEvent<HTMLDivElement>, id: string, required: boolean) => void;
  onFocus: (e: EventType) => void;
  onBlur: (e: EventType) => void;
}
export function useFormData({ validation }: UseFormArgs): UseFormReturn {
  const { data, meta, registerField, updateField, handleFocus, handleBlur } = React.useContext(Context);

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

  const onToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();

    const { id, name, checked, required } = e.target;

    updateField({
      id,
      value: checked ? name : '',
      error: validate(e, validation, required),
    });
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();

    const { id, files, required } = e.target;

    updateField({
      id,
      value: files ? Array.from(files) : '',
      error: validate(e, validation, required),
    });
  };

  // TODO handle error
  const onFileDrop = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.persist();

    updateField({
      id,
      value: Array.from(e.dataTransfer.files),
      error: false,
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
    meta,
    onRegister: React.useCallback(onRegister, []),
    onChange: React.useCallback(onChange, []),
    onToggle: React.useCallback(onToggle, []),
    onFile: React.useCallback(onFile, []),
    onFileDrop: React.useCallback(onFileDrop, []),
    onFocus: React.useCallback(onFocus, []),
    onBlur: React.useCallback(onBlur, []),
  };
}

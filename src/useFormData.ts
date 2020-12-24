import * as React from 'react';
import { Context, Meta } from './Context';
import { KeyValue, TEvent, IDelete, Ref } from './@types';
import { IField } from './Field/Field';

interface UseFormArgs {
  validation?: (e: TEvent) => boolean;
}

function validate(e: TEvent, validation: UseFormArgs['validation'], required: boolean): boolean {
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
  onRegister: (ref: Ref & IField) => void;
  onChange: (e: TEvent) => void;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFileDrop: (e: React.DragEvent<HTMLDivElement>, id: string, required: boolean) => void;
  onFocus: (e: TEvent) => void;
  onBlur: (e: TEvent) => void;
  onRemove: (args: IDelete) => void;
}
export function useFormData({ validation }: UseFormArgs): UseFormReturn {
  const { data, meta, registerField, updateField, handleFocus, handleBlur, handleRemove } = React.useContext(Context);

  const onRegister = (ref: Ref) => {
    const { id, value, required } = ref;

    registerField({ id, value, error: required });
  };

  const onChange = (e: TEvent) => {
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

  const onFileDrop = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.persist();

    updateField({
      id,
      value: Array.from(e.dataTransfer.files),
      error: false,
    });
  };

  const onFocus = (e: TEvent) => {
    e.persist();

    const { id, value, required } = e.target;

    handleFocus({
      id,
      value,
      error: validate(e, validation, required),
    });
  };

  const onBlur = (e: TEvent) => {
    e.persist();

    const { id, value, required } = e.target;

    handleBlur({
      id,
      value,
      error: validate(e, validation, required),
    });
  };

  const onRemove = (args: IDelete) => {
    const { id, name } = args;

    handleRemove({
      id,
      name,
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
    onRemove: React.useCallback(onRemove, []),
  };
}

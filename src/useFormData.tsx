import * as React from 'react';
import { Context } from './Context';
import { isObjectEmpty } from './utils';

const imageTypes = ['image/jpeg', 'image/png', 'image/gif'];

interface IUseFormData {
  step: string | null;
  id: string;
  value: string | boolean | number | object | [];
  required: boolean;
  validation?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | React.DragEvent<HTMLDivElement>,
  ) => boolean;
}

// TODO remove id from any function args
export function useFormData({ step, id, value, required, validation }: IUseFormData) {
  const {
    setField,
    formData,
    error,
    updateField,
    removeFile,
    updateFileField,
    setBlur,
    setFocus,
    showError,
    focus,
    flow,
  } = React.useContext(Context);

  React.useEffect(() => {
    setField({ step, id, value, error: required || validation ? true : false });
  }, [step, id, flow.currentStep, flow.key]);

  function validate(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): boolean {
    if (required || validation) {
      return validation ? validation(e) : !e.target.value;
    }
    return false;
  }

  function validateFile(e: React.DragEvent<HTMLDivElement>): boolean {
    if (required || validation) {
      return validation ? validation(e) : !e.dataTransfer.files;
    }
    return false;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.preventDefault();
    e.persist();

    updateField({
      step,
      id: e.target.name,
      value: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
      error: validate(e),
    });
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    const val = files ? Array.from(files) : [];

    updateFileField({
      step,
      id,
      value: val,
      error: validate(e),
    });
  };

  const onFileDrop = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    updateFileField({
      step,
      id,
      value: Array.from(e.dataTransfer.files),
      error: validateFile(e),
    });
  };

  const onFileRemove = (index: number) => {
    removeFile({
      step,
      id,
      index,
    });
  };

  const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Array.from(e.target.files ?? []);

    if (imageTypes.includes(val[0].type)) {
      updateField({
        step,
        id: e.target.name,
        value: val[0],
        error: validate(e),
      });
    }
  };

  const onImgDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const files = Array.from(e.dataTransfer.files);

    if (imageTypes.includes(files[0].type)) {
      updateField({
        step,
        id,
        value: files[0],
        error: validateFile(e),
      });
    }
  };

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
    focused: isObjectEmpty(focus) ? false : step != null ? focus?.[step]?.[id] ?? false : focus?.[id] ?? false,
    onChange,
    onFileChange,
    onFileDrop,
    onFileRemove,
    onBlur,
    onFocus,
    onImgDrop,
    onImgChange,
  };
}

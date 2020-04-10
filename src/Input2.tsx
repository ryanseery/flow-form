import * as React from 'react';
import { FFComponent } from './FFComponent';
import { toCamelCase, toKebabCase } from './utils';
import { useFormData2 } from './useFormData2';

export interface IInput {
  ffComp: string;
  step: string | null;
  index: number;
  name?: string;
  children?: string;
  className?: string;
  style?: {};
  required?: boolean;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
}

export const Input2: React.FC<IInput> = ({ step, name, children, style, required = false, validate }) => {
  const id = children ? toCamelCase(children) : toCamelCase(name ?? '');
  const styleTag = children ? toKebabCase(children) : toKebabCase(name ?? '');

  const { value, onChange, onBlur } = useFormData2({ step, id, value: '', required, validate });
  if (!name && !children) {
    throw new Error(`Please provide a label(<Input>Label</Input>) or name prop.`);
  }

  return (
    <label
      htmlFor={id}
      className={`flow-form-label ${styleTag}-label`}
      style={{ display: `block`, minHeight: '4rem', ...style }}
    >
      {children ?? name}
      <input type="text" id={id} name={id} value={value || ''} onChange={onChange} onBlur={onBlur} style={{ display: `block` }}  required={required} />
    </label>
  );
};

Input2.defaultProps = {
  ffComp: FFComponent.INPUT,
  step: null,
  index: 0,
};

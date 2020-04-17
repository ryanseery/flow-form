import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { toCamelCase, toKebabCase } from '../utils';
import { Text, Number } from './InputTypes';

export interface IInput {
  ffComp?: string;
  step: string | null;
  index: number;
  type?: string;
  name?: string;
  children?: string;
  className?: string;
  style?: {};
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
}

export const Input2: React.FC<IInput> = ({
  step,
  index,
  name,
  type,
  children,
  style,
  required = false,
  validate,
  autoComplete,
  placeholder,
}) => {
  if (!name && !children) {
    throw new Error(`Please provide a label(<Input>Label</Input>) or name prop(<Input name="label" />).`);
  }

  const id = children ? toCamelCase(children) : toCamelCase(name ?? '');
  const styleTag = children ? toKebabCase(children) : toKebabCase(name ?? '');

  const defaultProps = {
    id,
    step,
    index,
    type,
    required,
    validate,
    autoComplete,
    placeholder,
    style: { display: `block` },
  };

  return (
    <label
      data-label-id={id}
      htmlFor={id}
      className={`flow-form-label ${styleTag}-label`}
      style={{ display: `block`, minHeight: '4rem', ...style }}
    >
      {id}
      {(() => {
        switch (type) {
          case 'text':
            return <Text {...defaultProps} />;
          case 'number':
            return <Number {...defaultProps} />;
          default:
            return <Text {...defaultProps} />;
        }
      })()}
    </label>
  );
};

Input2.defaultProps = {
  ffComp: FFComponent.INPUT,
  step: null,
  index: 0,
};

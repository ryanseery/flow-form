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
  errMsg?: string;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
}

export const Input: React.FC<IInput> = ({
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
  errMsg,
}) => {
  if (!name && !children) {
    throw new Error(`Please provide a label(<Input>Label</Input>) or name prop(<Input name="label" />).`);
  }

  const id = children ? toCamelCase(children) : toCamelCase(name ?? '');
  const className = children ? toKebabCase(children) : toKebabCase(name ?? '');

  const defaultProps = {
    id,
    step,
    index,
    type,
    required,
    validate,
    autoComplete,
    placeholder,
    className,
    label: children ?? name,
    style: { display: `block` },
    errMsg,
  };

  return (
    <label
      id={`${id}-label`}
      data-label-id={`${id}-label`}
      htmlFor={id}
      className={`flow-form-label ${className}-label`}
      style={{ display: `block`, minHeight: '4rem', ...style }}
    >
      {children ?? name}
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

Input.defaultProps = {
  ffComp: FFComponent.INPUT,
  step: null,
  index: 0,
};

import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { toCamelCase, toKebabCase } from '../utils';
import { Text, Number, Email, Password, Tel, Url, Color, TextArea, Select, InputList } from './Fields';
import { Option, Input } from './Fields/@types';

export interface IField {
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
  options?: Option[];
  listName?: string;
  inputs?: Input[];
}

export const Field: React.FC<IField> = ({
  step,
  index,
  name,
  type,
  children,
  style,
  required = false,
  validate,
  autoComplete = 'off',
  placeholder,
  errMsg,
  options,
  listName,
  inputs,
}) => {
  if (!name && !children) {
    throw new Error(`Please provide a label(<Field>Label</Field>) or name prop(<Field name="label" />).`);
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
    options,
    listName,
    inputs,
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
          case 'email':
            return <Email {...defaultProps} />;
          case 'password':
            return <Password {...defaultProps} />;
          case 'tel':
            return <Tel {...defaultProps} />;
          case 'url':
            return <Url {...defaultProps} />;
          case 'color':
            return <Color {...defaultProps} />;
          case 'textarea':
            return <TextArea {...defaultProps} />;
          case 'select':
            return <Select {...defaultProps} />;
          case 'inputList':
            return <InputList {...defaultProps} />;
          default:
            return <Text {...defaultProps} />;
        }
      })()}
    </label>
  );
};

Field.defaultProps = {
  ffComp: FFComponent.FIELD,
  step: null,
  index: 0,
};

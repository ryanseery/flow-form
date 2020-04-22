import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { toCamelCase, toKebabCase } from '../utils';
import { Text, Number, Email, Password, Tel, Url, Color, TextArea, Select, List } from './Fields';
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
  validation?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
  options?: Option[];
  listName?: string;
  inputs?: Input[];
  add?: boolean;
}

export const Field: React.FC<IField> = ({
  step,
  index,
  name,
  type,
  children,
  style,
  required = false,
  validation,
  autoComplete = 'off',
  placeholder,
  errMsg,
  options,
  listName,
  inputs,
  add,
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
    validation,
    autoComplete,
    placeholder,
    className,
    label: children ?? name,
    style: { display: `block` },
    errMsg,
    options,
    listName,
    inputs,
    add,
  };

  return (
    <label
      id={`${id}-label`}
      data-field-id={`${id}-label`}
      htmlFor={id}
      className={`flow-form-field ${className}-label`}
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
          case 'list':
            return <List {...defaultProps} />;
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

import * as React from 'react';
import { toKebabCase, toCamelCase } from '../utils';
import { Text, Number, Email, Password, Tel, Url, TextArea, Color } from './InputTypes';

interface IInput {
  children?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
  errMsg?: string;
  autoComplete?: string;
  pattern?: string;
  rows?: number;
  cols?: number;
}

export const Input: React.FC<IInput> = ({
  children,
  type,
  placeholder,
  required,
  validate,
  errMsg,
  autoComplete,
  pattern,
  rows,
  cols,
}) => {
  const kebabCase = toKebabCase(children ?? '');

  const camelCase = toCamelCase(children ?? '');

  const defaultProps = {
    id: camelCase,
    type,
    className: kebabCase,
    placeholder,
    required,
    validate,
    errMsg,
    autoComplete: autoComplete ?? 'off',
    pattern,
    rows,
    cols,
  };

  return (
    <label
      htmlFor={camelCase}
      className={`flow-form-label ${kebabCase}-label`}
      style={{ display: `block`, minHeight: '3.5em' }}
    >
      {children}
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
          case 'textarea':
            return <TextArea {...defaultProps} />;
          case 'color':
            return <Color {...defaultProps} />;
          default:
            return <Text {...defaultProps} />;
        }
      })()}
    </label>
  );
};

import * as React from 'react';
import { toKebabCase, toCamelCase } from './utils';
import { Text, Number } from './InputTypes';

interface IInput {
  children?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
  errMsg?: string;
}

export const Input: React.FC<IInput> = ({ children, type = 'text', placeholder, required, validate, errMsg }) => {
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
  };

  return (
    <label htmlFor={camelCase} className={`flow-form-label ${kebabCase}-label`} style={{ display: `block` }}>
      {children}
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

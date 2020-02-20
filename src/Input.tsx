import * as React from 'react';
import { toKebabCase, toCamelCase } from './utils';
import { useFormData } from './hooks';

interface IInput {
  children?: string;
  type?: string;
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({ children, type = 'text', placeholder }) => {
  const { value, handleChange } = useFormData({ id: children ?? '', value: '', error: false });

  const kebabCase = toKebabCase(children ?? '');

  const camelCase = toCamelCase(children ?? '');

  // const defaultProps = {
  //   key: camelCase,
  //   name: camelCase,
  //   className: kebabCase,
  //   id: camelCase,
  //   type,
  //   required,
  //   placeholder,
  // };

  return (
    <label htmlFor={camelCase} className={`flow-form-label ${kebabCase}-label`}>
      <input
        type={type}
        placeholder={placeholder}
        className={`flow-form-input ${kebabCase}-input`}
        name={camelCase}
        id={camelCase}
        value={value || ''}
        onChange={handleChange}
      />
    </label>
  );
};

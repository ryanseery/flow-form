import * as React from 'react';
import { toKebabCase, toCamelCase } from './utils';
import { useFormData } from './hooks';

interface IInput {
  children?: string;
  type?: string;
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({ children, type = 'text', placeholder }) => {
  const { value, handleChange } = useFormData({
    id: children?.toLowerCase() ?? '',
    value: '',
    error: false,
  });

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
    <label htmlFor={camelCase} className={`flow-form-label ${kebabCase}-label`} style={{ display: `block` }}>
      {children}
      <input
        id={camelCase}
        name={camelCase}
        value={value || ''}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        style={{ display: `block` }}
        className={`flow-form-input ${kebabCase}-input`}
      />
    </label>
  );
};

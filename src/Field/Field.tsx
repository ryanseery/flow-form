import * as React from 'react';
import { useFormData } from '../useFormData';
import { toCamelCase } from '../utils';
import { Input, Select } from './Fields';

type IField = {
  type?: string;
  name?: string;
  children?: string;
  required?: boolean;
  style?: React.CSSProperties;
  validation?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => boolean;
};

// TODO fix ref type error
export const Field: React.FC<IField> = ({
  type = 'text',
  name,
  children,
  required,
  style,
  validation,
  ...rest
}) => {
  const { data, onRegister, onChange, onFocus, onBlur } = useFormData({
    validation,
  });

  const id = React.useMemo(
    () => (name ? toCamelCase(name) : toCamelCase(children ?? '')),
    [name, children],
  );

  return (
    <label htmlFor={id} className="flow-form-label">
      {children ? children : name ?? ''}
      {() => {
        switch (type) {
          case 'select': {
            return (
              <Select
                {...rest}
                className="flow-form-input"
                style={{ ...style, display: 'block' }}
                ref={onRegister}
                id={id}
                data-input-id={id}
                name={id}
                required={required}
                value={data[id] ?? ''}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            );
          }
          default: {
            return (
              <Input
                {...rest}
                className="flow-form-input"
                style={{ ...style, display: 'block' }}
                ref={onRegister}
                id={id}
                data-input-id={id}
                name={id}
                type={type}
                required={required}
                value={data[id] ?? ''}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            );
          }
        }
      }}
      {/* {showError && <span>Handle ERROR</span>} */}
    </label>
  );
};

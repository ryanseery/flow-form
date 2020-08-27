import * as React from 'react';
import { useFormData } from '../useFormData';
import { toCamelCase } from '../utils';
import { Input, Select, TextArea } from './Fields';

export interface IField
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  children?: string | React.ReactElement;
  validation?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => boolean;
}

// TODO allow css files to get rid of style in deconstruct
export const Field: React.FC<IField> = ({ type = 'text', name, children, validation, ...rest }) => {
  const { data, onRegister, onChange, onFocus, onBlur } = useFormData({
    validation,
  });

  // TODO clean this up!
  const { id, inputLabel } = React.useMemo(() => {
    const isString = typeof children === 'string';

    const isOptions = Array.isArray(children);

    if (isString) {
      return {
        id: toCamelCase(children as string),
        inputLabel: children,
      };
    } else if (isOptions) {
      return {
        id: toCamelCase(name ?? ''),
        inputLabel: name,
      };
    }

    return {
      id: isString ? toCamelCase(children as string) : toCamelCase(name as string),
      inputLabel: !isOptions && !children ? name : children ?? '',
    };
  }, []);

  return (
    <label htmlFor={id} className="flow-form-label">
      {inputLabel}
      {(() => {
        switch (type) {
          case 'select': {
            return (
              <Select
                {...rest}
                className="flow-form-select"
                ref={onRegister}
                id={id}
                data-input-id={id}
                name={id}
                value={data[id] ?? ''}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                children={children}
              />
            );
          }
          case 'textarea': {
            return (
              <TextArea
                {...rest}
                className="flow-form-textarea"
                ref={onRegister}
                id={id}
                data-input-id={id}
                name={id}
                type={type}
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
                ref={onRegister}
                id={id}
                data-input-id={id}
                name={id}
                type={type}
                value={data[id] ?? ''}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            );
          }
        }
      })()}
      {/* {showError && <span>Handle ERROR</span>} */}
    </label>
  );
};

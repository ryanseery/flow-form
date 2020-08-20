import * as React from 'react';
import { useFormData } from '../useFormData';
import { toCamelCase } from '../utils';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: string;
  validation?: (e: React.ChangeEvent<HTMLInputElement>) => boolean;
}

export const Field: React.FC<Props> = ({
  type = 'text',
  name,
  children,
  required,
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
      <input
        className="flow-form-input"
        style={{ display: 'block' }}
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
        {...rest}
      />
      {/* {showError && <span>Handle ERROR</span>} */}
    </label>
  );
};

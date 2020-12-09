import * as React from 'react';
import { useFormData } from '../useFormData';
import { toCamelCase } from '../utils';
import { Input, Select, TextArea, CheckboxRadio, DragDrop } from './Fields';
import { EventType } from '../@types/event';

export interface IField extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  children?: string | React.ReactElement;
  validation?: (e: EventType) => boolean;
  onChange: (e: EventType) => void;
}
export const Field: React.FC<IField> = ({ type = 'text', name, children, validation, ...rest }) => {
  const { data, onRegister, onChange, onToggle, onFocus, onBlur } = useFormData({
    validation,
  });

  // TODO clean this up
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
    } else {
      return {
        id: isString ? toCamelCase(children as string) : toCamelCase(name as string),
        inputLabel: !isOptions && !children ? name : children ?? '',
      };
    }
  }, []);

  const defaultProps = {
    ...rest,
    type,
    id,
    onChange,
    onFocus,
    onBlur,
    name: id,
    value: data[id] ?? '',
    ref: onRegister,
  };

  const checkboxRadio = { ...defaultProps, onChange: onToggle };

  return (
    <label htmlFor={id}>
      {inputLabel}
      {(() => {
        switch (type) {
          case 'select': {
            return <Select children={children} {...defaultProps} />;
          }
          case 'textarea': {
            return <TextArea {...defaultProps} />;
          }
          case 'radio': {
            return <CheckboxRadio {...checkboxRadio} />;
          }
          case 'checkbox': {
            return <CheckboxRadio {...checkboxRadio} />;
          }
          case 'drag-drop': {
            return <DragDrop {...defaultProps} />;
          }
          default: {
            return <Input {...defaultProps} />;
          }
        }
      })()}
      {/* {showError && <span>Handle ERROR</span>} */}
    </label>
  );
};

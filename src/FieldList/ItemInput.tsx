import * as React from 'react';
import { FFComponent } from '../FFComponent';

interface IItemInput {
  ffComp?: string;
  objKey: string;
  fieldIndex: number;
  type: string;
  value: string | number;
  required?: boolean;
  autoComplete?: string;
  style?: {};
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const ItemInput: React.FC<IItemInput> = ({
  objKey,
  fieldIndex,
  type,
  value,
  required,
  autoComplete,
  onChange,
}) => (
  <input
    id={`${objKey}-field-field-list-item-${fieldIndex}`}
    data-input-id={`${objKey}-field-field-list-item-${fieldIndex}`}
    name={objKey}
    type={type}
    value={value}
    required={required}
    onChange={onChange}
    // onBlur={onBlur}
    // onFocus={onFocus}
    className={`flow-form-field flow-form-field-list-item ${objKey}-field-list-item`}
    placeholder={objKey}
    autoComplete={autoComplete}
    style={{ marginRight: '10px' }}
  />
);

ItemInput.defaultProps = {
  ffComp: FFComponent.ITEM_INPUT,
};

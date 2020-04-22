import * as React from 'react';
import { FFComponent } from '../../../FFComponent';
import { capitalize } from '../../../utils';

interface IItem {
  ffComp?: string;
  objKey: string;
  fieldIndex: number;
  type: string;
  value: string | number;
  required: boolean;
  autoComplete?: string;
  style?: {};
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const Item: React.FC<IItem> = ({ objKey, fieldIndex, type, value, required, autoComplete, style, onChange }) => (
  <input
    id={`${objKey}-field-inputList-item-${fieldIndex}`}
    data-input-id={`${objKey}-field-inputList-item-${fieldIndex}`}
    name={objKey}
    type={type}
    value={value}
    required={required}
    onChange={onChange}
    // onBlur={onBlur}
    // onFocus={onFocus}
    className={`flow-form-field flow-form-inputList-item ${objKey}-inputList-item`}
    placeholder={capitalize(objKey)}
    autoComplete={autoComplete}
    style={{ ...style, marginRight: '5px' }}
  />
);

Item.defaultProps = {
  ffComp: FFComponent.ITEM,
};

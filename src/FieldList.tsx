import * as React from 'react';
import { FFComponent } from './FFComponent';
import { toCamelCase } from './utils';

interface IFieldList {
  ffComp?: string;
  label: string;
  className?: string;
  style?: {};
}

export const FieldList: React.FC<IFieldList> = ({ label, className, style, children }) => {
  if (!label) {
    throw new Error(`THe label prop is mandatory on FieldList Component.`);
  }

  return (
    <div data-field-list-id={toCamelCase(label)} className={`flow-form-field-list ${className}`} style={style}>
      {children}
    </div>
  );
};

FieldList.defaultProps = {
  ffComp: FFComponent.FIELD_LIST,
};

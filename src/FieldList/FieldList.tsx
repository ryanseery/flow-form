import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { toCamelCase } from '../utils';
import { Item, IItem } from './Item';

type IFieldListProps = {
  ffComp?: string;
  label: string;
  className?: string;
  style?: {};
};

type IFieldList<P> = React.FunctionComponent<P> & {
  Item: typeof Item; // add this
};

// TODO map through children and build state
// TODO follow List code then replace
// TODO put function code into own hook?
export const FieldList: IFieldList<IFieldListProps> = ({ label, className, style, children }) => {
  if (!label) {
    throw new Error(`The label prop is mandatory on FieldList Component.`);
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

FieldList.Item = Item;

import * as React from 'react';
import { FFComponent } from '../FFComponent';

export interface IItem {
  ffComp?: string;
}

export const Item: React.FC<IItem> = ({ ffComp }) => (
  <div>
    <p>Item: {ffComp}</p>
  </div>
);

Item.defaultProps = {
  ffComp: FFComponent.ITEM,
};

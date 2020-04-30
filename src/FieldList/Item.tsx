import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { IField } from '../Field/Field';

export interface IItem extends IField {}

export const Item: React.FC<IItem> = React.memo(() => <></>);

Item.defaultProps = {
  ffComp: FFComponent.ITEM,
};

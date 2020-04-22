import * as React from 'react';
import { FFComponent } from '../../../FFComponent';

interface IRow {
  ffComp?: string;
  className?: string;
}

export const Row: React.FC<IRow> = ({ className, children }) => (
  <div
    className={`flow-form-inputList-row ${className}-inputList-row`}
    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
  >
    {children}
  </div>
);

Row.defaultProps = {
  ffComp: FFComponent.ROW,
};

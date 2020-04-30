import * as React from 'react';
import { FFComponent } from '../FFComponent';

interface IRow {
  ffComp?: string;
  className?: string;
}

export const Row: React.FC<IRow> = ({ className, children }) => (
  <div
    className={`flow-form-field-row ${className}`}
    style={{ display: 'flex', flexDirection: 'row', minHeight: '2rem' }}
  >
    {children}
  </div>
);

Row.defaultProps = {
  ffComp: FFComponent.ROW,
};

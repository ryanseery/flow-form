import * as React from 'react';
import { FFComponent } from '../FFComponent';

interface IDefaultNext {
  ffComp?: string;
  disabled: boolean;
  onClick: () => void;
}

export const DefaultNext: React.FC<IDefaultNext> = ({ disabled, onClick }) => (
  <button type="button" className="flow-form-next-btn" disabled={disabled} onClick={onClick}>
    Next
  </button>
);

DefaultNext.defaultProps = {
  ffComp: FFComponent.DEFAULT_NEXT,
};

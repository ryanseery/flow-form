import * as React from 'react';
import { FFComponent } from '../FFComponent';

interface IDefaultBtn {
  ffComp?: string;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  style?: {};
}

export const DefaultBtn: React.FC<IDefaultBtn> = ({ className, onClick, disabled, children, style }) => (
  <button type="button" className={`flow-form-btn ${className}`} disabled={disabled} onClick={onClick} style={style}>
    {children}
  </button>
);

DefaultBtn.defaultProps = {
  ffComp: FFComponent.DEFAULT_BTN,
};

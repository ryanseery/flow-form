import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { theme } from '../theme';

interface IDefaultBtn {
  ffComp?: string;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  style?: {};
}

export const DefaultBtn: React.FC<IDefaultBtn> = ({ className, onClick, disabled, children, style }) => (
  <button
    type="button"
    className={`flow-form-btn ${className}`}
    disabled={disabled}
    onClick={onClick}
    style={{
      ...style,
      outline: 'none',
      fontSize: `${theme.fonts.small}`,
      borderRadius: `${theme.border.radius}`,
      padding: '0.5em 1em',
      border: `${disabled ? `none` : theme.border.focus}`,
      cursor: 'pointer',
    }}
  >
    {children}
  </button>
);

DefaultBtn.defaultProps = {
  ffComp: FFComponent.DEFAULT_BTN,
};

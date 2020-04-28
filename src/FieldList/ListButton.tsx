import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { colors } from '../colors';

interface IListButton {
  ffComp?: string;
  onClick: () => void;
  color: string;
}

export const ListButton: React.FC<IListButton> = ({ children, onClick, color }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      backgroundColor: `${color}`,
      color: `${colors.white}`,
      border: 'none',
      fontSize: '1em',
      cursor: 'pointer',
      width: '1.5em',
      height: '1.5em',
      textAlign: 'center',
    }}
  >
    {children}
  </button>
);

ListButton.defaultProps = {
  ffComp: FFComponent.LIST_BUTTON,
};

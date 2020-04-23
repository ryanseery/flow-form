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
    style={{ backgroundColor: `${color}`, color: `${colors.white}`, border: 'none', fontSize: '1em', width: '1.5em' }}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

ListButton.defaultProps = {
  ffComp: FFComponent.LIST_BUTTON,
};

import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { colors } from '../colors';

interface IListButton {
  ffComp?: string;
  onClick: () => void;
  remove?: boolean;
}

export const ListButton: React.FC<IListButton> = ({ children, onClick, remove }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      backgroundColor: `${remove ? colors.red : colors.green}`,
      color: `${colors.white}`,
      border: 'none',
      fontSize: '1em',
      cursor: 'pointer',
      width: '1.5em',
      height: '1.5em',
      textAlign: 'center',
      borderRadius: '0.2em',
    }}
  >
    {children}
  </button>
);

ListButton.defaultProps = {
  ffComp: FFComponent.LIST_BUTTON,
};

import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { theme } from '../theme';

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
      backgroundColor: `${remove ? theme.colors.red : theme.colors.green}`,
      color: `${theme.colors.white}`,
      border: 'none',
      fontSize: `${theme.fonts.small}`,
      cursor: 'pointer',
      width: '1.5em',
      height: '1.5em',
      textAlign: 'center',
      borderRadius: `${theme.border.radius}`,
      outline: 'none',
    }}
  >
    {children}
  </button>
);

ListButton.defaultProps = {
  ffComp: FFComponent.LIST_BUTTON,
};

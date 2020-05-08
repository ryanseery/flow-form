import * as React from 'react';
import styled from 'styled-components';
import { FFComponent } from '../FFComponent';
import { ButtonProps } from './@types';
import { ButtonStyles } from './@styles';

interface IListButton extends ButtonProps {
  remove?: boolean;
}

const ListButtonWrapper = styled(ButtonStyles)<IListButton>`
  background-color: ${props => (props.remove ? props.theme.colors.red : props.theme.colors.green)};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 0;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
`;

export const ListButton: React.FC<IListButton> = ({ children, onClick, remove }) => (
  <ListButtonWrapper type="button" className="flow-form-list-btn" onClick={onClick} remove={remove}>
    {children}
  </ListButtonWrapper>
);

ListButton.defaultProps = {
  ffComp: FFComponent.LIST_BUTTON,
};

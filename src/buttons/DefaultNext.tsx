import * as React from 'react';
import styled from 'styled-components';
import { FFComponent } from '../FFComponent';
import { ButtonProps } from './@types';
import { ButtonStyles } from './@styles';

interface IDefaultNext extends ButtonProps {
  disabled: boolean;
}

const DefaultNextWrapper = styled(ButtonStyles)<IDefaultNext>`
  border: ${props => (props.disabled ? `none` : props.theme.border.focus)};
  background-color: ${props => (props.disabled ? props.theme.colors.grey : props.theme.colors.blue)};
  color: ${props => props.theme.colors.white};
`;

export const DefaultNext: React.FC<IDefaultNext> = ({ onClick, disabled }) => (
  <DefaultNextWrapper type="button" className="flow-form-next-btn" onClick={onClick} disabled={disabled}>
    Next
  </DefaultNextWrapper>
);

DefaultNext.defaultProps = {
  ffComp: FFComponent.DEFAULT_NEXT_BUTTON,
};

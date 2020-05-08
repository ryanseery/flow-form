import * as React from 'react';
import styled from 'styled-components';
import { FFComponent } from '../FFComponent';
import { ButtonProps } from './@types';
import { ButtonStyles } from './@styles';

interface IDefaultSubmit extends ButtonProps {
  disabled: boolean;
}

const DefaultSubmitWrapper = styled(ButtonStyles)<IDefaultSubmit>`
  border: ${props => (props.disabled ? `none` : props.theme.border.focus)};
  color: ${props => props.theme.colors.white};
  background-color: ${props => (props.disabled ? props.theme.colors.grey : props.theme.colors.blue)};
`;

export const DefaultSubmit: React.FC<IDefaultSubmit> = ({ disabled }) => (
  <DefaultSubmitWrapper type="submit" className="flow-form-submit-btn" disabled={disabled}>
    Submit
  </DefaultSubmitWrapper>
);

DefaultSubmit.defaultProps = {
  ffComp: FFComponent.DEFAULT_SUBMIT,
};

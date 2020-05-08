import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { ButtonProps } from './@types';
import { ButtonStyles } from './@styles';

export const DefaultBack: React.FC<ButtonProps> = ({ onClick }) => (
  <ButtonStyles type="button" className="flow-form-back-btn" onClick={onClick}>
    Back
  </ButtonStyles>
);

DefaultBack.defaultProps = {
  ffComp: FFComponent.DEFAULT_BACK_BUTTON,
};

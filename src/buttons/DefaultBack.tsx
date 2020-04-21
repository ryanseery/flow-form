import * as React from 'react';
import { FFComponent } from '../FFComponent';

interface IDefaultBack {
  ffComp?: string;
  onClick: () => void;
}

export const DefaultBack: React.FC<IDefaultBack> = ({ onClick }) => (
  <button type="button" className="flow-form-back-btn" onClick={onClick}>
    Back
  </button>
);

DefaultBack.defaultProps = {
  ffComp: FFComponent.DEFAULT_BACK,
};

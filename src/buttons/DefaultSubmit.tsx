import * as React from 'react';
import { FFComponent } from '../FFComponent';

interface IDefaultSubmit {
  ffComp?: string;
  disabled: boolean;
}

export const DefaultSubmit: React.FC<IDefaultSubmit> = ({ disabled }) => (
  <button type="submit" className="flow-form-submit-btm" disabled={disabled}>
    Submit
  </button>
);

DefaultSubmit.defaultProps = {
  ffComp: FFComponent.DEFAULT_SUBMIT,
};

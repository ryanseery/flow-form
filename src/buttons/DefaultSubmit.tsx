import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { theme } from '../theme';

interface IDefaultSubmit {
  ffComp?: string;
  disabled: boolean;
}

export const DefaultSubmit: React.FC<IDefaultSubmit> = ({ disabled }) => (
  <button
    type="submit"
    className="flow-form-submit-btm"
    disabled={disabled}
    style={{
      outline: 'none',
      fontSize: `${theme.fonts.small}`,
      borderRadius: `${theme.border.radius}`,
      padding: '0.5em 1em',
      border: `${disabled ? `none` : theme.border.focus}`,
      color: `${theme.colors.white}`,
      backgroundColor: `${disabled ? theme.colors.grey : theme.colors.blue}`,
      cursor: 'pointer',
    }}
  >
    Submit
  </button>
);

DefaultSubmit.defaultProps = {
  ffComp: FFComponent.DEFAULT_SUBMIT,
};

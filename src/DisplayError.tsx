import * as React from 'react';
import { colors } from './colors';

interface IDisplayError {
  id: string;
  className?: string;
  label?: string;
  errMsg?: string;
}

export const DisplayError: React.FC<IDisplayError> = ({ id, className, label, errMsg }) => (
  <small
    id={`${id}-error`}
    data-error-id={`${id}-error`}
    className={`flow-form-error ${className}-error`}
    style={{ color: `${colors.red}` }}
  >
    {typeof errMsg === 'string' ? errMsg : `Please provide a valid value for ${label}`}
  </small>
);

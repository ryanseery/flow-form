import * as React from 'react';
import styled from 'styled-components';

interface IDisplayError {
  id: string;
  className?: string;
  label?: string;
  errMsg?: string;
}

const DisplayErrorWrapper = styled.small`
  color: ${props => props.theme.colors.red};
`;

export const DisplayError: React.FC<IDisplayError> = ({ id, className, errMsg }) => (
  <DisplayErrorWrapper id={`${id}-error`} data-error-id={`${id}-error`} className={`flow-form-error ${className}`}>
    {typeof errMsg === 'string' ? errMsg : `Please provide a valid value!`}
  </DisplayErrorWrapper>
);

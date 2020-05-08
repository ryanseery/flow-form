import styled from 'styled-components';

export const ButtonStyles = styled.button`
  outline: none;
  font-size: ${props => props.theme.font.small};
  border-radius: ${props => props.theme.border.radius};
  padding: 0.5em 1em;
  cursor: pointer;
`;

import styled from 'styled-components';

type Props = {
  type?: string;
};

export const FieldWrapper = styled.label<Props>`
  display: block;
  text-transform: capitalize;
  min-height: ${props => (props.type === 'checkbox' || props.type === 'radio' ? `4rem` : `4.5rem`)};
  legend {
    font-size: ${props => props.theme.font.medium};
    padding-bottom: 0.2rem;
  }
  .required {
    color: ${props => props.theme.colors.red};
  }
`;

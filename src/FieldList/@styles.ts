import styled from 'styled-components';
import { Props, border } from '../utils';

export const FieldListWrapper = styled.div`
  min-height: 4.5rem;
  .flow-form-field-list-label {
    font-size: ${props => props.theme.font.medium};
    padding-bottom: 0.2em;
  }
  .required {
    color: ${props => props.theme.colors.red};
  }
  .flow-form-field-list-row {
    min-height: rem;
    display: flex;
    flex-direction: row;
  }
  .flow-form-field-list-row-input-container {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;

export const ItemInputWrapper = styled.input<Props>`
  margin-right: 0.625em;
  text-transform: capitalize;
  font-size: ${props => props.theme.font.medium};
  text-indent: ${props => props.theme.text.indent};
  border-radius: ${props => props.theme.border.radius};
  background-color: ${props => props.theme.colors.white};
  border: ${props => border(props)};
  outline: none;
`;

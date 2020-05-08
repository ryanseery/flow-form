import styled from 'styled-components';

type Props = {
  focused: boolean;
  showError: boolean;
  theme: { border: { error: string; focus: string; default: string } };
};

export function border(props: Props) {
  if (props.focused && props.showError) return props.theme.border.error;

  if (props.focused) return props.theme.border.focus;

  if (props.showError) return props.theme.border.error;

  return props.theme.border.default;
}

export const InputWrapper = styled.input<Props>`
  display: block;
  width: 100%;
  font-size: ${props => props.theme.font.medium};
  text-indent: ${props => props.theme.text.indent};
  border-radius: ${props => props.theme.border.radius};
  background-color: ${props => props.theme.colors.white};
  outline: none;
  border: ${props => border(props)};
`;

export const ColorInputWrapper = styled(InputWrapper)`
  cursor: pointer;
`;

export const TextareaWrapper = styled.textarea<Props>`
  display: block;
  width: 100%;
  font-size: ${props => props.theme.font.medium};
  text-indent: ${props => props.theme.text.indent};
  border-radius: ${props => props.theme.border.radius};
  background-color: ${props => props.theme.colors.white};
  outline: none;
  border: ${props => border(props)};
`;

export const SelectWrapper = styled.select<Props>`
  display: block;
  width: 100%;
  font-size: ${props => props.theme.font.medium};
  text-indent: ${props => props.theme.text.indent};
  border-radius: ${props => props.theme.border.radius};
  background-color: ${props => props.theme.colors.white};
  outline: none;
  border: ${props => border(props)};
  cursor: pointer;
`;

export const ButtonInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

interface IButtonInput extends Props {
  index: number;
  optionsLength: number;
  type?: string;
}
export const ButtonInputLabel = styled.label<IButtonInput>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${props => props.theme.font.small};
  text-transform: capitalize;
  margin-right: ${props => (props.index === props.optionsLength ? `0` : `0.9375em`)};
  input {
    width: 1rem;
    font-size: ${props => (props.type === `radio` ? props.theme.inputs.radio : props.theme.inputs.checkbox)};
  }
`;

export const DragAndDropWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 5rem;
  width: 100%;
  border: ${props => border(props)};
  border-radius: ${props => props.theme.border.radius};
  cursor: pointer;
  .flow-form-file-call-to-action {
    font-size: ${props => props.theme.font.small};
  }
  .flow-form-img-call-to-action {
    font-size: ${props => props.theme.font.small};
    text-align: center;
    width: 61%;
  }
  .flow-form-img-preview-call-to-action {
    font-size: ${props => props.theme.font.small};
    text-align: center;
    width: 20%;
    position: absolute;
    color: ${props => props.theme.colors.white};
  }
  img {
    height: 100%;
    width: 100%;
  }
  input {
    display: none;
  }
`;

export const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  .list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.3rem;
    font-size: ${props => props.theme.font.small};
  }
`;

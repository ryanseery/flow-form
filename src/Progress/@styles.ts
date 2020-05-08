import styled from 'styled-components';

type Props = {
  isActive: boolean;
};

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${props => props.theme.border.default};
`;

export const StepWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  .flow-form-label-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 0.3em 0.3em 0.3em;
  }
  .flow-form-label {
    color: ${props => (props.isActive ? props.theme.colors.blue : props.theme.colors.grey)};
    font-size: ${props => props.theme.font.large};
  }
`;
export const Doughnut = styled.span<Props>`
  background: ${props =>
    props.isActive
      ? `radial-gradient(circle, transparent 30%, ${props.theme.colors.blue} 40%)`
      : `radial-gradient(circle, transparent 30%, ${props.theme.colors.grey} 40%)`};
  border-radius: 80%;
  height: 0.9375rem;
  width: 1.125rem;
  margin-right: 0.0625rem;
  padding-top: 0.1875rem;
  font-size: ${props => props.theme.font.large};
  text-align: center;
  color: ${props => props.theme.colors.white};
`;

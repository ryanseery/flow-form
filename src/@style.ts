import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  .flow-form-fieldset {
    border: none;
  }
  .flow-form-button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
`;

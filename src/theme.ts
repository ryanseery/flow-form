import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    blue: '#00A0DF',
    grey: '#E6E6E6',
    white: '#ffffff',
    green: '#4BBF6B',
    red: '#FF0000',
  },
  font: {
    small: '1em',
    medium: '1.2em',
    large: '1.5em',
  },
  text: {
    indent: '0.2em',
  },
  border: {
    default: '0.0625em solid #BDBDBD',
    focus: '0.0625em solid #00A0DF',
    error: '0.0625em solid #FF0000',
    radius: '0.2em',
  },
  inputs: {
    radio: '0.75em',
    checkbox: '1em',
  },
};

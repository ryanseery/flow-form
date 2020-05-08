import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      grey: string;
      white: string;
      green: string;
      red: string;
    };
    font: {
      small: string;
      medium: string;
      large: string;
    };
    text: {
      indent: string;
    };
    border: {
      default: string;
      focus: string;
      error: string;
      radius: string;
    };
    inputs: {
      radio: string;
      checkbox: string;
    };
  }
}

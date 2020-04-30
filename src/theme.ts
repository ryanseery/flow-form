type Theme = {
  colors: {
    blue: string;
    grey: string;
    white: string;
    green: string;
    red: string;
  };
  fonts: {
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
};

export const theme: Theme = {
  colors: {
    blue: '#00A0DF',
    grey: '#E6E6E6',
    white: '#ffffff',
    green: '#4BBF6B',
    red: '#FF0000',
  },
  fonts: {
    small: '1em',
    medium: '1.2em',
    large: '1.5em',
  },
  text: {
    indent: '0.2em',
  },
  border: {
    default: `1px solid #BDBDBD`,
    focus: `1px solid #00A0DF`,
    error: `1px solid #FF0000`,
    radius: '0.2em',
  },
};

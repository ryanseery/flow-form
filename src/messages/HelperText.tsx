import * as React from 'react';

interface IHelperText {
  id: string;
  className: string;
  helperText?: boolean | string;
}

export const HelperText: React.FC<IHelperText> = ({ id, helperText, className }: IHelperText) => {
  if (typeof helperText === 'string') {
    return (
      <small
        id={id ?? `${id}-helper-text`}
        className={`helper-text ${className}-helper-text`}
        style={{ color: 'rgb(101, 97, 97)' }}
      >
        {helperText}
      </small>
    );
  }

  return null;
};

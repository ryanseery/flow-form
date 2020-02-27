import * as React from 'react';

interface IHelperText {
  id: string;
  className: string;
  helperText?: boolean | string;
}

export const HelperText: React.FC<IHelperText> = ({ id, helperText, className }: IHelperText) => {
  if (typeof helperText === 'string') {
    return (
      <small id={`${id}-helper-text`} className={`${className}-helper-text`} style={{ color: '#BDBDBD' }}>
        {helperText}
      </small>
    );
  }

  return null;
};

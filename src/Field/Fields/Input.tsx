import * as React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, Props>(
  (props, forwardRef) => <input {...props} ref={forwardRef} />,
);

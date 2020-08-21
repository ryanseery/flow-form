import * as React from 'react';

type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  (props, forwardRef) => <select {...props} ref={forwardRef}></select>,
);

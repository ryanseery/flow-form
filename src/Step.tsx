import * as React from 'react';

interface Step extends React.HTMLAttributes<HTMLFieldSetElement> {}

// TODO ref on field to go through children and see what are inputs?
export const Step: React.FC<Step> = ({ children }) => <fieldset data-flow-id="step">{children}</fieldset>;

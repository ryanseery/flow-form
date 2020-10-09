import * as React from 'react';

interface Step extends React.HTMLAttributes<HTMLFieldSetElement> {};

export const Step: React.FC<Step> = ({ children }) => (
  <fieldset data-id="step">{children}</fieldset>
);
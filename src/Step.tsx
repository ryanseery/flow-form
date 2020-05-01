import * as React from 'react';
import { FFComponent } from './FFComponent';
import { toCamelCase } from './utils';
import { IField } from './Field/Field';

export interface IStep {
  ffComp: string;
  label: string;
  name?: string;
  className?: string;
  style?: {};
}

export const Step: React.FC<IStep> = ({ children, name, label, className, style }) => {
  if (!label) {
    throw new Error(`The label prop is mandatory on Step Component.`);
  }

  return (
    <div data-step-id={toCamelCase(name ? name : label)} className={`flow-form-step ${className ?? ''}`} style={style}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<IField>(child)) {
          return React.cloneElement(child as React.ReactElement<IField>, {
            index,
            step: toCamelCase(name ? name : label),
          });
        } else {
          return child;
        }
      })}
    </div>
  );
};

Step.defaultProps = {
  ffComp: FFComponent.STEP,
};

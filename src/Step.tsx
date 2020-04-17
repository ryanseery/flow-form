import * as React from 'react';
import { FFComponent } from './FFComponent';
import { toKebabCase, toCamelCase } from './utils';
import { IInput } from './Input/Input';

export interface IStep {
  ffComp: string;
  title: string;
}

export const Step: React.FC<IStep> = ({ children, title }) => {
  if (!title) {
    throw new Error(`The title prop is mandatory on Step Component`);
  }

  return (
    <div data-step-id={toCamelCase(title)} className={`flow-from-step ${title && toKebabCase(title)}`}>
      {React.Children.map(children, (child, index) => {
        // if child is Input component we clone props into it
        if (React.isValidElement<IInput>(child)) {
          return React.cloneElement(child as React.ReactElement<IInput>, {
            index,
            step: toCamelCase(title),
          });
        }
        // else we return child naturally
        else {
          return child;
        }
      })}
    </div>
  );
};

Step.defaultProps = {
  ffComp: FFComponent.STEP,
};

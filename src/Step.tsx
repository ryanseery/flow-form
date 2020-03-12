import * as React from 'react';
import { toKebabCase, toCamelCase } from './utils';
import { FFComponent } from './@types/ffFormComponents';

export interface IStep {
  flowComp: string;
  title: string;
}

// TODO only insert index/step if child is Input
export const Step: React.FC<IStep> = ({ children, title }) => {
  return (
    <div data-step className={`flow-from-step ${title && toKebabCase(title)}`}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<any>, {
          index,
          step: title ? toCamelCase(title) : null,
        }),
      )}
    </div>
  );
};

Step.defaultProps = {
  flowComp: FFComponent.STEP,
};

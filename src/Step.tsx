import * as React from 'react';
import { toKebabCase, toCamelCase } from './utils';

interface IStep {
  title: string;
}

// TODO only insert index/step if child is Input
export const Step: React.FC<IStep> = ({ children, title }) => {
  return (
    <div className={`flow-from-step ${toKebabCase(title)}`}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<any>, {
          index,
          step: toCamelCase(title),
        }),
      )}
    </div>
  );
};

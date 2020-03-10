import * as React from 'react';
import { toKebabCase, toCamelCase } from './utils';

interface IStep {
  title: string;
}

export const Step: React.FC<IStep> = ({ children, title }) => {
  return (
    <div className={`flow-from-step ${toKebabCase(title)}`}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<any>, {
          index,
          step: title,
        }),
      )}
    </div>
  );
};

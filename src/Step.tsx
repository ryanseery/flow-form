import * as React from 'react';
import { FFComponent } from './FFComponent';
import { toCamelCase } from './utils';
import { IField } from './Field/Field';

export interface IStep {
  ffComp?: string;
  label: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactElement | React.ReactElement[];
}

export const Step: React.FC<IStep> = ({ children, name, label, className, style }) => {
  if (!label) {
    throw new Error(`The label prop is mandatory on Step Component.`);
  }

  return (
    <div data-step-id={toCamelCase(name ? name : label)} className={`flow-form-step ${className ?? ''}`} style={style}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<IField>(child)) {
          if (child.props.ffComp === FFComponent.FIELD || child.props.ffComp === FFComponent.FIELD_LIST) {
            return React.cloneElement(child as React.ReactElement<IField>, {
              index,
              step: toCamelCase(name ? name : label),
            });
          } else if (child.type === 'div') {
            return (
              <div style={child.props.style}>
                {React.Children.map(child.props.children, (grandChild, i) => {
                  if (React.isValidElement<IField>(grandChild)) {
                    if (grandChild.props.ffComp === FFComponent.FIELD) {
                      return React.cloneElement(grandChild as React.ReactElement<IField>, {
                        index: i,
                        step: toCamelCase(name ? name : label),
                      });
                    } else {
                      return grandChild;
                    }
                  } else {
                    return grandChild;
                  }
                })}
              </div>
            );
          } else {
            return child;
          }
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

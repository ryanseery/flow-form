import * as React from 'react';
import { IStepState } from './Context';
import { FFComponent } from './FFComponent';
import { theme } from './theme';

type IDoughnut = {
  ffComp?: string;
  isActive: boolean;
};

const Doughnut: React.FC<IDoughnut> = ({ isActive }) => (
  <span
    className="flow-form-doughnut"
    style={{
      background: isActive
        ? 'radial-gradient(circle, transparent 30%, ${theme.colors.blue} 40%)'
        : 'radial-gradient(circle, transparent 30%, ${theme.colors.grey} 40%)',
      borderRadius: '80%',
      height: '0.9375em',
      width: '1.125em',
      marginRight: '0.0625em',
      paddingTop: '0.1875em',
      fontSize: `${theme.fonts.large}`,
      textAlign: 'center',
      color: `${theme.colors.white}`,
    }}
  />
);

Doughnut.defaultProps = {
  ffComp: FFComponent.DOUGHNUT,
};

export interface IProgress {
  ffComp?: string;
  steps: IStepState[];
  currentStep: IStepState | null;
  doughNut?: boolean;
}

export const Progress: React.FC<IProgress> = ({ steps, currentStep, doughNut }) => {
  const isActive = (step: IStepState) => step.index === currentStep?.index;

  return (
    <div
      className="flow-form-progress"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `${theme.border.default}`,
      }}
    >
      {steps?.map((step: IStepState) => (
        <div key={step.id} style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            className="flow-form-label-container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 0.3em 0.3em 0.3em',
            }}
          >
            {doughNut && <Doughnut isActive={isActive(step)} />}
            <span
              className="flow-form-label"
              style={{
                color: isActive(step) ? `${theme.colors.blue}` : `${theme.colors.grey}`,
                fontSize: `${theme.fonts.large}`,
              }}
            >
              {step.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

Progress.defaultProps = {
  ffComp: FFComponent.PROGRESS,
};

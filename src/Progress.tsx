import * as React from 'react';
import { IStepState } from './Context';
import { FFComponent } from './FFComponent';
import { theme } from './theme';

interface IDoughnut {
  ffComp?: string;
  isActive: boolean;
}

const Doughnut: React.FC<IDoughnut> = ({ isActive }) => (
  <span
    className="flow-form-doughnut"
    style={{
      background: isActive
        ? `radial-gradient(circle, transparent 30%, ${theme.colors.blue} 40%)`
        : `radial-gradient(circle, transparent 30%, ${theme.colors.grey} 40%)`,
      borderRadius: '80%',
      height: '15px',
      width: '18px',
      marginRight: '1px',
      paddingTop: '3px',
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

export const Progress: React.FC<IProgress> = ({ steps, currentStep, doughNut }) => (
  <div
    className="flow-form-progress"
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${theme.colors.grey}`,
      paddingBottom: '5px',
      marginBottom: '5px',
    }}
  >
    {steps?.map((step: IStepState) => (
      <div
        key={step.id}
        className="flow-form-label-container"
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
      >
        {doughNut && <Doughnut isActive={step.index === currentStep?.index} />}
        <span
          className="flow-form-label"
          style={{
            color: step.index === currentStep?.index ? `${theme.colors.blue}` : `${theme.colors.grey}`,
            fontSize: `${theme.fonts.large}`,
          }}
        >
          {step.label}
        </span>
      </div>
    ))}
  </div>
);

Progress.defaultProps = {
  ffComp: FFComponent.PROGRESS,
};

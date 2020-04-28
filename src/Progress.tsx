import * as React from 'react';
import { IStepState } from './Context';
import { FFComponent } from './FFComponent';
import { colors } from './colors';

interface IDoughnut {
  ffComp?: string;
  isActive: boolean;
}

const Doughnut: React.FC<IDoughnut> = ({ isActive }) => (
  <span
    className="flow-form-doughnut"
    style={{
      background: isActive
        ? `radial-gradient(circle, transparent 30%, ${colors.blue} 40%)`
        : `radial-gradient(circle, transparent 30%, ${colors.grey} 40%)`,
      borderRadius: '80%',
      height: '15px',
      width: '18px',
      marginRight: '1px',
      paddingTop: '3px',
      fontSize: '1em',
      textAlign: 'center',
      color: `${colors.white}`,
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
      borderBottom: `1px solid ${colors.grey}`,
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
            color: step.index === currentStep?.index ? `${colors.blue}` : `${colors.grey}`,
            fontSize: '1em',
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

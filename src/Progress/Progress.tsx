import * as React from 'react';
import { IStepState } from '../Context';
import { FFComponent } from '../FFComponent';
import { ProgressWrapper, StepWrapper, Doughnut } from './@styles';

export interface IProgress {
  ffComp?: string;
  steps: IStepState[];
  currentStep: IStepState | null;
  doughNut?: boolean;
}

export const Progress: React.FC<IProgress> = ({ steps, currentStep, doughNut }) => {
  const isActive = (step: IStepState) => step.index === currentStep?.index;

  return (
    <ProgressWrapper className="flow-form-progress">
      {steps?.map((step: IStepState) => (
        <StepWrapper key={step.id} isActive={isActive(step)}>
          <div className="flow-form-label-container">
            {doughNut && <Doughnut isActive={isActive(step)} />}
            <span className="flow-form-label">{step.label}</span>
          </div>
        </StepWrapper>
      ))}
    </ProgressWrapper>
  );
};

Progress.defaultProps = {
  ffComp: FFComponent.PROGRESS,
};

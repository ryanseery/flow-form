import * as React from 'react';
import { FlowFormContext, IFlow, ICurrentStep } from '../FlowFormWrapper';

interface IShowFormDataReturn {
  flow: IFlow;
  currentStep: ICurrentStep;
  canStepProceed: boolean;
  data: {};
  error: {};
}

export function showFormData(): IShowFormDataReturn {
  const { flow, currentStep, canStepProceed, data, error } = React.useContext(FlowFormContext);

  return {
    flow,
    currentStep,
    canStepProceed,
    data,
    error,
  };
}

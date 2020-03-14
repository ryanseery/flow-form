import * as React from 'react';
import { FlowFormContext } from './FlowFormWrapper';
import { FFComponent } from './@types/ffFormComponents';

export interface IShowData {
  flowComp: string;
  style?: {};
}

export const ShowData: React.FC<IShowData> = ({ style }) => {
  const { flow, currentStep, canStepProceed, data, error, showError } = React.useContext(FlowFormContext);

  return (
    <pre className="flow-form-show-data" style={style}>
      {JSON.stringify({ flow, currentStep, canStepProceed, data, error, showError }, null, 2)}
    </pre>
  );
};

ShowData.defaultProps = {
  flowComp: FFComponent.SHOW_DATA,
};

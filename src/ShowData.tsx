import * as React from 'react';
import { Context } from './Context';
import { FFComponent } from './FFComponent';

export interface IShowData {
  flowComp: string;
  style?: {};
}

export const ShowData: React.FC<IShowData> = ({ style }) => {
  const { isFlowForm, canProceed, flow, data, error, touched, showError } = React.useContext(Context);

  return (
    <pre className="flow-form-show-data" style={style}>
      {JSON.stringify({ isFlowForm, canProceed, flow, data, error, showError, touched }, null, 2)}
    </pre>
  );
};

ShowData.defaultProps = {
  flowComp: FFComponent.SHOW_DATA,
};

import * as React from 'react';
import { IState, FlowFormContext, FlowFormWrapper } from './FlowFormWrapper';
import { FFComponent } from './@types/ffFormComponents';
import { IStep } from './Step';
import { IShowData } from './ShowData';
import { toCamelCase } from './utils';

interface IForm {
  children: React.ReactNode;
  onSubmit: (data: object) => IState;
  className?: string;
  style?: {};
  reset?: boolean;
}

// TODO why undefined?
function mapHeaders(children: React.ReactNode): React.ReactText[] | number[] | null | undefined {
  return React.Children.map(children, (child, index) => {
    if (!React.isValidElement<IStep>(child)) {
      return null;
    }

    if (child.props.flowComp === FFComponent.STEP) {
      return child.props.title ?? index;
    }

    return null;
  });
}

function isSingleChildAStep(children: React.ReactNode): string[] | number[] {
  if (React.isValidElement<IStep>(children)) {
    return [children.props.title] ?? [0];
  }
  return [0];
}

const FlowFormComponent: React.FC<IForm> = ({ children, onSubmit, className, style, reset }) => {
  const { setFlow, flow, currentStep, canStepProceed, data, clearForm } = React.useContext(FlowFormContext);

  const flowHeaders = React.useMemo(
    () => (Array.isArray(children) ? mapHeaders(children) : isSingleChildAStep(children)),
    [],
  );

  React.useEffect(() => {
    const initialFlow = { key: 0, end: Array.isArray(children) ? children.length - 1 : 0 };
    const initialStep = {
      index: 0,
      id:
        Array.isArray(children) &&
        Array.isArray(flowHeaders) &&
        typeof flowHeaders[0] === 'string' &&
        toCamelCase(flowHeaders[0]),
      title: Array.isArray(children) && Array.isArray(flowHeaders) && flowHeaders[0],
    };

    setFlow({ flow: initialFlow, currentStep: initialStep });
  }, []);

  const isThereShowData = React.useMemo(
    () =>
      Array.isArray(children) &&
      children.filter(child =>
        React.isValidElement<IShowData>(child) && child.props.flowComp === FFComponent.SHOW_DATA ? child : null,
      ),
    [],
  );

  return (
    <form
      className={`flow-form ${className}`}
      style={style}
      onSubmit={e => {
        e.preventDefault();
        onSubmit(data);
      }}
    >
      {Array.isArray(flowHeaders) && <div>{flowHeaders[flow.key]}</div>}

      <fieldset disabled={false} aria-busy={false} style={{ border: `none` }}>
        <>{Array.isArray(children) ? children[flow.key] : children}</>

        {flow.key !== currentStep.id && (
          <button type="button" className="flow-form-back-button">
            Back
          </button>
        )}

        {flow.end !== currentStep.id ? (
          <button type="button" className="flow-form-next-button">
            {canStepProceed ? `Next` : `Can't Proceed`}
          </button>
        ) : (
          <button type="submit" className="flow-form-submit-button">
            Submit
          </button>
        )}

        {reset && (
          <button type="button" className="flow-form-reset" onClick={clearForm}>
            Clear
          </button>
        )}

        {isThereShowData}
      </fieldset>
    </form>
  );
};

interface IFlowFrom extends IForm {
  initialValues?: {};
}

export const FlowForm: React.FC<IFlowFrom> = ({ children, onSubmit, className, style, reset, initialValues }) => (
  <FlowFormWrapper initialValues={initialValues}>
    <FlowFormComponent className={className} style={style} onSubmit={onSubmit} reset={reset}>
      {children}
    </FlowFormComponent>
  </FlowFormWrapper>
);

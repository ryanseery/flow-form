import * as React from 'react';
import { IState, FlowFormContext, FlowFormWrapper } from './FlowFormWrapper';
import { FFComponent } from './@types/ffFormComponents';
import { IStep } from './Step';
import { IShowData } from './ShowData';

interface IForm {
  children: React.ReactNode;
  onSubmit: (data: object) => IState;
  className?: string;
  style?: {};
  reset?: boolean;
}

const FormComponent: React.FC<IForm> = ({ children, onSubmit, className, style, reset }) => {
  const { setFlow, flow, currentStep, data, clearForm } = React.useContext(FlowFormContext);

  // TODO why  undefined?
  function mapHeaders(children: React.ReactNode): React.ReactText[] | number[] | null | undefined {
    return React.Children.map(children, (child: React.ReactNode, index: number) => {
      if (!React.isValidElement<IStep>(child)) {
        return null;
      }

      if (child?.props.flowComp === FFComponent.STEP) {
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

  const flowHeaders = Array.isArray(children) ? mapHeaders(children) : isSingleChildAStep(children);

  const isThereShowData =
    Array.isArray(children) &&
    children.filter(child =>
      React.isValidElement<IShowData>(child) && child.props.flowComp === FFComponent.SHOW_DATA ? child : null,
    );

  React.useEffect(() => {
    const initialFlow = { key: 0, end: Array.isArray(children) ? children.length - 1 : 0 };
    const initialStep = { id: 0, title: Array.isArray(children) && Array.isArray(flowHeaders) && flowHeaders[0] };

    setFlow({ flow: initialFlow, currentStep: initialStep });
  }, []);

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
            Next
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

export const FlowForm: React.FC<IFlowFrom> = ({ children, onSubmit, className, style, reset, initialValues = {} }) => (
  <FlowFormWrapper initialValues={initialValues}>
    <FormComponent onSubmit={onSubmit} className={className} style={style} reset={reset}>
      {children}
    </FormComponent>
  </FlowFormWrapper>
);

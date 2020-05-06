import * as React from 'react';
import { Context, Wrapper, IStepState } from './Context';
import { FFComponent } from './FFComponent';
import { IStep } from './Step';
import { toCamelCase } from './utils';
import { DefaultSubmit, DefaultBtn } from './buttons';
import { Progress } from './Progress';
import { theme } from './theme';

interface IForm {
  ffComp?: string;
  onSubmit: (formData: {}) => void;
  className?: string;
  style?: {};
  showData?: boolean;
  doughNut?: boolean;
}

// TODO clean up with toArray(children).reduce
function handleChildArr(children: React.ReactNode[]): IStepState[] | [] {
  let arr: IStepState[] = [];

  React.Children.map(children, (child, index) => {
    if (React.isValidElement<IStep>(child)) {
      if (child.props.ffComp === FFComponent.STEP) {
        arr.push({
          id: toCamelCase(child.props.name ? child.props.name : child.props.label),
          label: child.props.label,
          index,
        });
      }
    }
  });

  return arr;
}

function handleChildObj(children: React.ReactNode): IStepState[] | [] {
  if (React.isValidElement<IStep>(children)) {
    return [
      {
        id: toCamelCase(children.props.name ? children.props.name : children.props.label),
        label: children.props.label,
        index: 0,
      },
    ];
  } else {
    return [];
  }
}

const Form: React.FC<IForm> = ({ children, onSubmit, className, style, showData, doughNut }) => {
  const {
    isFlowForm,
    canProceed,
    flow,
    formData,
    setForm,
    progressForm,
    revertForm,
    error,
    showError,
    focus,
  } = React.useContext(Context);

  React.useEffect(() => {
    const steps = Array.isArray(children) ? handleChildArr(children) : handleChildObj(children);

    setForm({
      isFlowForm: steps?.length !== 0,
      flow: {
        key: 0,
        end: steps.length > 0 ? steps.length - 1 : 0,
        steps,
        currentStep: steps.length !== 0 ? steps[0] : null,
      },
    });
  }, []);

  showData && console.log({ isFlowForm, canProceed, flow, formData, error, showError, focus });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(formData);
      }}
      className={`flow-form ${className ?? ''}`}
      style={style}
    >
      {isFlowForm && <Progress steps={flow.steps} currentStep={flow.currentStep} doughNut={doughNut} />}
      <fieldset className="flow-form-fieldset" style={{ border: `none` }}>
        <>{isFlowForm ? children?.[flow.key] : children}</>

        {isFlowForm ? (
          <div
            className="flow-form-button-container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
            }}
          >
            {flow.currentStep != null && flow.currentStep?.index > 0 && (
              <DefaultBtn
                onClick={() => revertForm()}
                style={{
                  backgroundColor: `${theme.colors.white}`,
                  color: `${theme.colors.blue}`,
                  marginRight: '2em',
                }}
              >
                Back
              </DefaultBtn>
            )}

            {flow.end !== flow.currentStep?.index ? (
              <DefaultBtn
                disabled={!canProceed}
                onClick={() => progressForm()}
                style={{
                  backgroundColor: `${!canProceed ? theme.colors.grey : theme.colors.blue}`,
                  color: `${theme.colors.white}`,
                }}
              >
                Next
              </DefaultBtn>
            ) : (
              <DefaultSubmit disabled={!canProceed} />
            )}
          </div>
        ) : (
          <DefaultSubmit disabled={!canProceed} />
        )}
      </fieldset>
    </form>
  );
};

Form.defaultProps = {
  ffComp: FFComponent.FORM,
};

interface IFlowForm extends IForm {}

export const FlowForm: React.FC<IFlowForm> = ({ children, onSubmit, className, style, showData, doughNut }) => {
  return (
    <Wrapper>
      <Form onSubmit={onSubmit} className={className} style={style} showData={showData} doughNut={doughNut}>
        {children}
      </Form>
    </Wrapper>
  );
};

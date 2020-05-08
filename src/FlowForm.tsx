import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Context, Wrapper, IStepState } from './Context';
import { FFComponent } from './FFComponent';
import { IStep } from './Step';
import { toCamelCase } from './utils';
import { DefaultSubmit, DefaultBack, DefaultNext } from './buttons';
import { Progress } from './Progress';
import { Global } from './@style';
import { theme2 } from './theme2';

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
    if (children.props.ffComp === FFComponent.STEP) {
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
      <fieldset className="flow-form-fieldset">
        <>{isFlowForm ? children?.[flow.key] : children}</>

        {isFlowForm ? (
          <div className="flow-form-button-container">
            {flow.currentStep != null && flow.currentStep?.index > 0 && <DefaultBack onClick={() => revertForm()} />}

            {flow.end !== flow.currentStep?.index ? (
              <DefaultNext disabled={!canProceed} onClick={() => progressForm()} />
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
    <ThemeProvider theme={theme2}>
      <Wrapper>
        <Global />
        <Form onSubmit={onSubmit} className={className} style={style} showData={showData} doughNut={doughNut}>
          {children}
        </Form>
      </Wrapper>
    </ThemeProvider>
  );
};

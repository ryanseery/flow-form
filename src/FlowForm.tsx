import * as React from 'react';
import { Context, Wrapper, IStepState } from './Context';
import { FFComponent } from './FFComponent';
import { IStep } from './Step';
import { toCamelCase } from './utils';
import { DefaultSubmit, DefaultNext, DefaultBack } from './buttons';
import { Progress } from './Progress';

interface IForm {
  ffComp?: string;
  onSubmit: (formData: {}) => void;
  className?: string;
  style?: {};
  showData?: boolean;
}

// TODO clean up with toArray(children).reduce
function handleChildArr(children: React.ReactNode[]): IStepState[] | [] {
  let arr: IStepState[] = [];

  React.Children.map(children, (child, index) => {
    if (React.isValidElement<IStep>(child)) {
      if (child.props.ffComp === FFComponent.STEP) {
        arr.push({ id: toCamelCase(child.props.label), label: child.props.label, index });
      }
    }
  });

  return arr;
}

function handleChildObj(children: React.ReactNode): IStepState[] | [] {
  if (React.isValidElement<IStep>(children)) {
    return [{ id: toCamelCase(children.props.label), label: children.props.label, index: 0 }];
  } else {
    return [];
  }
}

const Form: React.FC<IForm> = ({ children, onSubmit, className, style, showData }) => {
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
    touched,
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

  showData && console.log({ isFlowForm, canProceed, flow, formData, error, showError, touched });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(formData);
      }}
      className={`flow-form ${className}`}
      style={style}
    >
      <fieldset style={{ border: `none` }}>
        {isFlowForm && <Progress steps={flow.steps} currentStep={flow.currentStep} />}

        <>{isFlowForm ? children?.[flow.key] : children}</>

        {isFlowForm ? (
          <>
            {flow.currentStep != null && flow.currentStep?.index > 0 && <DefaultBack onClick={() => revertForm()} />}

            {flow.end !== flow.currentStep?.index ? (
              <DefaultNext disabled={!canProceed} onClick={() => progressForm()} />
            ) : (
              <DefaultSubmit disabled={!canProceed} />
            )}
          </>
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

export const FlowForm: React.FC<IFlowForm> = ({ children, onSubmit, className, style, showData }) => {
  return (
    <Wrapper>
      <Form onSubmit={onSubmit} className={className} style={style} showData={showData}>
        {children}
      </Form>
    </Wrapper>
  );
};

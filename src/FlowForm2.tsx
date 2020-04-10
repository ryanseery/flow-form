import * as React from 'react';
import { Context, Wrapper, IStepState } from './Context';
import { FFComponent } from './FFComponent';
import { IStep } from './Step2';
import { toCamelCase } from './utils';

interface IForm {
  ffComp?: string;
}

// TODO find out why undefined an null are an expected return type
function handleChildArr(children: React.ReactNode[]): IStepState[] | [] | undefined | null {
  return React.Children.map(children, (child, index) => {
    if (!React.isValidElement<IStep>(child)) {
      return null;
    }

    if (child.props.ffComp === FFComponent.STEP) {
      return { id: toCamelCase(child.props.title), title: child.props.title, index };
    }

    return null;
  });
}

// TODO find out why undefined an null are an expected return type
function handleChildObj(children: React.ReactNode): IStepState[] | [] | undefined | null {
  if (!React.isValidElement<IStep>(children)) {
    return [];
  }

  if (children.props.ffComp === FFComponent.STEP) {
    return [{ id: toCamelCase(children.props.title), title: children.props.title, index: 0 }];
  }

  return [];
}

const Form: React.FC<IForm> = ({ children }) => {
  const { isFlowForm, flow, data, error, setForm } = React.useContext(Context);

  console.log('FLOW: ', { isFlowForm, flow, data, error });

  // *** IF CURRENT STEP CHANGES? DEPENDENCY? ***
  React.useEffect(() => {
    const steps = Array.isArray(children) ? handleChildArr(children) : handleChildObj(children);

    setForm({
      isFlowForm: steps?.length !== 0,
      flow: {
        key: 0,
        end: Array.isArray(children) ? children.length - 1 : 0,
        steps,
        currentStep: Array.isArray(steps) && steps.length !== 0 ? steps[0] : null,
      },
    });
  }, []);

  return (
    <form>
      <fieldset style={{ border: `none` }}>{children}</fieldset>
    </form>
  );
};

Form.defaultProps = {
  ffComp: FFComponent.FORM,
};

interface IFlowForm {}

export const FlowForm2: React.FC<IFlowForm> = ({ children }) => {
  return (
    <Wrapper>
      <Form>{children}</Form>
    </Wrapper>
  );
};

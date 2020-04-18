import * as React from 'react';
import { Context, Wrapper, IStepState } from './Context';
import { FFComponent } from './FFComponent';
import { IStep } from './Step';
import { toCamelCase } from './utils';
import { IShowData } from './ShowData';

interface IForm {
  ffComp?: string;
  onSubmit: (data: {}) => void;
  className?: string;
  style?: {};
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

const Form: React.FC<IForm> = ({ children, onSubmit, className, style }) => {
  const { flow, data, setForm } = React.useContext(Context);

  // console.log('FLOW: ', { isFlowForm, flow, data, error });

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
      onSubmit={e => {
        e.preventDefault();
        onSubmit(data);
      }}
      className={`flow-form ${className}`}
      style={style}
    >
      <fieldset style={{ border: `none` }}>
        <>{Array.isArray(children) ? children[flow.key] : children}</>
      </fieldset>

      {isThereShowData}
    </form>
  );
};

Form.defaultProps = {
  ffComp: FFComponent.FORM,
};

interface IFlowForm extends IForm {}

export const FlowForm2: React.FC<IFlowForm> = ({ children, onSubmit, className, style }) => {
  return (
    <Wrapper>
      <Form onSubmit={onSubmit} className={className} style={style}>
        {children}
      </Form>
    </Wrapper>
  );
};

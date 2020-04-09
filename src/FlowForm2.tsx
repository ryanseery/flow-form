import * as React from 'react';
import { Context, Wrapper } from './Context';
import { FFComponent } from './FFComponent';
import { IStep } from './Step2';

interface IForm {
  ffComp?: string;
}

function handleChildArr(children: React.ReactNode[]) {
  console.log('CHILD IS AN ARRAY: ', children);
  let isFlowForm: boolean = false;

  for (let i = 0; i < children.length; i++) {
    if (React.isValidElement<IStep>(children[i])) {
      console.log('loop: ', children[i]);
      isFlowForm = true;
      break;
    }
  }

  return isFlowForm;
}

function handleChildObj(children: React.ReactNode) {
  console.log('CHILD IS AN OBJECT; ', children);
  if (React.isValidElement<IStep>(children)) {
    return true;
  }
  return false;
}

const Form: React.FC<IForm> = ({ children }) => {
  const { isFlowForm } = React.useContext(Context);

  console.log('FORM: ', { isFlowForm });

  const formCheck = Array.isArray(children) ? handleChildArr(children) : handleChildObj(children);

  console.log('formCheck: ', { children, formCheck });

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

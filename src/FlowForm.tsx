import * as React from 'react';
import { Context, Wrapper } from './Context';
import './style.css';

interface Form extends React.FormHTMLAttributes<HTMLFormElement> {
  showData: boolean;
}

// TODO test to see information that can be gathered from form's ref
const Form: React.FC<Form> = ({ children, showData, ...rest }) => {
  const formRef = React.createRef<HTMLFormElement>();
  const { meta, data, error, showError, focus } = React.useContext(Context);

  showData && console.log({ meta, data, error, showError, focus });

  console.log('formRef: ', formRef);

  return (
    <form
      ref={formRef}
      onSubmit={e => {
        e.preventDefault();
      }}
      className="flow-form"
      {...rest}
    >
      <fieldset className="flow-form-fieldset">{children}</fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};

interface FlowForm extends Form {}
export const FlowForm: React.FC<FlowForm> = ({ children, showData, ...rest }) => {
  return (
    <Wrapper>
      <Form showData={showData} {...rest}>
        {children}
      </Form>
    </Wrapper>
  );
};

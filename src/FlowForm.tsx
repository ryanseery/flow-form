import * as React from 'react';
import { Context, Wrapper } from './Context';
import './style.css';

interface Form extends React.FormHTMLAttributes<HTMLFormElement> {
  showData: boolean;
}

const Form: React.FC<Form> = ({ children, showData, ...rest }) => {
  const { meta, data, error, showError, focus } = React.useContext(Context);

  showData && console.log({ meta, data, error, showError, focus });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
      className="flow-form"
      {...rest}
      ref={console.log}
    >
      <fieldset className="flow-form-fieldset">{children}</fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};

interface FlowForm extends Form {}
export const FlowForm: React.FC<FlowForm> = props => {
  return (
    <Wrapper>
      <Form {...props} />
    </Wrapper>
  );
};

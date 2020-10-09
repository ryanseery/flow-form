import * as React from 'react';
import { Context, Wrapper } from './Context';
import { KeyValue } from './@types/keyTypes';
import './style.css';

interface Form extends React.FormHTMLAttributes<HTMLFormElement> {
  showData: boolean;
  onSubmit: (formData: KeyValue) => void | Promise<void>;
};

const Form: React.FC<Form> = ({ children, onSubmit, showData, ...rest }) => {
  const { meta, data, error, showError, focus } = React.useContext(Context);

  showData && console.log({ meta, data, error, showError, focus });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(data);
      }}
      className="flow-form"
      {...rest}
    >
      {children}
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

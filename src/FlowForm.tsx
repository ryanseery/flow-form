import * as React from 'react';
import { Context, Wrapper } from './Context';
import { KeyValue } from './@types/keyTypes';
import './style.css';
interface Form extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  showData?: boolean;
  onSubmit: (formData: KeyValue) => void | Promise<void>;
}

// TODO checkbox radio don't work as expected
// TODO finish drag and drop
// TODO showError
const Form: React.FC<Form> = ({ children, onSubmit, showData, ...rest }) => {
  const { meta, data, error, showError, focus } = React.useContext(Context);

  showData && console.log({ meta, data, error, showError, focus });

  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(data);
      }}
      className="flow-form"
      data-flow-id="form"
      {...rest}
    >
      {children}
      <button data-flow-id="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export const FlowForm: React.FC<Form> = props => (
  <Wrapper>
    <Form {...props} />
  </Wrapper>
);

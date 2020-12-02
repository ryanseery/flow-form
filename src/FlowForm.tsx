import * as React from 'react';
import { Context, Wrapper } from './Context';
import { KeyValue } from './@types/keyTypes';
import './style.module.css';
interface IForm extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  showData?: boolean;
  onSubmit: (formData: KeyValue) => void | Promise<void>;
}

// TODO checkbox radio don't work as expected
// TODO finish drag and drop
// TODO showError
// TODO steps
const Form: React.FC<IForm> = ({ children, onSubmit, showData, ...rest }) => {
  const { meta, data, error, showError, focus } = React.useContext(Context);

  showData && console.log({ meta, data, error, showError, focus });

  return (
    <form
      data-flow-id="form"
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(data);
      }}
      {...rest}
    >
      {children}
      <button data-flow-id="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export const FlowForm: React.FC<IForm> = props => (
  <Wrapper>
    <Form {...props} />
  </Wrapper>
);

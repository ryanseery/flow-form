import * as React from 'react';
import { Context, Wrapper } from './Context';
import { KeyValue } from './@types/keyTypes';
import './style.module.css';
interface IForm extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit: (formData: KeyValue) => void | Promise<void>;
  showData?: boolean;
  initialValues?: KeyValue;
}

// TODO checkbox radio don't work as expected
// TODO finish drag and drop
// TODO showError
// TODO steps
const Form: React.FC<IForm> = ({ children, onSubmit, showData, ...rest }) => {
  const { meta, data } = React.useContext(Context);

  showData && console.log({ meta, data });

  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(data);
      }}
      {...rest}
    >
      {children}
      <button type="submit">Submit</button>
    </form>
  );
};

export const FlowForm: React.FC<IForm> = ({ initialValues, ...rest }) => (
  <Wrapper initialValues={initialValues}>
    <Form {...rest} />
  </Wrapper>
);

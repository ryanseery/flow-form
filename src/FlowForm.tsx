import * as React from 'react';
import { Context, Wrapper } from './Context';
import { KeyValue } from './@types';
import './styles.css';

interface IForm extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit: (formData: KeyValue) => void | Promise<void>;
  showData?: boolean;
  initialValues?: KeyValue;
}

// TODO showError
// TODO steps
const Form: React.FC<IForm> = ({ children, onSubmit, showData, ...rest }) => {
  const { meta, data } = React.useContext(Context);

  showData && console.log({ meta, data });

  return (
    <form
      {...rest}
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(data);
      }}
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

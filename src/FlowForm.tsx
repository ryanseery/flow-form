import * as React from 'react';
import { Context, Wrapper } from './Context';

type Form = {
  showData: boolean;
};

const Form: React.FC<Form> = ({ children, showData }) => {
  const { meta, data, error, focus } = React.useContext(Context);

  showData && console.log({ meta, data, error, focus });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
      className="flow-form"
    >
      <fieldset
        className="flow-form-fieldset"
        style={{ border: 'none', padding: 'none', margin: 'none' }}
      >
        {children}
      </fieldset>
    </form>
  );
};

interface FlowForm extends Form {}

export const FlowForm: React.FC<FlowForm> = ({ children, showData }) => {
  return (
    <Wrapper>
      <Form showData={showData}>{children}</Form>
    </Wrapper>
  );
};

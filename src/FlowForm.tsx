import * as React from 'react';
import { Context, Wrapper } from './Context';
import { KeyValue } from './@types/keyValue';

interface Form extends React.FormHTMLAttributes<HTMLFormElement> {
  showData: boolean;
}

// TODO test to see information that can be gathered from form's ref
// TODO create submit button
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
    >
      <fieldset
        className="flow-form-fieldset"
        style={{ border: 'none', padding: '0', margin: '0 0 1em 0' }}
      >
        {children}
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};

interface FlowForm extends Form {}
export const FlowForm: React.FC<FlowForm> = ({
  children,
  showData,
  ...rest
}) => {
  return (
    <Wrapper>
      <Form showData={showData} {...rest}>
        {children}
      </Form>
    </Wrapper>
  );
};

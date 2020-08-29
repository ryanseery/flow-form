import * as React from 'react';
import { Context, Wrapper } from './Context';
import './style.css';

interface Form extends React.FormHTMLAttributes<HTMLFormElement> {
  showData: boolean;
}

// TODO test to see information that can be gathered from form's ref
const Form: React.FC<Form> = ({ children, showData, ...rest }) => {
  const ref = React.useRef<HTMLFormElement | null>(null);
  const { meta, data, error, showError, focus } = React.useContext(Context);

  showData && console.log({ meta, data, error, showError, focus });

  React.useEffect(() => {
    console.log('ref: ', ref);
    const test =
      ref.current &&
      Object.entries(ref.current as HTMLFormElement).reduce((acc, [k, v]) => {
        console.log(!isNaN(parseInt(k)) && v);
        return acc;
      }, {});

    console.log('test: ', test);
  }, [ref.current]);

  return (
    <form
      ref={ref}
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
export const FlowForm: React.FC<FlowForm> = props => {
  return (
    <Wrapper>
      <Form {...props} />
    </Wrapper>
  );
};

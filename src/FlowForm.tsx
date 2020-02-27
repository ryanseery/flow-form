import * as React from 'react';
import { IState, FormContext, FormWrapper } from './FormWrapper/FormWrapper';

interface IForm {
  children: React.ReactNode | React.ReactNode[];
  onSubmit: (data: object) => IState;
  className?: string;
  style?: {};
  customSubmit?: boolean;
  reset?: boolean;
}

const Form: React.FC<IForm> = ({ children, onSubmit, className, style, customSubmit, reset }) => {
  const { data, error, clearForm } = React.useContext(FormContext);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30vh' }}>
      <form
        className={`flow-form ${className}`}
        style={style}
        onSubmit={e => {
          e.preventDefault();
          onSubmit(error);
        }}
      >
        <fieldset disabled={false} aria-busy={false} style={{ border: `none` }}>
          {children}
          {!customSubmit && (
            <button type="submit" className="flow-form-submit">
              Submit
            </button>
          )}
          {reset && (
            <button type="button" className="flow-form-reset" onClick={clearForm}>
              Clear
            </button>
          )}
        </fieldset>
      </form>
      <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
    </div>
  );
};

interface IFlowFrom extends IForm {
  initialValues?: {};
}

export const FlowForm: React.FC<IFlowFrom> = ({
  children,
  onSubmit,
  className,
  style,
  customSubmit,
  reset,
  initialValues = {},
}) => (
  <FormWrapper initialValues={initialValues}>
    <Form onSubmit={onSubmit} className={className} style={style} customSubmit={customSubmit} reset={reset}>
      {children}
    </Form>
  </FormWrapper>
);

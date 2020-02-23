import * as React from 'react';
import { IState, FormContext, FormWrapper } from './FormWrapper/FormWrapper';
export { Input } from './Input';

interface IForm {
  children: React.ReactNode | React.ReactNode[];
  onSubmit: (data: object) => IState;
  className?: string;
  customSubmit?: boolean;
  reset?: boolean;
}

const FormComponent: React.FC<IForm> = ({ children, onSubmit, className, customSubmit, reset }) => {
  const { data, error, focus, clearForm } = React.useContext(FormContext);

  return (
    <>
      <form
        className={`flow-form ${className || ''}`}
        style={{ marginRight: '10em' }}
        onSubmit={e => {
          e.preventDefault();
          onSubmit(data);
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
      <pre>{JSON.stringify({ data, error, focus }, null, 2)}</pre>
    </>
  );
};

export const FlowForm: React.FC<IForm> = ({ children, onSubmit, className, customSubmit, reset }) => (
  <FormWrapper>
    <FormComponent onSubmit={onSubmit} className={className} customSubmit={customSubmit} reset={reset}>
      {children}
    </FormComponent>
  </FormWrapper>
);

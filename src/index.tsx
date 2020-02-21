import * as React from 'react';
import { IState, FormContext, FormWrapper } from './FormWrapper';

interface IForm {
  children: React.ReactNode | React.ReactNode[];
  onSubmit: (data: object) => IState;
  className?: string;
}

const FormComponent: React.FC<IForm> = ({ children, onSubmit, className }) => {
  const { data, error, focus, touched, clearForm } = React.useContext(FormContext);

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
          <button type="submit">Submit</button>
          <button type="button" onClick={clearForm}>
            Clear
          </button>
        </fieldset>
      </form>
      <pre>{JSON.stringify({ data, error, focus, touched }, null, 2)}</pre>
    </>
  );
};

export const Form: React.FC<IForm> = ({ children, onSubmit, className }) => (
  <FormWrapper>
    <FormComponent onSubmit={onSubmit} className={className}>
      {children}
    </FormComponent>
  </FormWrapper>
);

export { Input } from './Input';

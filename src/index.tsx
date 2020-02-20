import * as React from 'react';
import { IState, FormContext, FormWrapper } from './FormWrapper';

interface IForm {
  children: React.ReactNode | React.ReactNode[];
  onSubmit: (data: object) => IState;
  className: string;
}

const FormComponent: React.FC<IForm> = ({ children, onSubmit, className }) => {
  const { data, error, blur, touched } = React.useContext(FormContext);

  return (
    <>
      <form
        className={`flow-form ${className}`}
        style={{ display: 'block', marginRight: '10em' }}
        onSubmit={e => {
          e.preventDefault();
          onSubmit(data);
        }}
      >
        <fieldset disabled={false} aria-busy={false}>
          {children}
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <pre>{JSON.stringify({ data, error, blur, touched }, null, 2)}</pre>
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

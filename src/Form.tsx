import * as React from 'react';
import { IState, FormContext, FormWrapper } from './FormWrapper';

interface IForm {
  children: React.ReactNode | React.ReactNode[];
  onSubmit: (data: object) => IState;
  className?: string;
  style?: {};
  customSubmit?: boolean;
  reset?: boolean;
}

const FormComponent: React.FC<IForm> = ({ children, onSubmit, className, style, customSubmit, reset }) => {
  const { data, clearForm } = React.useContext(FormContext);

  return (
    <form
      className={`flow-form ${className}`}
      style={style}
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
  );
};

interface IFlowFrom extends IForm {
  initialValues?: {};
}

export const Form: React.FC<IFlowFrom> = ({
  children,
  onSubmit,
  className,
  style,
  customSubmit,
  reset,
  initialValues = {},
}) => (
  <FormWrapper initialValues={initialValues}>
    <FormComponent onSubmit={onSubmit} className={className} style={style} customSubmit={customSubmit} reset={reset}>
      {children}
    </FormComponent>
  </FormWrapper>
);
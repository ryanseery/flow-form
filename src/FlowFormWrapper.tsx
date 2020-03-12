import * as React from 'react';

export interface IFlow {
  key: number;
  end: number;
}

export interface ICurrentStep {
  id: number | null;
  title: string | null;
}

export interface IState {
  flow: IFlow;
  currentStep: ICurrentStep;
  canStepProceed: boolean;
  data: {};
  error: {};
}

const initialState: IState = {
  flow: {
    key: 0,
    end: 0,
  },
  currentStep: {
    id: null,
    title: null,
  },
  canStepProceed: false,
  data: {},
  error: {},
};

export interface IArgs {
  flow?: IFlow;
  currentStep?: ICurrentStep;
  step?: string;
  id?: string;
  value?: string | boolean | number | object;
  error?: boolean;
}

interface IContextProps extends IState {
  setFlow: (args: any) => void;
  setValue: (args: any) => void;
  updateValue: (args: any) => void;
  updateBlur: (args: any) => void;
  updateFlow: (args: any) => void;
  clearForm: () => void;
}

export const FlowFormContext = React.createContext({} as IContextProps);

enum ACTIONS {
  SET_INITIAL_FLOW = 'SET_INITIAL_FLOW',
  SET_VALUE = 'SET_VALUE',
  UPDATE_VALUE = 'UPDATE_VALUE',
  UPDATE_BLUR = 'UPDATE_BLUR',
  UPDATE_FLOW = 'UPDATE_FLOW',
  CLEAR_FORM = 'CLEAR_FORM',
}

interface IAction extends IArgs {
  type:
    | ACTIONS.SET_INITIAL_FLOW
    | ACTIONS.SET_VALUE
    | ACTIONS.UPDATE_VALUE
    | ACTIONS.UPDATE_BLUR
    | ACTIONS.UPDATE_FLOW
    | ACTIONS.CLEAR_FORM;
}

function reducer(state: IState, action: IAction) {
  const { type, flow, currentStep, step, id, value, error } = action;
  console.log({ type, step, id, value, error });

  switch (type) {
    case ACTIONS.SET_INITIAL_FLOW: {
      if (typeof flow !== 'undefined' && typeof currentStep !== 'undefined') {
        return {
          ...state,
          flow,
          currentStep,
        };
      }
    }
    case ACTIONS.SET_VALUE: {
      const stateCopy: IState = {
        ...state,
      };

      if (typeof id === 'string' && !stateCopy.data[id]) {
        stateCopy.data[id] = '';
        stateCopy.error[id] = false;
      }

      return stateCopy;
    }
    case ACTIONS.UPDATE_VALUE: {
      return state;
    }
    case ACTIONS.UPDATE_BLUR: {
      return state;
    }
    case ACTIONS.UPDATE_FLOW: {
      return state;
    }
    case ACTIONS.CLEAR_FORM:
      return { ...initialState };
    default:
      throw new Error(`Unexpected Action received`);
  }
}

export interface FormWrapper {
  children: React.ReactNode;
  initialValues?: {};
}

export const FlowFormWrapper: React.FC<FormWrapper> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const actions = React.useMemo(() => {
    return {
      setFlow: ({ flow, currentStep }: IArgs) => dispatch({ type: ACTIONS.SET_INITIAL_FLOW, flow, currentStep }),
      setValue: ({ step, id, value, error }: IArgs) => dispatch({ type: ACTIONS.SET_VALUE, step, id, value, error }),
      updateValue: ({ step, id, value, error }: IArgs) =>
        dispatch({ type: ACTIONS.UPDATE_VALUE, step, id, value, error }),
      updateBlur: ({ step, id, error }: IArgs) => dispatch({ type: ACTIONS.UPDATE_BLUR, step, id, error }),
      updateFlow: ({ step, id, value, error }: IArgs) =>
        dispatch({ type: ACTIONS.SET_INITIAL_FLOW, step, id, value, error }),
      clearForm: () => dispatch({ type: ACTIONS.CLEAR_FORM }),
    };
  }, []);

  return (
    <FlowFormContext.Provider
      value={{
        ...state,
        ...actions,
      }}
    >
      {children}
    </FlowFormContext.Provider>
  );
};

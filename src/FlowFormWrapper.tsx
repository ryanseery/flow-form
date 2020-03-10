import * as React from 'react';

export interface IFlow {
  key: number;
  end: number;
}

export interface ICurrentChild {
  id: string | null;
  title: string | null;
}

export interface IState {
  flow: IFlow;
  currentChild: ICurrentChild;
  canProceed: boolean;
  data: {};
  error: {};
}

const initialState: IState = {
  flow: {
    key: 0,
    end: 0,
  },
  currentChild: {
    id: null,
    title: null,
  },
  canProceed: false,
  data: {},
  error: {},
};

export interface IArgs {
  step?: string;
  id?: string;
  value?: string | boolean | number | object;
  error?: boolean;
}

interface IContextProps extends IState {
  setFlow: (args: any) => void;
  updateFlow: (args: any) => void;
  updateCurrentChild: (args: any) => void;
  updateBlur: (args: any) => void;
  clearForm: () => void;
}

export const FlowFormContext = React.createContext({} as IContextProps);

enum ACTIONS {
  SET_INITIAL_FLOW = 'SET_INITIAL_FLOW',
  UPDATE_FLOW = 'UPDATE_FLOW',
  UPDATE_CURRENT_CHILD = 'UPDATE_CURRENT_CHILD',
  UPDATE_VALUE = 'UPDATE_VALUE',
  UPDATE_BLUR = 'UPDATE_BLUR',
  CLEAR_FORM = 'CLEAR_FORM',
}

interface IAction extends IArgs {
  type:
    | ACTIONS.SET_INITIAL_FLOW
    | ACTIONS.UPDATE_FLOW
    | ACTIONS.UPDATE_CURRENT_CHILD
    | ACTIONS.UPDATE_VALUE
    | ACTIONS.UPDATE_BLUR
    | ACTIONS.CLEAR_FORM;
}

function reducer(state: IState, action: IAction) {
  const { type, step, id, value, error } = action;
  console.log({ type, step, id, value, error });

  switch (type) {
    case ACTIONS.SET_INITIAL_FLOW: {
      console.log('SET_INITIAL_FLOW');
      const stateCopy: IState = {
        ...state,
      };
      return stateCopy;
    }
    case ACTIONS.UPDATE_FLOW: {
      console.log('UPDATE_FLOW');
    }
    case ACTIONS.UPDATE_CURRENT_CHILD: {
      console.log('UPDATE_CURRENT_CHILD');
    }
    case ACTIONS.UPDATE_VALUE: {
      console.log('UPDATE_VALUE');
    }
    case ACTIONS.CLEAR_FORM:
      return { ...initialState };
    default:
      console.error('State Reducer Error');
      return state;
  }
}

export interface FormWrapper {
  children: React.ReactNode;
  initialValues?: {};
}

export const FormWrapper: React.FC<FormWrapper> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const actions = React.useMemo(() => {
    return {
      setFlow: ({ step, id, value, error }: IArgs) =>
        dispatch({ type: ACTIONS.SET_INITIAL_FLOW, step, id, value, error }),
      updateFlow: ({ step, id, value, error }: IArgs) =>
        dispatch({ type: ACTIONS.SET_INITIAL_FLOW, step, id, value, error }),
      updateCurrentChild: ({ step }: IArgs) => dispatch({ type: ACTIONS.UPDATE_CURRENT_CHILD, step }),
      updateValue: ({ step, id, value, error }: IArgs) =>
        dispatch({ type: ACTIONS.UPDATE_VALUE, step, id, value, error }),
      updateBlur: ({ step, id, error }: IArgs) => dispatch({ type: ACTIONS.UPDATE_BLUR, step, id, error }),
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

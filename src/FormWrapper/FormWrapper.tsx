import * as React from 'react';
import { assignError } from './assignError';

export interface IState {
  data: {};
  error: {};
  focus: {};
}

const formData: IState = {
  data: {},
  error: {},
  focus: {},
};

export interface IArgs {
  id?: string;
  value?: string | boolean | number | object;
  error?: boolean;
  focus?: boolean;
}

interface IContextProps extends IState {
  setValue: (args: IArgs) => void;
  updateValue: (args: IArgs) => void;
  updateFocus: (args: IArgs) => void;
  clearForm: () => void;
}

export const FormContext = React.createContext({} as IContextProps);

enum ACTIONS {
  SET_DEFAULT_VALUE = 'SET_DEFAULT_VALUE',
  UPDATE_VALUE = 'UPDATE_VALUE',
  UPDATE_FOCUS = 'UPDATE_FOCUS',
  CLEAR_FORM = 'CLEAR_FORM',
}

interface IAction extends IArgs {
  type: ACTIONS.SET_DEFAULT_VALUE | ACTIONS.UPDATE_VALUE | ACTIONS.UPDATE_FOCUS | ACTIONS.CLEAR_FORM;
}

function reducer(state: IState, action: IAction) {
  const { type, id, value, error } = action;

  switch (type) {
    case ACTIONS.SET_DEFAULT_VALUE: {
      // make state copy
      const stateCopy: IState = {
        ...state,
      };

      // update state copy
      // don't mutate state yet
      if (typeof id === 'string' && !stateCopy.data[id]) {
        stateCopy.data[id] = '';
        stateCopy.error[id] = error;
        stateCopy.focus[id] = false;
      }

      // return copy
      return stateCopy;
    }
    case ACTIONS.UPDATE_VALUE: {
      if (typeof id === 'string') {
        return {
          ...state,
          data: {
            ...state.data,
            [id]: value,
          },
        };
      }
    }
    case ACTIONS.UPDATE_FOCUS: {
      if (typeof id === 'string') {
        return {
          ...state,
          focus: {
            ...state.focus,
            [id]: !state.focus[id],
          },
          error: {
            ...state.error,
            [id]: assignError(value),
          },
        };
      }
    }
    case ACTIONS.CLEAR_FORM:
      return { ...formData };
    default:
      console.error('State Reducer Error');
      return state;
  }
}

export interface FormWrapper {
  children: React.ReactNode;
}

export const FormWrapper: React.FC<FormWrapper> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, formData);

  const actions = React.useMemo(() => {
    return {
      setValue: ({ id, value, error }: IArgs) => dispatch({ type: ACTIONS.SET_DEFAULT_VALUE, id, value, error }),
      updateValue: ({ id, value, error }: IArgs) => dispatch({ type: ACTIONS.UPDATE_VALUE, id, value, error }),
      updateFocus: ({ id }: IArgs) => dispatch({ type: ACTIONS.UPDATE_FOCUS, id }),
      clearForm: () => dispatch({ type: ACTIONS.CLEAR_FORM }),
    };
  }, []);

  return (
    <FormContext.Provider
      value={{
        ...state,
        ...actions,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

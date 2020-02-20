import * as React from 'react';

export interface IState {
  data: {};
  error: {};
  blur: {};
  touched: {};
}

export interface IArgs {
  id?: string;
  value?: string | boolean | number | object;
  error?: boolean;
  blur?: boolean;
  touched?: boolean;
}

interface IContextProps extends IState {
  setValue: (args: IArgs) => void;
  updateValue: (args: IArgs) => void;
  updateBlur: (args: IArgs) => void;
}

export const FormContext = React.createContext({} as IContextProps);

enum ACTIONS {
  SET_DEFAULT_VALUE = 'SET_DEFAULT_VALUE',
  UPDATE_VALUE = 'UPDATE_VALUE',
  UPDATE_BLUR = 'UPDATE_BLUR',
}

interface IAction extends IArgs {
  type: ACTIONS.SET_DEFAULT_VALUE | ACTIONS.UPDATE_VALUE | ACTIONS.UPDATE_BLUR;
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
          error: {
            ...state.error,
            [id]: error,
          },
        };
      }
    }
    case ACTIONS.UPDATE_BLUR: {
      if (typeof id === 'string') {
        return {
          ...state,
          blur: {
            ...state.blur,
            [id]: !state.blur[id],
          },
        };
      }
    }
    default:
      console.error('State Reducer Error');
      return state;
  }
}

const formData: IState = {
  data: {},
  error: {},
  blur: {},
  touched: {},
};

export interface FormWrapper {
  children: React.ReactNode;
}

export const FormWrapper: React.FC<FormWrapper> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, formData);

  return (
    <FormContext.Provider
      value={{
        ...state,
        setValue: ({ id, value, error }) => dispatch({ type: ACTIONS.SET_DEFAULT_VALUE, id, value, error }),
        updateValue: ({ id, value, error }) => dispatch({ type: ACTIONS.UPDATE_VALUE, id, value, error }),
        updateBlur: ({ id }) => dispatch({ type: ACTIONS.UPDATE_BLUR, id }),
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

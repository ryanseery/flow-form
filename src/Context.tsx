import * as React from 'react';

interface IState {
  isFlowForm: boolean;
}

const initialState: IState = {
  isFlowForm: false,
};

interface IContext extends IState {
  setForm: (isFlowForm: boolean) => void;
}

export const Context = React.createContext({} as IContext);

enum ACTIONS {
  SET_FORM = 'SET_FORM',
}

interface SetForm {
  type: ACTIONS.SET_FORM;
  isFlowForm: boolean;
}
const setForm = (isFlowForm: boolean): SetForm => ({
  type: ACTIONS.SET_FORM,
  isFlowForm,
});

type Action = SetForm;

function reducer(state: IState, action: Action): IState {
  console.log({ action });

  switch (action.type) {
    case ACTIONS.SET_FORM: {
      const { isFlowForm } = action;
      return { ...state, isFlowForm };
    }
    default:
      throw new Error(`Context Reducer Received Unrecognized Action!`);
  }
}

interface IWrapper {}

export const Wrapper: React.FC<IWrapper> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const actions = React.useMemo(() => {
    return {
      setForm: (isFlowForm: boolean) => dispatch(setForm(isFlowForm)),
    };
  }, []);

  return <Context.Provider value={{ ...state, ...actions }}>{children}</Context.Provider>;
};

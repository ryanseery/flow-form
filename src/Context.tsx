import * as React from 'react';

export interface IStepState {
  id: string;
  title: string;
  index: number;
}

interface IFlow {
  key: number;
  end: number;
  steps: IStepState[] | [] | null | undefined;
}

interface IState {
  isFlowForm: boolean;
  flow: IFlow;
}

const initialState: IState = {
  isFlowForm: false,
  flow: {
    key: 0,
    end: 0,
    steps: [],
  },
};

type SetFormArgs = {
  isFlowForm: boolean;
  flow: IFlow;
};

interface IContext extends IState {
  setForm: ({ isFlowForm, flow }: SetFormArgs) => void;
}

export const Context = React.createContext({} as IContext);

enum ACTIONS {
  SET_FORM = 'SET_FORM',
}

interface SetForm extends SetFormArgs {
  type: ACTIONS.SET_FORM;
}
const setForm = ({ isFlowForm, flow }: SetFormArgs): SetForm => ({
  type: ACTIONS.SET_FORM,
  isFlowForm,
  flow,
});

type Action = SetForm;

function reducer(state: IState, action: Action): IState {
  console.log({ action });

  switch (action.type) {
    case ACTIONS.SET_FORM: {
      const { isFlowForm, flow } = action;
      return { ...state, isFlowForm, flow };
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
      setForm: ({ isFlowForm, flow }: SetFormArgs) => dispatch(setForm({ isFlowForm, flow })),
    };
  }, []);

  return <Context.Provider value={{ ...state, ...actions }}>{children}</Context.Provider>;
};

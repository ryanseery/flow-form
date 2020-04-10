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
  currentStep: IStepState | null | undefined;
}

interface IState {
  isFlowForm: boolean;
  flow: IFlow;
  data: {};
  error: {};
  showError: {};
}

const initialState: IState = {
  isFlowForm: false,
  flow: {
    key: 0,
    end: 0,
    steps: [],
    currentStep: null,
  },
  data: {},
  error: {},
  showError: {},
};

type SetFormArgs = {
  isFlowForm: boolean;
  flow: IFlow;
};

type ValueArgs = {
  step: string | null;
  id: string;
  value: string | boolean | number | object;
  error: boolean;
};

interface IContext extends IState {
  setForm: ({ isFlowForm, flow }: SetFormArgs) => void;
  setInput: ({ step, id, value, error }: ValueArgs) => void;
}

export const Context = React.createContext({} as IContext);

enum ACTIONS {
  SET_FORM = 'SET_FORM',
  SET_INPUT = 'SET_INPUT',
}

interface SetForm extends SetFormArgs {
  type: ACTIONS.SET_FORM;
}
const setForm = ({ isFlowForm, flow }: SetFormArgs): SetForm => ({
  type: ACTIONS.SET_FORM,
  isFlowForm,
  flow,
});

interface SetInput extends ValueArgs {
  type: ACTIONS.SET_INPUT;
}
const setInput = ({ step, id, value, error }: ValueArgs): SetInput => ({
  type: ACTIONS.SET_INPUT,
  step,
  id,
  value,
  error,
});

type Action = SetForm | SetInput;

function reducer(state: IState, action: Action): IState {
  console.log({ state, action });

  switch (action.type) {
    case ACTIONS.SET_FORM: {
      const { isFlowForm, flow } = action;
      return { ...state, isFlowForm, flow };
    }
    case ACTIONS.SET_INPUT: {
      const { step, id, value, error } = action;
      if (step == null) {
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
      } else if (step !== null) {
        return {
          ...state,
          data: {
            ...state.data,
            [step]: {
              ...state.data[step],
              [id]: value,
            },
          },
          error: {
            ...state.error,
            [step]: {
              ...state.error[step],
              [id]: error,
            },
          },
        };
      }
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
      setInput: ({ step, id, value, error }: ValueArgs) => dispatch(setInput({ step, id, value, error })),
    };
  }, []);

  return <Context.Provider value={{ ...state, ...actions }}>{children}</Context.Provider>;
};

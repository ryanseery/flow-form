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

type SideEffectArgs = {
  step: string | null;
  id: string;
  showError: boolean;
};

interface IContext extends IState {
  setForm: ({ isFlowForm, flow }: SetFormArgs) => void;
  setInput: ({ step, id, value, error }: ValueArgs) => void;
  updateInput: ({ step, id, value, error }: ValueArgs) => void;
  updateBlur: ({ step, id, showError }: SideEffectArgs) => void;
}

export const Context = React.createContext({} as IContext);

enum ACTIONS {
  SET_FORM = 'SET_FORM',
  SET_INPUT = 'SET_INPUT',
  UPDATE_INPUT = 'UPDATE_INPUT',
  UPDATE_BLUR = 'UPDATE_BLUR',
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

interface UpdateInput extends ValueArgs {
  type: ACTIONS.UPDATE_INPUT;
}
const updateInput = ({ step, id, value, error }: ValueArgs): UpdateInput => ({
  type: ACTIONS.UPDATE_INPUT,
  step,
  id,
  value,
  error,
});

interface UpdateBlur extends SideEffectArgs {
  type: ACTIONS.UPDATE_BLUR;
}
const updateBlur = ({ step, id, showError }: SideEffectArgs): UpdateBlur => ({
  type: ACTIONS.UPDATE_BLUR,
  step,
  id,
  showError,
});

type Action = SetForm | SetInput | UpdateInput | UpdateBlur;

function reducer(state: IState, action: Action): IState {
  console.log('REDUCER: ', { state, action });

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
      } else if (step != null) {
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
    case ACTIONS.UPDATE_INPUT: {
      const { step, id, value } = action;
      if (step == null) {
        return {
          ...state,
          data: {
            ...state.data,
            [id]: value,
          },
        };
      } else if (step != null) {
        return {
          ...state,
          data: {
            ...state.data,
            [step]: {
              ...state.data[step],
              [id]: value,
            },
          },
        };
      }
    }
    case ACTIONS.UPDATE_BLUR: {
      const { step, id, showError } = action;
      if (step == null) {
        return {
          ...state,
          showError: {
            ...state.showError,
            [id]: [showError],
          },
        };
      } else if (step != null) {
        return {
          ...state,
          showError: {
            ...state.showError,
            [step]: {
              ...state.showError,
              [id]: showError,
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
      updateInput: ({ step, id, value, error }: ValueArgs) => dispatch(updateInput({ step, id, value, error })),
      updateBlur: ({ step, id, showError }: SideEffectArgs) => dispatch(updateBlur({ step, id, showError })),
    };
  }, []);

  return <Context.Provider value={{ ...state, ...actions }}>{children}</Context.Provider>;
};

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
  canProceed: boolean;
  data: {};
  error: {};
  showError: {};
  touched: {};
}

const initialState: IState = {
  isFlowForm: false,
  canProceed: false,
  flow: {
    key: 0,
    end: 0,
    currentStep: null,
    steps: [],
  },
  data: {},
  error: {},
  showError: {},
  touched: {},
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

type BlurArgs = {
  step: string | null;
  id: string;
  showError: boolean;
};

type FocusArgs = {
  step: string | null;
  id: string;
};

interface IContext extends IState {
  setForm: ({ isFlowForm, flow }: SetFormArgs) => void;
  setInput: ({ step, id, value, error }: ValueArgs) => void;
  updateInput: ({ step, id, value, error }: ValueArgs) => void;
  updateBlur: ({ step, id, showError }: BlurArgs) => void;
  updateFocus: ({ step, id }: FocusArgs) => void;
}

export const Context = React.createContext({} as IContext);

enum ACTIONS {
  SET_FORM = 'SET_FORM',
  SET_INPUT = 'SET_INPUT',
  UPDATE_INPUT = 'UPDATE_INPUT',
  UPDATE_BLUR = 'UPDATE_BLUR',
  UPDATE_FOCUS = 'UPDATE_FOCUS',
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

interface UpdateBlur extends BlurArgs {
  type: ACTIONS.UPDATE_BLUR;
}
const updateBlur = ({ step, id, showError }: BlurArgs): UpdateBlur => ({
  type: ACTIONS.UPDATE_BLUR,
  step,
  id,
  showError,
});

interface UpdateFocus extends FocusArgs {
  type: ACTIONS.UPDATE_FOCUS;
}
const updateFocus = ({ step, id }: FocusArgs): UpdateFocus => ({
  type: ACTIONS.UPDATE_FOCUS,
  step,
  id,
});

type Action = SetForm | SetInput | UpdateInput | UpdateBlur | UpdateFocus;

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
          showError: {
            ...state.showError,
            [id]: false,
          },
          touched: {
            ...state.touched,
            [id]: false,
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
          showError: {
            ...state.showError,
            [step]: {
              ...state.showError[step],
              [id]: false,
            },
          },
          touched: {
            ...state.touched,
            [step]: {
              ...state.touched[step],
              [id]: false,
            },
          },
        };
      } else {
        return state;
      }
    }
    case ACTIONS.UPDATE_INPUT: {
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
          showError: {
            ...state.showError,
            [id]: error,
          },
        };
      } else if (step != null) {
        return {
          ...state,
          canProceed: Object.values({ ...state.error, [id]: error }).every(v => v === false),
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
          showError: {
            ...state.showError,
            [step]: {
              ...state.showError[step],
              [id]: error,
            },
          },
        };
      } else {
        return state;
      }
    }
    case ACTIONS.UPDATE_BLUR: {
      const { step, id, showError } = action;
      if (step == null) {
        return {
          ...state,
          showError: {
            ...state.showError,
            [id]: showError,
          },
          touched: {
            ...state.touched,
            [id]: false,
          },
        };
      } else if (step != null) {
        return {
          ...state,
          canProceed: Object.values(state.error).every(v => v === false),
          showError: {
            ...state.showError,
            [step]: {
              ...state.showError[step],
              [id]: showError,
            },
          },
          touched: {
            ...state.touched,
            [step]: {
              ...state.touched[step],
              [id]: false,
            },
          },
        };
      } else {
        return state;
      }
    }
    case ACTIONS.UPDATE_FOCUS: {
      const { step, id } = action;
      if (step == null) {
        return {
          ...state,
          touched: {
            ...state.touched,
            [id]: true,
          },
        };
      } else if (step != null) {
        return {
          ...state,
          touched: {
            ...state.touched,
            [step]: {
              ...state.touched[step],
              [id]: true,
            },
          },
        };
      } else {
        return state;
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
      updateBlur: ({ step, id, showError }: BlurArgs) => dispatch(updateBlur({ step, id, showError })),
      updateFocus: ({ step, id }: FocusArgs) => dispatch(updateFocus({ step, id })),
    };
  }, []);

  return <Context.Provider value={{ ...state, ...actions }}>{children}</Context.Provider>;
};

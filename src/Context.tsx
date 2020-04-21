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
  setField: ({ step, id, value, error }: ValueArgs) => void;
  updateField: ({ step, id, value, error }: ValueArgs) => void;
  updateBlur: ({ step, id, showError }: BlurArgs) => void;
  updateFocus: ({ step, id }: FocusArgs) => void;
  updateForm: () => void;
  goBack: () => void;
}

export const Context = React.createContext({} as IContext);

enum ACTIONS {
  SET_FORM = 'SET_FORM',
  SET_FIELD = 'SET_FIELD',
  UPDATE_FIELD = 'UPDATE_FIELD',
  UPDATE_BLUR = 'UPDATE_BLUR',
  UPDATE_FOCUS = 'UPDATE_FOCUS',
  UPDATE_FORM = 'UPDATE_FORM',
  GO_BACK = 'GO_BACK',
}

interface SetForm extends SetFormArgs {
  type: ACTIONS.SET_FORM;
}
const setForm = ({ isFlowForm, flow }: SetFormArgs): SetForm => ({
  type: ACTIONS.SET_FORM,
  isFlowForm,
  flow,
});

interface SetField extends ValueArgs {
  type: ACTIONS.SET_FIELD;
}
const setInput = ({ step, id, value, error }: ValueArgs): SetField => ({
  type: ACTIONS.SET_FIELD,
  step,
  id,
  value,
  error,
});

interface UpdateField extends ValueArgs {
  type: ACTIONS.UPDATE_FIELD;
}
const updateInput = ({ step, id, value, error }: ValueArgs): UpdateField => ({
  type: ACTIONS.UPDATE_FIELD,
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

interface UpdateForm {
  type: ACTIONS.UPDATE_FORM;
}
const updateForm = (): UpdateForm => ({
  type: ACTIONS.UPDATE_FORM,
});

interface GoBack {
  type: ACTIONS.GO_BACK;
}
const goBack = (): GoBack => ({
  type: ACTIONS.GO_BACK,
});

type Action = SetForm | SetField | UpdateField | UpdateBlur | UpdateFocus | UpdateForm | GoBack;

function reducer(state: IState, action: Action): IState {
  switch (action.type) {
    case ACTIONS.SET_FORM: {
      const { isFlowForm, flow } = action;
      return { ...state, isFlowForm, flow };
    }
    case ACTIONS.SET_FIELD: {
      const { step, id, value, error } = action;
      if (step == null && !state.data[id]) {
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
      } else if (step != null && !state.data?.[step]?.[id]) {
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
    case ACTIONS.UPDATE_FIELD: {
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
          canProceed: Object.entries({ ...state.error[step], [id]: error }).every(([_, v]) => v === false),
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
          error: {
            ...state.error,
            [id]: showError,
          },
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
          canProceed: Object.entries({ ...state.error[step], [id]: showError }).every(([_, v]) => v === false),
          error: {
            ...state.error,
            [step]: {
              ...state.error[step],
              [id]: showError,
            },
          },
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
    case ACTIONS.UPDATE_FORM: {
      const key = state.flow.key + 1;
      return {
        ...state,
        flow: {
          ...state.flow,
          key,
          currentStep: state?.flow?.steps?.[key],
        },
      };
    }
    case ACTIONS.GO_BACK: {
      const key = state.flow.key - 1;
      return {
        ...state,
        flow: {
          ...state.flow,
          key,
          currentStep: state?.flow?.steps?.[key],
        },
      };
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
      setField: ({ step, id, value, error }: ValueArgs) => dispatch(setInput({ step, id, value, error })),
      updateField: ({ step, id, value, error }: ValueArgs) => dispatch(updateInput({ step, id, value, error })),
      updateBlur: ({ step, id, showError }: BlurArgs) => dispatch(updateBlur({ step, id, showError })),
      updateFocus: ({ step, id }: FocusArgs) => dispatch(updateFocus({ step, id })),
      updateForm: () => dispatch(updateForm()),
      goBack: () => dispatch(goBack()),
    };
  }, []);

  return <Context.Provider value={{ ...state, ...actions }}>{children}</Context.Provider>;
};

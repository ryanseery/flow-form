import * as React from 'react';
import { KeyValue, KeyBool } from './@types/keys';

interface StepState {
  id: string;
  label: string;
  index: number;
}

interface Flow {
  key: number;
  end: number;
  steps: StepState[] | null;
  currentStep: StepState | null;
  canProceed: boolean;
  completedSteps: StepState[] | null;
}

export interface Meta {
  touched: KeyBool;
  focus: KeyBool;
  error: KeyBool;
  isFlowForm: boolean;
  flow: Flow;
}

interface State {
  meta: Meta;
  data: KeyValue;
}

const initialState: State = {
  meta: {
    touched: {},
    focus: {},
    error: {},
    isFlowForm: false,
    flow: {
      key: 0,
      end: 0,
      currentStep: null,
      steps: null,
      canProceed: false,
      completedSteps: null,
    },
  },
  data: {},
};

interface FormArgs {
  isFlowForm: boolean;
  flow: Flow;
}

interface Args {
  id: string;
  value: string | boolean | number;
  error: boolean;
}

interface FormContext extends State {
  registerForm: (payload: FormArgs) => void;
  registerField: (payload: Args) => void;
  updateField: (payload: Args) => void;
  handleFocus: (payload: Args) => void;
  handleBlur: (payload: Args) => void;
}

export const Context = React.createContext({} as FormContext);

enum ACTION {
  REGISTER_FORM = 'REGISTER_FORM',
  REGISTER_FIELD = 'REGISTER_FIELD',
  UPDATE_FIELD = 'UPDATE_FIELD',
  HANDLE_FOCUS = 'HANDLE_FOCUS',
  HANDLE_BLUR = 'HANDLE_BLUR',
}

interface RegisterForm {
  type: ACTION.REGISTER_FORM;
  payload: FormArgs;
}
const registerForm = (payload: FormArgs): RegisterForm => ({
  type: ACTION.REGISTER_FORM,
  payload,
});

interface RegisterField {
  type: ACTION.REGISTER_FIELD;
  payload: Args;
}
const registerField = (payload: Args): RegisterField => ({
  type: ACTION.REGISTER_FIELD,
  payload,
});

interface UpdateField {
  type: ACTION.UPDATE_FIELD;
  payload: Args;
}
const updateField = (payload: Args): UpdateField => ({
  type: ACTION.UPDATE_FIELD,
  payload,
});

interface HandleFocus {
  type: ACTION.HANDLE_FOCUS;
  payload: {
    id: string;
  };
}
const handleFocus = (payload: { id: string }): HandleFocus => ({
  type: ACTION.HANDLE_FOCUS,
  payload,
});

interface HandleBlur {
  type: ACTION.HANDLE_BLUR;
  payload: {
    id: string;
  };
}
const handleBlur = (payload: { id: string }): HandleBlur => ({
  type: ACTION.HANDLE_BLUR,
  payload,
});

type Actions = RegisterForm | RegisterField | UpdateField | HandleFocus | HandleBlur;

function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case ACTION.REGISTER_FORM: {
      return state;
    }
    case ACTION.REGISTER_FIELD: {
      const {
        payload: { id, error },
      } = action;

      if (!state.data[id]) {
        return {
          ...state,
          meta: {
            ...state.meta,
            touched: {
              ...state.meta.touched,
              [id]: false,
            },
            focus: {
              ...state.meta.focus,
              [id]: false,
            },
            error: {
              ...state.meta.error,
              [id]: error,
            },
          },
          data: {
            ...state.data,
            [id]: '',
          },
        };
      }
      return state;
    }
    case ACTION.UPDATE_FIELD: {
      const {
        payload: { id, value, error },
      } = action;

      return {
        ...state,
        meta: {
          ...state.meta,
          error: {
            ...state.meta.error,
            [id]: error,
          },
        },
        data: {
          ...state.data,
          [id]: value,
        },
      };
    }
    case ACTION.HANDLE_FOCUS: {
      const {
        payload: { id },
      } = action;

      return {
        ...state,
        meta: {
          ...state.meta,
          touched: {
            ...state.meta.touched,
            [id]: true,
          },
          focus: {
            ...state.meta.focus,
            [id]: true,
          },
        },
      };
    }
    case ACTION.HANDLE_BLUR: {
      const {
        payload: { id },
      } = action;

      return {
        ...state,
        meta: {
          ...state.meta,
          focus: {
            ...state.meta.focus,
            [id]: false,
          },
        },
      };
    }
    default: {
      throw new Error(`Context Reducer Received Unrecognized Action!`);
    }
  }
}

interface IWrapper {
  initialValues?: KeyValue;
}
export const Wrapper: React.FC<IWrapper> = ({ children, initialValues = {} }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    data: { ...initialState.data, ...initialValues },
  });

  const actions = React.useMemo(() => {
    return {
      registerForm: (payload: FormArgs) => dispatch(registerForm(payload)),
      registerField: (payload: Args) => dispatch(registerField(payload)),
      updateField: (payload: Args) => dispatch(updateField(payload)),
      handleFocus: (payload: Args) => dispatch(handleFocus(payload)),
      handleBlur: (payload: Args) => dispatch(handleBlur(payload)),
    };
  }, []);

  return <Context.Provider value={{ ...state, ...actions }}>{children}</Context.Provider>;
};

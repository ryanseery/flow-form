import * as React from 'react';
import { KeyValue, KeyValBool } from './@types/keyTypes';

type Meta = {
  touched: KeyValBool;
  completedSteps: StepState[] | null;
};

type StepState = {
  id: string;
  label: string;
  index: number;
};

type Flow = {
  key: number;
  end: number;
  steps: StepState[] | null;
  currentStep: StepState | null;
};

type State = {
  isFlowForm: boolean;
  canProceed: boolean;
  meta: Meta;
  flow: Flow;
  data: KeyValue;
  error: KeyValBool;
  showError: KeyValBool;
  focus: KeyValBool;
};

const initialState: State = {
  isFlowForm: false,
  canProceed: false,
  meta: {
    touched: {},
    completedSteps: null,
  },
  flow: {
    key: 0,
    end: 0,
    currentStep: null,
    steps: null,
  },
  data: {},
  error: {},
  showError: {},
  focus: {},
};

type FormArgs = {
  isFlowForm: boolean;
  flow: Flow;
};

type ID = {
  id: string;
};

interface Args extends ID {
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

type RegisterForm = {
  type: ACTION.REGISTER_FORM;
  payload: FormArgs;
};
const registerForm = (payload: FormArgs): RegisterForm => ({
  type: ACTION.REGISTER_FORM,
  payload,
});

type RegisterField = {
  type: ACTION.REGISTER_FIELD;
  payload: Args;
};
const registerField = (payload: Args): RegisterField => ({
  type: ACTION.REGISTER_FIELD,
  payload,
});

type UpdateField = {
  type: ACTION.UPDATE_FIELD;
  payload: Args;
};
const updateField = (payload: Args): UpdateField => ({
  type: ACTION.UPDATE_FIELD,
  payload,
});

type HandleFocus = {
  type: ACTION.HANDLE_FOCUS;
  payload: {
    id: string;
  };
};
const handleFocus = (payload: { id: string }): HandleFocus => ({
  type: ACTION.HANDLE_FOCUS,
  payload,
});

type HandleBlur = {
  type: ACTION.HANDLE_BLUR;
  payload: {
    id: string;
  };
};
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
          },
          data: {
            ...state.data,
            [id]: '',
          },
          error: {
            ...state.error,
            [id]: error,
          },
          showError: {
            ...state.showError,
            [id]: false,
          },
          focus: {
            ...state.focus,
            [id]: false,
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
        },
        focus: {
          ...state.focus,
          [id]: true,
        },
      };
    }
    case ACTION.HANDLE_BLUR: {
      const {
        payload: { id },
      } = action;

      return {
        ...state,
        focus: {
          ...state.focus,
          [id]: false,
        },
      };
    }
    default:
      throw new Error(`Context Reducer Received Unrecognized Action!`);
  }
}

type Props = {};
export const Wrapper: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

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

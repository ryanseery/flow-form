import * as React from 'react';

export interface IFlow {
  key: number;
  end: number;
}

export interface ICurrentStep {
  index: number | null;
  id: string | number | null;
  title: string | null;
}

export interface IState {
  flow: IFlow;
  currentStep: ICurrentStep;
  data: {};
  error: {};
  showError: {};
}

const initialState: IState = {
  flow: {
    key: 0,
    end: 0,
  },
  currentStep: {
    index: null,
    id: null,
    title: null,
  },
  data: {},
  error: {},
  showError: {},
};

interface IContextProps extends IState {
  setFlow: (args: any) => void;
  setValue: (args: any) => void;
  updateValue: (args: any) => void;
  updateBlur: (args: any) => void;
  updateFlow: (args: any) => void;
  clearForm: () => void;
}

export const FlowFormContext = React.createContext({} as IContextProps);

enum ACTIONS {
  SET_INITIAL_FLOW = 'SET_INITIAL_FLOW',
  SET_VALUE = 'SET_VALUE',
  UPDATE_VALUE = 'UPDATE_VALUE',
  UPDATE_BLUR = 'UPDATE_BLUR',
  UPDATE_FLOW = 'UPDATE_FLOW',
  CLEAR_FORM = 'CLEAR_FORM',
}

interface SetFlowArgs {
  flow: IFlow;
  currentStep: ICurrentStep;
}

interface SetFlow extends SetFlowArgs {
  type: ACTIONS.SET_INITIAL_FLOW;
  flow: IFlow;
  currentStep: ICurrentStep;
}

const setFlow = ({ flow, currentStep }: SetFlowArgs): SetFlow => ({
  type: ACTIONS.SET_INITIAL_FLOW,
  flow,
  currentStep,
});

interface UpdateFlow {
  type: ACTIONS.UPDATE_FLOW;
}

const updateFlow = (): UpdateFlow => ({
  type: ACTIONS.UPDATE_FLOW,
});

interface ValueArgs {
  step: string | number;
  id: string;
  value: string | boolean | number | object;
  error: boolean;
}

interface SetValue extends ValueArgs {
  type: ACTIONS.SET_VALUE;
}

const setValue = ({ step, id, value, error }: ValueArgs): SetValue => ({
  type: ACTIONS.SET_VALUE,
  step,
  id,
  value,
  error,
});

interface UpdateValue extends ValueArgs {
  type: ACTIONS.UPDATE_VALUE;
}

const updateValue = ({ step, id, value, error }: ValueArgs): UpdateValue => ({
  type: ACTIONS.UPDATE_VALUE,
  step,
  id,
  value,
  error,
});

interface BlurArgs {
  step: string | number;
  id: string;
  showError: boolean;
}

interface UpdateBlur extends BlurArgs {
  type: ACTIONS.UPDATE_BLUR;
}

const updateBlur = ({ step, id, showError }: BlurArgs): UpdateBlur => ({
  type: ACTIONS.UPDATE_BLUR,
  step,
  id,
  showError,
});

interface ClearForm {
  type: ACTIONS.CLEAR_FORM;
}

const clearForm = (): ClearForm => ({
  type: ACTIONS.CLEAR_FORM,
});

type Actions = SetFlow | UpdateFlow | SetValue | UpdateValue | UpdateBlur | ClearForm;

function reducer(state: IState, action: Actions) {
  console.log(action);

  switch (action.type) {
    case ACTIONS.SET_INITIAL_FLOW: {
      const { flow, currentStep } = action;
      return {
        ...state,
        flow,
        currentStep,
      };
    }
    case ACTIONS.SET_VALUE: {
      const { step, id, value, error } = action;
      if (!state.data[id] || !state[step].data[id]) {
        return {
          ...state,
          data: {
            ...state.data,
            [step]: {
              ...state.data[step],
              [id]: value ?? '',
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
        };
      }

      return state;
    }
    case ACTIONS.UPDATE_VALUE: {
      const { step, id, value, error } = action;
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
            [id]: error,
          },
        },
      };
    }
    case ACTIONS.UPDATE_BLUR: {
      const { step, id, showError } = action;
      return {
        ...state,
        showError: {
          ...state.showError,
          [step]: {
            ...state.showError[step],
            [id]: showError,
          },
        },
      };
    }
    case ACTIONS.UPDATE_FLOW: {
      if (state.flow.key !== state.flow.end) {
        return {
          ...state,
          flow: {
            ...state.flow,
            key: state.flow.key + 1,
          },
        };
      }
    }
    case ACTIONS.CLEAR_FORM:
      return { ...initialState };
    default:
      throw new Error(`Unexpected Action received`);
  }
}

export interface FormWrapper {
  children: React.ReactNode;
  initialValues?: {};
}

export const FlowFormWrapper: React.FC<FormWrapper> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const actions = React.useMemo(() => {
    return {
      setFlow: ({ flow, currentStep }: SetFlowArgs) => dispatch(setFlow({ flow, currentStep })),
      setValue: ({ step, id, value, error }: ValueArgs) => dispatch(setValue({ step, id, value, error })),
      updateValue: ({ step, id, value, error }: ValueArgs) => dispatch(updateValue({ step, id, value, error })),
      updateBlur: ({ step, id, showError }: BlurArgs) => dispatch(updateBlur({ step, id, showError })),
      updateFlow: () => dispatch(updateFlow()),
      clearForm: () => dispatch(clearForm()),
    };
  }, []);

  return (
    <FlowFormContext.Provider
      value={{
        ...state,
        ...actions,
      }}
    >
      {children}
    </FlowFormContext.Provider>
  );
};

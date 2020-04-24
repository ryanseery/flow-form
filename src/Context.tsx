import * as React from 'react';
import { deepCheck } from './utils';

export interface IStepState {
  id: string;
  label: string;
  index: number;
}

interface IFlow {
  key: number;
  end: number;
  steps: IStepState[] | [];
  currentStep: IStepState | null;
}

interface IState {
  isFlowForm: boolean;
  flow: IFlow;
  canProceed: boolean;
  formData: {};
  error: {};
  showError: {};
  focus: {};
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
  formData: {},
  error: {},
  showError: {},
  focus: {},
};

type Args = {
  step: string | null;
  id: string;
};

type SetFormArgs = {
  isFlowForm: boolean;
  flow: IFlow;
};

interface ValueArgs extends Args {
  value: string | boolean | number | object | [];
  error: boolean;
}

interface SetFieldListArgs extends Args {
  value: object[];
  error: object[];
  focus: object[];
}

interface BlurArgs extends Args {
  showError: boolean;
}

interface FieldListItemArgs extends Args {
  index: number;
  name: string;
  value: string | number;
  error: boolean;
}

interface AddFieldItemArgs extends Args {
  blankInput: {};
}

interface RemoveFieldArgs extends Args {
  index: number;
}

interface FieldListItemSideEffectsArgs extends Args {
  index: number;
  name: string;
}

interface FieldListItemBlurArgs extends FieldListItemSideEffectsArgs {
  error: boolean;
}

interface IContext extends IState {
  setForm: ({ isFlowForm, flow }: SetFormArgs) => void;
  setField: ({ step, id, value, error }: ValueArgs) => void;
  setFieldList: ({ step, id, value, error }: SetFieldListArgs) => void;
  updateField: ({ step, id, value, error }: ValueArgs) => void;
  setBlur: ({ step, id, showError }: BlurArgs) => void;
  setFocus: ({ step, id }: Args) => void;
  progressForm: () => void;
  revertForm: () => void;
  updateFieldListItem: ({ step, id, index, name, value }: FieldListItemArgs) => void;
  addFieldList: ({ step, id, blankInput }: AddFieldItemArgs) => void;
  removeFieldList: ({ step, id, index }: RemoveFieldArgs) => void;
  setFieldListBlur: ({ step, id, index, name, error }: FieldListItemBlurArgs) => void;
  setFieldListFocus: ({ step, id, index, name }: FieldListItemSideEffectsArgs) => void;
}

export const Context = React.createContext({} as IContext);

enum ACTIONS {
  SET_FORM = 'SET_FORM',
  SET_FIELD = 'SET_FIELD',
  SET_FIELD_LIST = 'SET_FIELD_LIST',
  UPDATE_FIELD = 'UPDATE_FIELD',
  SET_BLUR = 'SET_BLUR',
  SET_FOCUS = 'SET_FOCUS',
  PROGRESS_FORM = 'PROGRESS_FORM',
  REVERT_FORM = 'REVERT_FORM',
  UPDATE_FIELD_LIST_ITEM = 'UPDATE_FIELD_LIST_ITEM',
  ADD_FIELD_LIST = 'ADD_FIELD_LIST',
  REMOVE_FIELD_LIST = 'REMOVE_FIELD_LIST',
  SET_FIELD_LIST_BLUR = 'SET_FIELD_LIST_BLUR',
  SET_FIELD_LIST_FOCUS = 'SET_FIELD_LIST_FOCUS',
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
const setField = ({ step, id, value, error }: ValueArgs): SetField => ({
  type: ACTIONS.SET_FIELD,
  step,
  id,
  value,
  error,
});

interface SetFieldList extends SetFieldListArgs {
  type: ACTIONS.SET_FIELD_LIST;
}
const setFieldList = ({ step, id, value, error, focus }: SetFieldListArgs): SetFieldList => ({
  type: ACTIONS.SET_FIELD_LIST,
  step,
  id,
  value,
  error,
  focus,
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

interface SetBlur extends BlurArgs {
  type: ACTIONS.SET_BLUR;
}
const setBlur = ({ step, id, showError }: BlurArgs): SetBlur => ({
  type: ACTIONS.SET_BLUR,
  step,
  id,
  showError,
});

interface SetFocus extends Args {
  type: ACTIONS.SET_FOCUS;
}
const setFocus = ({ step, id }: Args): SetFocus => ({
  type: ACTIONS.SET_FOCUS,
  step,
  id,
});

type ProgressForm = {
  type: ACTIONS.PROGRESS_FORM;
};
const progressForm = (): ProgressForm => ({
  type: ACTIONS.PROGRESS_FORM,
});

type RevertForm = {
  type: ACTIONS.REVERT_FORM;
};
const revertForm = (): RevertForm => ({
  type: ACTIONS.REVERT_FORM,
});

interface UpdateFieldListItem extends FieldListItemArgs {
  type: ACTIONS.UPDATE_FIELD_LIST_ITEM;
}
const updateInputListItem = ({ step, id, index, name, value, error }: FieldListItemArgs): UpdateFieldListItem => ({
  type: ACTIONS.UPDATE_FIELD_LIST_ITEM,
  step,
  id,
  index,
  name,
  value,
  error,
});

interface AddFieldList extends AddFieldItemArgs {
  type: ACTIONS.ADD_FIELD_LIST;
}
const addFieldList = ({ step, id, blankInput }: AddFieldItemArgs): AddFieldList => ({
  type: ACTIONS.ADD_FIELD_LIST,
  step,
  id,
  blankInput,
});

interface RemoveFieldList extends RemoveFieldArgs {
  type: ACTIONS.REMOVE_FIELD_LIST;
}
const removeFieldList = ({ step, id, index }: RemoveFieldArgs): RemoveFieldList => ({
  type: ACTIONS.REMOVE_FIELD_LIST,
  step,
  id,
  index,
});

interface SetFieldListBLur extends FieldListItemBlurArgs {
  type: ACTIONS.SET_FIELD_LIST_BLUR;
}
const setFieldListBlur = ({ step, id, index, name, error }: FieldListItemBlurArgs): SetFieldListBLur => ({
  type: ACTIONS.SET_FIELD_LIST_BLUR,
  step,
  id,
  index,
  name,
  error,
});

interface SetFieldListFocus extends FieldListItemSideEffectsArgs {
  type: ACTIONS.SET_FIELD_LIST_FOCUS;
}
const setFieldListFocus = ({ step, id, index, name }: FieldListItemSideEffectsArgs): SetFieldListFocus => ({
  type: ACTIONS.SET_FIELD_LIST_FOCUS,
  step,
  id,
  index,
  name,
});

type Action =
  | SetForm
  | SetField
  | SetFieldList
  | UpdateField
  | SetBlur
  | SetFocus
  | ProgressForm
  | RevertForm
  | UpdateFieldListItem
  | AddFieldList
  | RemoveFieldList
  | SetFieldListBLur
  | SetFieldListFocus;

function reducer(state: IState, action: Action): IState {
  switch (action.type) {
    case ACTIONS.SET_FORM: {
      const { isFlowForm, flow } = action;
      return { ...state, isFlowForm, flow };
    }
    case ACTIONS.SET_FIELD: {
      const { step, id, value, error } = action;
      if (step == null && !state.formData[id]) {
        return {
          ...state,
          formData: {
            ...state.formData,
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
          focus: {
            ...state.focus,
            [id]: false,
          },
        };
      } else if (step != null && !state.formData?.[step]?.[id]) {
        return {
          ...state,
          formData: {
            ...state.formData,
            [step]: {
              ...state.formData[step],
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
          focus: {
            ...state.focus,
            [step]: {
              ...state.focus[step],
              [id]: false,
            },
          },
        };
      } else {
        return state;
      }
    }
    case ACTIONS.SET_FIELD_LIST: {
      const { step, id, value, error, focus } = action;
      if (step == null && !state.formData[id]) {
        return {
          ...state,
          formData: {
            ...state.formData,
            [id]: value,
          },
          error: {
            ...state.error,
            [id]: error,
          },
          showError: {
            ...state.showError,
            [id]: focus,
          },
          focus: {
            ...state.focus,
            [id]: focus,
          },
        };
      } else if (step != null && !state.formData?.[step]?.[id]) {
        return {
          ...state,
          formData: {
            ...state.formData,
            [step]: {
              ...state.formData[step],
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
              [id]: focus,
            },
          },
          focus: {
            ...state.focus,
            [step]: {
              ...state.focus[step],
              [id]: focus,
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
          canProceed: deepCheck({ ...state.error, [id]: error }),
          formData: {
            ...state.formData,
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
          canProceed: deepCheck({ ...state.error[step], [id]: error }),
          formData: {
            ...state.formData,
            [step]: {
              ...state.formData[step],
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
    case ACTIONS.SET_BLUR: {
      const { step, id, showError } = action;
      if (step == null) {
        return {
          ...state,
          canProceed: deepCheck({ ...state.error, [id]: showError }),
          error: {
            ...state.error,
            [id]: showError,
          },
          showError: {
            ...state.showError,
            [id]: showError,
          },
          focus: {
            ...state.focus,
            [id]: false,
          },
        };
      } else if (step != null) {
        return {
          ...state,
          canProceed: deepCheck({ ...state.error[step], [id]: showError }),
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
          focus: {
            ...state.focus,
            [step]: {
              ...state.focus[step],
              [id]: false,
            },
          },
        };
      } else {
        return state;
      }
    }
    case ACTIONS.SET_FOCUS: {
      const { step, id } = action;
      if (step == null) {
        return {
          ...state,
          focus: {
            ...state.focus,
            [id]: !state.focus[id],
          },
        };
      } else if (step != null) {
        return {
          ...state,
          focus: {
            ...state.focus,
            [step]: {
              ...state.focus[step],
              [id]: !state.focus[step][id],
            },
          },
        };
      } else {
        return state;
      }
    }
    case ACTIONS.PROGRESS_FORM: {
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
    case ACTIONS.REVERT_FORM: {
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
    case ACTIONS.UPDATE_FIELD_LIST_ITEM: {
      const { step, id, index, name, value, error } = action;
      if (step == null) {
        const mutableValue = [...state.formData[id]];

        mutableValue[index][name] = value;

        const mutateError = [...state.error[id]];

        mutateError[index][name] = error;

        return {
          ...state,
          canProceed: deepCheck({ ...state.error, [id]: [...mutateError] }),
          formData: {
            ...state.formData,
            [id]: [...mutableValue],
          },
          error: {
            ...state.error,
            [id]: [...mutateError],
          },
        };
      } else if (step != null) {
        const mutableValue = [...state.formData[step][id]];

        mutableValue[index][name] = value;

        const mutableError = [...state.error[step][id]];

        mutableError[index][name] = error;

        return {
          ...state,
          canProceed: deepCheck({ ...state.error[step], [id]: [...mutableError] }),
          formData: {
            ...state.formData,
            [step]: {
              ...state.formData[step],
              [id]: [...mutableValue],
            },
          },
          error: {
            ...state.error,
            [step]: {
              ...state.error[step],
              [id]: [...mutableError],
            },
          },
        };
      } else {
        return state;
      }
    }
    case ACTIONS.ADD_FIELD_LIST: {
      const { step, id, blankInput } = action;

      if (step == null) {
        return {
          ...state,
          formData: {
            ...state.formData,
            [id]: [...state.formData[id], { ...blankInput }],
          },
        };
      } else if (step != null) {
        return {
          ...state,
          formData: {
            ...state.formData,
            [step]: {
              ...state.formData[step],
              [id]: [...state.formData[step][id], { ...blankInput }],
            },
          },
        };
      } else {
        return state;
      }
    }
    case ACTIONS.REMOVE_FIELD_LIST: {
      const { step, id, index } = action;
      if (step == null) {
        const updatedArr = state.formData[id].filter((_: {}, i: number) => i !== index);

        return {
          ...state,
          formData: {
            ...state.formData,
            [id]: [...updatedArr],
          },
        };
      } else if (step != null) {
        const updatedArr = state.formData[step][id].filter((_: {}, i: number) => i !== index);

        return {
          ...state,
          formData: {
            ...state.formData,
            [step]: {
              ...state.formData[step],
              [id]: [...updatedArr],
            },
          },
        };
      } else {
        return state;
      }
    }
    case ACTIONS.SET_FIELD_LIST_BLUR: {
      const { step, id, index, name, error } = action;
      if (step == null) {
        const mutableError = [...state.error[id]];

        mutableError[index][name] = error;
        return {
          ...state,
          error: {
            ...state.error,
            [id]: [...mutableError],
          },
          showError: {
            ...state.showError,
            [id]: [...mutableError],
          },
        };
      } else if (step != null) {
        const mutableError = [...state.error[step][id]];

        mutableError[index][name] = error;

        return {
          ...state,
          error: {
            ...state.error,
            [step]: {
              ...state.error[step],
              [id]: [...mutableError],
            },
          },
          showError: {
            ...state.showError,
            [step]: {
              ...state.showError[step],
              [id]: [...mutableError],
            },
          },
        };
      }
      return state;
    }
    case ACTIONS.SET_FIELD_LIST_FOCUS: {
      const { step, id, index, name } = action;

      if (step == null) {
        const mutableFocus = [...state.focus[id]];

        mutableFocus[index][name] = !mutableFocus[index][name];

        return {
          ...state,
          focus: {
            ...state.focus,
            [id]: [...mutableFocus],
          },
        };
      } else if (step != null) {
        const mutableFocus = [...state.focus[step][id]];

        mutableFocus[index][name] = !mutableFocus[index][name];

        return {
          ...state,
          focus: {
            ...state.focus,
            [step]: {
              ...state.focus[step],
              [id]: [...mutableFocus],
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
      setField: ({ step, id, value, error }: ValueArgs) => dispatch(setField({ step, id, value, error })),
      setFieldList: ({ step, id, value, error, focus }: SetFieldListArgs) =>
        dispatch(setFieldList({ step, id, value, error, focus })),
      updateField: ({ step, id, value, error }: ValueArgs) => dispatch(updateInput({ step, id, value, error })),
      setBlur: ({ step, id, showError }: BlurArgs) => dispatch(setBlur({ step, id, showError })),
      setFocus: ({ step, id }: Args) => dispatch(setFocus({ step, id })),
      progressForm: () => dispatch(progressForm()),
      revertForm: () => dispatch(revertForm()),
      updateFieldListItem: ({ step, id, index, name, value, error }: FieldListItemArgs) =>
        dispatch(updateInputListItem({ step, id, index, name, value, error })),
      addFieldList: ({ step, id, blankInput }: AddFieldItemArgs) => dispatch(addFieldList({ step, id, blankInput })),
      removeFieldList: ({ step, id, index }: RemoveFieldArgs) => dispatch(removeFieldList({ step, id, index })),
      setFieldListBlur: ({ step, id, index, name, error }: FieldListItemBlurArgs) =>
        dispatch(setFieldListBlur({ step, id, index, name, error })),
      setFieldListFocus: ({ step, id, index, name }: FieldListItemSideEffectsArgs) =>
        dispatch(setFieldListFocus({ step, id, index, name })),
    };
  }, []);

  return <Context.Provider value={{ ...state, ...actions }}>{children}</Context.Provider>;
};

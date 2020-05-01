import * as React from 'react';
import { Context } from '../Context';
import { IItem } from './Item';
import { toCamelCase, isObjectEmpty } from '../utils';

export function handleBlankArr(children: React.ReactNode[]): {} {
  return React.Children.toArray(children).reduce(
    (acc: {}, child) =>
      React.isValidElement<IItem>(child)
        ? { ...acc, [toCamelCase(child.props.name ? child.props.name : child.props.children ?? '')]: '' }
        : acc,
    {},
  );
}

export function handleBlankObj(children: React.ReactNode): {} {
  if (React.isValidElement<IItem>(children)) {
    return { [toCamelCase(children.props.name ? children.props.name : children.props.children ?? '')]: '' };
  } else {
    return {};
  }
}

export function handleInputPropsArr(children: React.ReactNode[]): {} {
  return React.Children.toArray(children).reduce(
    (acc: [], child) => (React.isValidElement<IItem>(child) ? [...acc, { ...child.props }] : acc),
    [],
  );
}

export function handleInputPropsObj(children: React.ReactNode): {} {
  if (React.isValidElement<IItem>(children)) {
    return [{ ...children.props }];
  }
  return [];
}

export function handleErrorArr(children: React.ReactNode[]): {} {
  return React.Children.toArray(children).reduce(
    (acc: {}, child) =>
      React.isValidElement<IItem>(child)
        ? {
            ...acc,
            [toCamelCase(child.props.name ? child.props.name : child.props.children ?? '')]:
              child.props?.required || child.props?.validation ? true : false ?? false,
          }
        : acc,
    {},
  );
}

export function handleErrorObj(children: React.ReactNode): {} {
  if (React.isValidElement<IItem>(children)) {
    return {
      [toCamelCase(children.props.name ? children.props.name : children.props.children ?? '')]:
        children.props?.required || children.props?.validation ? true : false ?? false,
    };
  } else {
    return {};
  }
}

export function handleFocusArr(children: React.ReactNode[]): {} {
  return React.Children.toArray(children).reduce(
    (acc: {}, child) =>
      React.isValidElement<IItem>(child)
        ? { ...acc, [toCamelCase(child.props.name ? child.props.name : child.props.children ?? '')]: false }
        : acc,
    {},
  );
}

export function handleFocusObj(children: React.ReactNode): {} {
  if (React.isValidElement<IItem>(children)) {
    return {
      [toCamelCase(children.props.name ? children.props.name : children.props.children ?? '')]: false,
    };
  } else {
    return {};
  }
}

type Args = {
  name?: string;
  label: string;
  step: string | null;
  children: React.ReactNode | React.ReactNode[];
};

export function useFieldListData({ name, label, step, children }: Args) {
  const {
    flow,
    setFieldList,
    updateFieldListItem,
    addFieldList,
    removeFieldList,
    setFieldListBlur,
    setFieldListFocus,
    formData,
    error,
    showError,
    focus,
  } = React.useContext(Context);

  const id = React.useMemo(() => toCamelCase(name ? name : label), [name, label]);

  const blankInput = React.useMemo(
    () => (Array.isArray(children) ? handleBlankArr(children) : handleBlankObj(children)),
    [children],
  );

  const inputProps = React.useMemo(
    () => (Array.isArray(children) ? handleInputPropsArr(children) : handleInputPropsObj(children)),
    [children],
  );

  const constructErrors = React.useMemo(
    () => (Array.isArray(children) ? handleErrorArr(children) : handleErrorObj(children)),
    [children],
  );

  const constructFocus = React.useMemo(
    () => (Array.isArray(children) ? handleFocusArr(children) : handleFocusObj(children)),
    [children],
  );

  function validate(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, index: number) {
    if (inputProps[index].required || inputProps[index].validation) {
      return inputProps[index].validation ? inputProps[index].validation(e) : !e.target.value;
    }
    return false;
  }

  React.useEffect(() => {
    setFieldList({
      step,
      id,
      value: [{ ...blankInput }],
      error: [{ ...constructErrors }],
      showError: [{ ...constructFocus }],
      focus: [{ ...constructFocus }],
    });
  }, [step, label, flow.currentStep, flow.key]);

  const onChange = (row: number, input: number) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    e.preventDefault();

    const { type, name, value } = e.target;

    updateFieldListItem({
      step,
      id,
      index: row,
      name,
      value: type === 'number' ? parseFloat(value) : value,
      error: validate(e, input),
    });
  };

  const onBlur = (row: number, input: number) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name } = e.target;

    setFieldListBlur({
      step,
      id,
      index: row,
      name,
      error: validate(e, input),
    });
  };

  const onFocus = (index: number) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name } = e.target;

    setFieldListFocus({
      step,
      id,
      index,
      name,
    });
  };

  return {
    id,
    inputProps,
    onChange,
    onBlur,
    onFocus,
    onAddFieldList: () =>
      addFieldList({
        step,
        id,
        blankInput: blankInput ?? {},
        blankError: constructErrors ?? {},
        blankFocus: constructFocus ?? {},
      }),
    onRemoveFieldList: (index: number) => removeFieldList({ step, id, index }),
    value: isObjectEmpty(formData) ? [] : step != null ? formData?.[step]?.[id] ?? [] : formData?.[id] ?? [],
    error: isObjectEmpty(error) ? false : step != null ? error?.[step]?.[id] ?? false : error?.[id] ?? false,
    showError: isObjectEmpty(showError)
      ? false
      : step != null
      ? showError?.[step]?.[id] ?? false
      : showError?.[id] ?? false,
    focused: isObjectEmpty(focus) ? false : step != null ? focus?.[step]?.[id] ?? false : focus?.[id] ?? false,
  };
}

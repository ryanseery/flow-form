import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { toCamelCase, isObjectEmpty } from '../utils';
import { Item, IItem } from './Item';
import { Context } from '../Context';
import { Row } from './Row';
import { ItemInput } from './ItemInput';
import { ListButton } from './ListButton';
import { colors } from '../colors';

enum ARR_TYPE {
  BLANK_INPUT = 'BLANK_INPUT',
  INPUT_TYPE = 'INPUT_TYPE',
}

type IFieldListProps = {
  ffComp?: string;
  step: string | null;
  label: string;
  name?: string;
  className?: string;
  style?: {};
  add?: boolean;
};

type IFieldList<P> = React.FunctionComponent<P> & {
  Item: typeof Item;
};

function handleBlankArr(children: React.ReactNode[]): {} {
  return React.Children.toArray(children).reduce(
    (acc: {}, child) =>
      React.isValidElement<IItem>(child)
        ? { ...acc, [toCamelCase(child.props.name ? child.props.name : child.props.children ?? '')]: '' }
        : acc,
    {},
  );
}

function handleTypeArr(children: React.ReactNode[]): {} {
  return React.Children.toArray(children).reduce(
    (acc: [], child) =>
      React.isValidElement<IItem>(child) ? [...acc, child.props.type ? child.props.type : 'text'] : acc,
    [],
  );
}

function handleChildObj(children: React.ReactNode, type: string): {}[] | string[] {
  if (React.isValidElement<IItem>(children)) {
    if (type === ARR_TYPE.BLANK_INPUT) {
      return [toCamelCase(children.props.name ? children.props.name : children.props.children ?? '')];
    }

    if (type == ARR_TYPE.INPUT_TYPE) {
      return [children?.props?.type ?? 'text'];
    }

    return [];
  } else {
    return [];
  }
}

// TODO put function code into own hook?
export const FieldList: IFieldList<IFieldListProps> = ({ step, label, name, className, style, children, add }) => {
  const { flow, setField, formData, updateInputListItem, addInputList, removeInputList } = React.useContext(Context);

  if (!children) {
    throw new Error(`<FieldList> expects to have <FieldList.Item> for child components.`);
  }

  if (!label) {
    throw new Error(`The label prop is mandatory on FieldList Component.`);
  }

  const id = React.useMemo(() => toCamelCase(name ? name : label), [name, label]);

  const blankInput = React.useMemo(
    () => (Array.isArray(children) ? handleBlankArr(children) : handleChildObj(children, ARR_TYPE.BLANK_INPUT)),
    [],
  );

  // TODO rebuild to take all input props
  const inputTypes = React.useMemo(
    () => (Array.isArray(children) ? handleTypeArr(children) : handleChildObj(children, ARR_TYPE.INPUT_TYPE)),
    [],
  );

  React.useEffect(() => {
    setField({
      step,
      id,
      value: [{ ...blankInput }],
      error: false,
    });
  }, [step, label, flow.currentStep, flow.key]);

  const handleChange = (index: number) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { type, name, value } = e.target;

    updateInputListItem({ step, id, index, name, value: type === 'number' ? parseFloat(value) : value });
  };

  return (
    <label data-field-list-id={id} className={`flow-form-field-list ${className}`} style={style}>
      {label}
      {!isObjectEmpty(formData) && step != null ? (
        <>
          {formData?.[step]?.[id].map((field: {}, index: number) => (
            <Row key={index} className={className}>
              {Object.entries(field).map(([k, v], i: number) => (
                <React.Fragment key={i}>
                  <ItemInput
                    objKey={k}
                    fieldIndex={i}
                    type={inputTypes?.[i] ?? 'text'}
                    value={(v as string | number) || ''}
                    // required='false'
                    onChange={handleChange(index)}
                    // onBlur={onBlur}
                    // onFocus={onFocus}
                    autoComplete="off"
                    style={style}
                  />
                  {/* {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />} */}
                </React.Fragment>
              ))}
              {add && (
                <>
                  {index === 0 ? (
                    <ListButton
                      color={colors.green}
                      onClick={() => addInputList({ step, id, blankInput: blankInput ?? {} })}
                    >
                      +
                    </ListButton>
                  ) : (
                    <ListButton color={colors.red} onClick={() => removeInputList({ step, id, index })}>
                      -
                    </ListButton>
                  )}
                </>
              )}
            </Row>
          ))}
        </>
      ) : (
        <>
          {!isObjectEmpty(formData) &&
            formData?.[id].map((field: {}, index: number) => (
              <Row key={index} className={className}>
                {Object.entries(field).map(([k, v], i: number) => (
                  <React.Fragment key={i}>
                    <ItemInput
                      objKey={k}
                      fieldIndex={i}
                      type={inputTypes?.[i] ?? 'text'}
                      value={(v as string | number) || ''}
                      // required={required}
                      onChange={handleChange(index)}
                      // onBlur={onBlur}
                      // onFocus={onFocus}
                      autoComplete="off"
                      style={style}
                    />
                    {/* {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />} */}
                  </React.Fragment>
                ))}
                {add && (
                  <>
                    {index === 0 ? (
                      <ListButton
                        color={colors.green}
                        onClick={() => addInputList({ step, id, blankInput: blankInput ?? {} })}
                      >
                        +
                      </ListButton>
                    ) : (
                      <ListButton color={colors.red} onClick={() => removeInputList({ step, id, index })}>
                        -
                      </ListButton>
                    )}
                  </>
                )}
              </Row>
            ))}
        </>
      )}
    </label>
  );
};

FieldList.defaultProps = {
  ffComp: FFComponent.FIELD_LIST,
};

FieldList.Item = Item;

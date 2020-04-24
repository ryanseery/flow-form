import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { Context } from '../Context';
import { toCamelCase, isObjectEmpty } from '../utils';
import { Item } from './Item';
import { Row } from './Row';
import { ItemInput } from './ItemInput';
import { ListButton } from './ListButton';
import { colors } from '../colors';
import {
  handleBlankArr,
  handleBlankObj,
  handleInputPropsArr,
  handleInputPropsObj,
  handleErrorArr,
  handleErrorObj,
  handleFocusArr,
  handleFocusObj,
} from './fieldListUtils';

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

// TODO put state function code into own hook?
export const FieldList: IFieldList<IFieldListProps> = ({ step, label, name, className, style, children, add }) => {
  const { flow, setFieldList, formData, updateFieldListItem, addFieldList, removeFieldList } = React.useContext(
    Context,
  );

  if (!children) {
    throw new Error(`<FieldList> expects to have <FieldList.Item> for child components.`);
  }

  if (!label) {
    throw new Error(`The label prop is mandatory on FieldList Component.`);
  }

  const id = React.useMemo(() => toCamelCase(name ? name : label), [name, label]);

  const blankInput = React.useMemo(
    () => (Array.isArray(children) ? handleBlankArr(children) : handleBlankObj(children)),
    [],
  );

  const inputProps = React.useMemo(
    () => (Array.isArray(children) ? handleInputPropsArr(children) : handleInputPropsObj(children)),
    [],
  );

  const constructErrors = React.useMemo(
    () => (Array.isArray(children) ? handleErrorArr(children) : handleErrorObj(children)),
    [],
  );

  const constructFocus = React.useMemo(
    () => (Array.isArray(children) ? handleFocusArr(children) : handleFocusObj(children)),
    [],
  );

  React.useEffect(() => {
    setFieldList({
      step,
      id,
      value: [{ ...blankInput }],
      error: [{ ...constructErrors }],
      focus: [{ ...constructFocus }],
    });
  }, [step, label, flow.currentStep, flow.key]);

  const handleChange = (index: number) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { type, name, value } = e.target;

    function validate(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
      if (inputProps[index].required || inputProps[index].validation) {
        return inputProps[index].validation ? inputProps[index].validation(e) : !e.target.value;
      }
    }

    updateFieldListItem({
      step,
      id,
      index,
      name,
      value: type === 'number' ? parseFloat(value) : value,
      error: validate(e),
    });
  };

  return (
    <label
      data-field-list-id={id}
      className={`flow-form-field-list ${className}`}
      style={{ ...style, textTransform: 'capitalize' }}
    >
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
                    type={inputProps?.[i].type ?? 'text'}
                    value={(v as string | number) || ''}
                    required={inputProps?.[i].required ?? false}
                    onChange={handleChange(index)}
                    // onBlur={onBlur}
                    // onFocus={onFocus}
                    autoComplete={inputProps?.[i].autoComplete ?? 'off'}
                  />
                  {/* {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />} */}
                </React.Fragment>
              ))}
              {add && (
                <>
                  {index === 0 ? (
                    <ListButton
                      color={colors.green}
                      onClick={() => addFieldList({ step, id, blankInput: blankInput ?? {} })}
                    >
                      +
                    </ListButton>
                  ) : (
                    <ListButton color={colors.red} onClick={() => removeFieldList({ step, id, index })}>
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
                      type={inputProps?.[i].type ?? 'text'}
                      value={(v as string | number) || ''}
                      required={inputProps?.[i].required ?? false}
                      onChange={handleChange(index)}
                      // onBlur={onBlur}
                      // onFocus={onFocus}
                      autoComplete={inputProps?.[i].autoComplete ?? 'off'}
                    />
                    {/* {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />} */}
                  </React.Fragment>
                ))}
                {add && (
                  <>
                    {index === 0 ? (
                      <ListButton
                        color={colors.green}
                        onClick={() => addFieldList({ step, id, blankInput: blankInput ?? {} })}
                      >
                        +
                      </ListButton>
                    ) : (
                      <ListButton color={colors.red} onClick={() => removeFieldList({ step, id, index })}>
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

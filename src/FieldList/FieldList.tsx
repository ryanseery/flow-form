import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { Context } from '../Context';
import { toCamelCase, isObjectEmpty } from '../utils';
import { Item } from './Item';
import { Row } from './Row';
import { ItemInput } from './ItemInput';
import { ListButton } from '../buttons';
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
import { DisplayError } from '../DisplayError';
import { theme } from '../theme';

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
// TODO investigate when this is rerendering... constFocus was being changed on state reducer end, but never showed
export const FieldList: IFieldList<IFieldListProps> = ({ step, label, name, className, style, children, add }) => {
  const {
    flow,
    setFieldList,
    formData,
    updateFieldListItem,
    addFieldList,
    removeFieldList,
    setFieldListBlur,
    setFieldListFocus,
    showError,
  } = React.useContext(Context);

  if (!children) {
    throw new Error(`<FieldList> expects to have <FieldList.Item> for child components.`);
  }

  if (!label) {
    throw new Error(`The label prop is mandatory on FieldList Component.`);
  }

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

  function validate(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, index: number) {
    if (inputProps[index].required || inputProps[index].validation) {
      return inputProps[index].validation ? inputProps[index].validation(e) : !e.target.value;
    }
    return false;
  }

  const handleChange = (row: number, input: number) => (
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

  const handleBlur = (row: number, input: number) => (
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

  const handleFocus = (index: number) => (
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

  return (
    <fieldset
      data-field-list-id={id}
      className={`flow-form-field-list ${className}`}
      style={{ display: `block`, minHeight: '4.5rem', border: 'none', padding: '0', margin: '0', ...style }}
    >
      <legend style={{ fontSize: `${theme.fonts.medium}` }}>{label}</legend>
      {!isObjectEmpty(formData) && step != null ? (
        <>
          {formData?.[step]?.[id].map((field: {}, index: number) => (
            <Row key={index} className={className}>
              {Object.entries(field).map(([k, v], i: number) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <ItemInput
                    key={k}
                    objKey={k}
                    fieldIndex={i}
                    type={inputProps?.[i].type ?? 'text'}
                    value={(v as string | number) || ''}
                    required={inputProps?.[i].required ?? false}
                    onChange={handleChange(index, i)}
                    onBlur={handleBlur(index, i)}
                    onFocus={handleFocus(index)}
                    autoComplete={inputProps?.[i].autoComplete ?? 'off'}
                  />
                  {showError?.[step]?.[id]?.[index]?.[k] && (
                    <DisplayError id={k} className={inputProps[i].className} label={k} errMsg={inputProps[i].errMsg} />
                  )}
                </div>
              ))}
              {add && (
                <>
                  {index === 0 ? (
                    <ListButton
                      onClick={() =>
                        addFieldList({
                          step,
                          id,
                          blankInput: blankInput ?? {},
                          blankError: constructErrors ?? {},
                          blankFocus: constructFocus ?? {},
                        })
                      }
                    >
                      &#43;
                    </ListButton>
                  ) : (
                    <ListButton remove onClick={() => removeFieldList({ step, id, index })}>
                      &minus;
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
                  <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                    <ItemInput
                      objKey={k}
                      fieldIndex={i}
                      type={inputProps?.[i].type ?? 'text'}
                      value={(v as string | number) || ''}
                      required={inputProps?.[i].required ?? false}
                      onChange={handleChange(index, i)}
                      onBlur={handleBlur(index, i)}
                      onFocus={handleFocus(index)}
                      autoComplete={inputProps?.[i].autoComplete ?? 'off'}
                    />
                    {showError?.[id]?.[index]?.[k] && (
                      <DisplayError
                        id={k}
                        className={inputProps[i].className}
                        label={k}
                        errMsg={inputProps[i].errMsg}
                      />
                    )}
                  </div>
                ))}
                {add && (
                  <>
                    {index === 0 ? (
                      <ListButton
                        onClick={() =>
                          addFieldList({
                            step,
                            id,
                            blankInput: blankInput ?? {},
                            blankError: constructErrors ?? {},
                            blankFocus: constructFocus ?? {},
                          })
                        }
                      >
                        &#43;
                      </ListButton>
                    ) : (
                      <ListButton remove onClick={() => removeFieldList({ step, id, index })}>
                        &minus;
                      </ListButton>
                    )}
                  </>
                )}
              </Row>
            ))}
        </>
      )}
    </fieldset>
  );
};

FieldList.defaultProps = {
  ffComp: FFComponent.FIELD_LIST,
};

FieldList.Item = Item;

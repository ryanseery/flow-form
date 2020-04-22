import * as React from 'react';
import { FFComponent } from '../../../FFComponent';
import { Context } from '../../../Context';
import { IProps, Input } from '../@types';
// import { Error } from '../../Error';
import { toCamelCase, isObjectEmpty } from '../../../utils';
import { Row } from './Row';
import { Item } from './Item';
import { ListButton } from './ListButton';
import { colors } from '../../../colors';

interface IInputList extends IProps {}

export const InputList: React.FC<IInputList> = ({
  step,
  id,
  required = false,
  validation,
  autoComplete,
  style,
  className,
  // label,
  // errMsg,
  // listName,
  inputs,
  add,
}) => {
  const { setField, flow, formData, updateInputListItem, addInputList, removeInputList } = React.useContext(Context);

  const blankInput = React.useMemo(
    () => inputs && inputs.reduce((acc: {}, input: Input) => ({ ...acc, [toCamelCase(input.name)]: '' }), {}),
    [],
  );

  const inputTypes = React.useMemo(
    () => inputs && inputs.reduce((acc: [], input: Input) => [...acc, input.type.toLowerCase()], []),
    [],
  );

  React.useEffect(() => {
    setField({
      step,
      id,
      value: [{ ...blankInput }],
      error: required || validation ? true : false,
    });
  }, [step, id, flow.currentStep, flow.key]);

  const handleChange = (index: number) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { type, name, value } = e.target;

    updateInputListItem({ step, id, index, name, value: type === 'number' ? parseFloat(value) : value });
  };

  return (
    <div
      className={`flow-form-inputList-container ${className}-inputList-container`}
      // style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      {!isObjectEmpty(formData) && step != null ? (
        <>
          {formData?.[step]?.[id].map((field: {}, index: number) => (
            <Row key={index} className={className}>
              {Object.entries(field).map(([k, v], i: number) => (
                <React.Fragment key={i}>
                  <Item
                    objKey={k}
                    fieldIndex={i}
                    type={inputTypes?.[i] ?? 'text'}
                    value={(v as string | number) || ''}
                    required={required}
                    onChange={handleChange(index)}
                    // onBlur={onBlur}
                    // onFocus={onFocus}
                    autoComplete={autoComplete}
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
                    <Item
                      objKey={k}
                      fieldIndex={i}
                      type={inputTypes?.[i] ?? 'text'}
                      value={(v as string | number) || ''}
                      required={required}
                      onChange={handleChange(index)}
                      // onBlur={onBlur}
                      // onFocus={onFocus}
                      autoComplete={autoComplete}
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
    </div>
  );
};

InputList.defaultProps = {
  ffComp: FFComponent.INPUT_LIST,
};

import * as React from 'react';
import { FFComponent } from '../../../FFComponent';
import { Context } from '../../../Context';
import { IProps, Input } from '../@types';
// import { Error } from '../../Error';
import { toCamelCase, isObjectEmpty } from '../../../utils';
import { Row } from './Row';
import { Item } from './Item';

interface IInputList extends IProps {}

export const InputList: React.FC<IInputList> = ({
  step,
  id,
  required = false,
  validate,
  autoComplete,
  style,
  className,
  // label,
  // errMsg,
  // listName,
  inputs,
}) => {
  const { setField, flow, formData, updateInputListItem } = React.useContext(Context);

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
      error: required || validate ? true : false,
    });
  }, [step, id, flow.currentStep, flow.key]);

  const handleChange = (index: number) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { type, name, value } = e.target;

    updateInputListItem({ step, id, index, name, value: type === 'number' ? parseFloat(value) : value });
  };

  console.log('RENDER: ', formData);
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
                <Item
                  key={i}
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
              ))}
              {/* {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />} */}
            </Row>
          ))}
        </>
      ) : (
        <>
          {!isObjectEmpty(formData) &&
            formData?.[id].map((field: {}, index: number) => (
              <Row key={index} className={className}>
                {Object.entries(field).map(([k, v], i: number) => (
                  <Item
                    key={i}
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
                ))}
                {/* {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />} */}
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

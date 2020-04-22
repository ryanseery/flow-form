import * as React from 'react';
import { FFComponent } from '../../FFComponent';
import { useFormData } from '../../useFormData';
import { IProps, Input } from './@types';
// import { Error } from '../../Error';
import { toCamelCase } from '../../utils';

interface IInputList extends IProps {}

export const InputList: React.FC<IInputList> = ({
  step,
  id,
  required = false,
  validate,
  placeholder,
  autoComplete,
  style,
  className,
  // label,
  // errMsg,
  listName,
  inputs,
}) => {
  const blankInput =
    inputs && inputs.reduce((acc: {}, input: Input) => ({ ...acc, [toCamelCase(input.name)]: '' }), {});

  // TODO need custom set, handleUpdate. handleAdd, handleDelete
  const { value, onChange, onBlur, onFocus, showError } = useFormData({
    step,
    id,
    value: listName && { [listName]: blankInput },
    required,
    validate,
  });

  console.log('blankInputs: ', listName && { [listName]: blankInput });

  return (
    <>
      {inputs &&
        inputs.map((input: Input, index: number) => (
          <input
            id={`${id}-field-inputList-item-${index}`}
            data-input-id={`${id}-field-inputList-item-${index}`}
            name={id}
            type={input.type}
            value={value || ''}
            required={required}
            // onChange={onChange}
            // onBlur={onBlur}
            // onFocus={onFocus}
            className={`flow-form-field flow-form-inputList-item ${className}-inputList-item`}
            placeholder={input.name.toUpperCase()}
            autoComplete={autoComplete}
            style={style}
          />
        ))}

      {/* {showError && <Error id={id} className={className} label={label} errMsg={errMsg} />} */}
    </>
  );
};

InputList.defaultProps = {
  ffComp: FFComponent.INPUT_LIST,
};

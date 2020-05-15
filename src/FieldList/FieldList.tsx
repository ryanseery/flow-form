import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { Item } from './Item';
import { ItemInput } from './ItemInput';
import { ListButton } from '../buttons';
import { useFieldListData } from './fieldListUtils';
import { DisplayError } from '../DisplayError';
import { FieldListWrapper } from './@styles';

type IFieldListProps = {
  ffComp?: string;
  step: string | null;
  label: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
  add?: boolean;
  required?: boolean;
};

type IFieldList<P> = React.FunctionComponent<P> & {
  Item: typeof Item;
};

export const FieldList: IFieldList<IFieldListProps> = ({
  step,
  label,
  name,
  className,
  style,
  children,
  add,
  required,
}) => {
  if (!children) {
    throw new Error(`<FieldList> expects to have <FieldList.Item> for child components.`);
  }

  if (!label) {
    throw new Error(`The label prop is mandatory on FieldList Component.`);
  }

  const {
    id,
    inputProps,
    onChange,
    onBlur,
    onFocus,
    value,
    showError,
    focused,
    onAddFieldList,
    onRemoveFieldList,
  } = useFieldListData({
    name,
    label,
    step,
    children,
  });

  return (
    <FieldListWrapper
      data-field-list-id={id}
      className={`flow-form-field-list field-list-container-${className}`}
      style={style}
    >
      <legend className="flow-form-field-list-label">
        {label} {required && <span className="required">*</span>}
      </legend>
      {value.map((field: {}, index: number) => (
        <div key={index} className={`flow-form-field-list-row  field-list-row-${className}`}>
          {Object.entries(field).map(([k, v], i: number) => (
            <div key={i} className="flow-form-field-list-row-input-container">
              <ItemInput
                key={k}
                objKey={k}
                fieldIndex={i}
                type={inputProps?.[i].type ?? 'text'}
                value={(v as string | number) || ''}
                required={inputProps?.[i].required ?? false}
                onChange={onChange(index, i)}
                onBlur={onBlur(index, i)}
                onFocus={onFocus(index)}
                autoComplete={inputProps?.[i].autoComplete ?? 'off'}
                focused={focused[index][k]}
                showError={showError[index][k]}
              />
              {showError[index][k] && (
                <DisplayError id={k} className={inputProps[i].className} label={k} errMsg={inputProps[i].errMsg} />
              )}
            </div>
          ))}
          {add && (
            <>
              {index === 0 ? (
                <ListButton onClick={() => onAddFieldList()}>&#43;</ListButton>
              ) : (
                <ListButton remove onClick={() => onRemoveFieldList(index)}>
                  &minus;
                </ListButton>
              )}
            </>
          )}
        </div>
      ))}
    </FieldListWrapper>
  );
};

FieldList.defaultProps = {
  ffComp: FFComponent.FIELD_LIST,
};

FieldList.Item = Item;

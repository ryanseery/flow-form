import * as React from 'react';
import { FFComponent } from '../FFComponent';
import { Item } from './Item';
import { Row } from './Row';
import { ItemInput } from './ItemInput';
import { ListButton } from '../buttons';
import { useFieldListData } from './fieldListUtils';
import { DisplayError } from '../DisplayError';
import { theme } from '../theme';
import { border } from '../utils';

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
    <fieldset
      data-field-list-id={id}
      className={`flow-form-field-list ${className}`}
      style={{ display: `block`, minHeight: '4.5rem', border: 'none', padding: '0', margin: '0', ...style }}
    >
      <legend style={{ fontSize: `${theme.fonts.medium}` }}>{label}</legend>
      {value.map((field: {}, index: number) => (
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
                onChange={onChange(index, i)}
                onBlur={onBlur(index, i)}
                onFocus={onFocus(index)}
                autoComplete={inputProps?.[i].autoComplete ?? 'off'}
                style={{
                  marginRight: '10px',
                  textTransform: 'capitalize',
                  fontSize: `${theme.fonts.medium}`,
                  textIndent: `${theme.text.indent}`,
                  border: `${border(focused[index][k], showError[index][k])}`,
                  borderRadius: `${theme.border.radius}`,
                  backgroundColor: `${theme.colors.white}`,
                  outline: 'none',
                }}
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
        </Row>
      ))}
    </fieldset>
  );
};

FieldList.defaultProps = {
  ffComp: FFComponent.FIELD_LIST,
};

FieldList.Item = Item;

import * as React from 'react';
import { IField } from '../Field';
//TODO convert to resemble other fields. Doc to show same name is needed for group
//TODO handle in own function?
export const CheckboxRadio = React.forwardRef<HTMLInputElement, IField>((props, ref) => (
  <div className="flow-form-radio-group">
    {(props?.children as React.ReactElement[]).map(child => (
      <label htmlFor={child.props.id} key={child.props.name} className={props.className}>
        <input
          id={props.id}
          type={props.type}
          ref={ref}
          value={child.props.name}
          checked={props.value === child.props.name}
          onChange={props.onChange}
        />
        {child.props.name}
      </label>
    ))}
  </div>
));

import * as React from 'react';
import { IField } from '../Field';

// TODO first radio is being auto selected. register issue?
export const Radio = React.forwardRef<HTMLInputElement, IField>((props, ref) => {
  return (
    <div className="flow-form-radio-group">
      {(props?.children as React.ReactElement[]).map(child => (
        <label htmlFor={child.props.id} key={child.props.name} className={props.className}>
          <input
            id={props.id}
            name={child.props.name}
            type="radio"
            ref={ref}
            value={child.props.name}
            checked={props.value === child.props.name}
            onChange={props.onChange}
          />
          {child.props.name}
        </label>
      ))}
    </div>
  );
});

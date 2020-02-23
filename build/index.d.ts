import * as React from 'react';
import { IState } from './FormWrapper/FormWrapper';
export { Input } from './Input';
interface IForm {
    children: React.ReactNode | React.ReactNode[];
    onSubmit: (data: object) => IState;
    className?: string;
    customSubmit?: boolean;
    reset?: boolean;
}
export declare const FlowForm: React.FC<IForm>;

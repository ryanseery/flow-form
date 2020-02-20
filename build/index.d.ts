import * as React from 'react';
import { IState } from './FormWrapper';
interface IForm {
    children: React.ReactNode | React.ReactNode[];
    onSubmit: (data: object) => IState;
    className?: string;
}
export declare const Form: React.FC<IForm>;
export { Input } from './Input';

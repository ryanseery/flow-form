import { IField } from '../Field';

export interface IProps extends IField {
  id: string;
  label?: string;
}

export type Option = {
  name: string;
  value: string;
};

export type Input = {
  name: string;
  type: string;
};

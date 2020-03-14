export interface IInputType {
  index: number;
  step: string | number;
  id: string;
  type?: string;
  className: string;
  placeholder?: string;
  required?: boolean;
  autoComplete: string;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
  errMsg?: string;
  helperText?: boolean | string;
  style: {};
}

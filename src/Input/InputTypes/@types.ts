export interface IInputType {
  id: string;
  type?: string;
  className: string;
  placeholder?: string;
  required?: boolean;
  autoComplete: string;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
  showError?: boolean | string;
  helperText?: boolean | string;
  style: {};
}

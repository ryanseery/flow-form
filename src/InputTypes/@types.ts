export interface IInputType {
  id: string;
  type: string;
  className: string;
  placeholder?: string;
  required?: boolean;
  validate?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => boolean;
  errMsg?: string;
}

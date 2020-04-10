import * as React from 'react';
import { Context } from './Context';

interface IUseFormData {
  step: string | null;
  id: string;
  value: string;
}

export function useFormData2({ step, id, value }: IUseFormData) {
  const { setInput } = React.useContext(Context);

  React.useEffect(() => {
    setInput({ step, id, value, error: false });
  }, [id]);

  return {
    value,
  };
}

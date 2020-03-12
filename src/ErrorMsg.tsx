import * as React from 'react';
import { showFormData } from './hooks';

interface IErrMsg {}

export const ShowData: React.FC<IErrMsg> = () => {
  const { data, error } = showFormData();

  // TODO deal with how error message comes in

  return (
    <div>
      <p>show error here.</p>
    </div>
  );
};

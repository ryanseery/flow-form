import * as React from 'react';
import { showFormData } from '../hooks';

interface IShowData {}

export const ShowData: React.FC<IShowData> = () => {
  const { data, error } = showFormData();

  return <pre>{JSON.stringify({ data, error }, null, 2)}</pre>;
};

import { useContext } from 'react';
import { ClaseContext } from '../contex';

export const useClase = () => {
  const { claseState } = useContext(ClaseContext);

  return {
    ...claseState,
  };
};

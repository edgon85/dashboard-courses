import { useContext } from 'react';
import { ClaseContext } from '../contex';

export const useClase = () => {
  const { claseState, addNewClase } = useContext(ClaseContext);

  return {
    ...claseState,

    /* methods */
    addNewClase,
  };
};

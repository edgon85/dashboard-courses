import { useContext } from 'react';
import { ClaseContext } from '../contex';

export const useClase = () => {
  const {
    claseState,
    addNewClase,
    addSelectedClase,
    removeSelectedClase,
    deleteClase,
    loadClases,
    filterClase,
  } = useContext(ClaseContext);

  return {
    ...claseState,

    /* methods */
    addNewClase,
    addSelectedClase,
    removeSelectedClase,
    deleteClase,
    loadClases,
    filterClase,
  };
};

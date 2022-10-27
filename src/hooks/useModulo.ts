import { useContext } from 'react';
import { ModuloContext } from '../contex';

export const useModulo = () => {
  const {
    moduloState,
    addModule,
    addModuleSelected,
    removeSelectedModulo,
    deleteModule,
  } = useContext(ModuloContext);

  return {
    ...moduloState,

    /* metodos */
    addModule,
    addModuleSelected,
    removeSelectedModulo,
    deleteModule,
  };
};

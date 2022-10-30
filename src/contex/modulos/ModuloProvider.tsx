import { useReducer } from 'react';
import { MODULOS_DATA } from '../../data';
import { Modulo, ModuloInitState } from '../../interfaces';
import { ModuloContext, moduloReducer } from './';

const INIT_STATE: ModuloInitState = {
  modulos: MODULOS_DATA,
  modulosSelected: [],
};

type props = {
  children: JSX.Element | JSX.Element[];
};

export const ModuloProvider = ({ children }: props) => {
  const [moduloState, dispatch] = useReducer(moduloReducer, INIT_STATE);

  const loadModulos = () => {
    dispatch({ type: 'loadModulos', payload: MODULOS_DATA });
  };

  const addModule = (modulo: Modulo) => {
    dispatch({ type: 'addModulo', payload: modulo });
  };

  const addModuleSelected = (modulo: Modulo) => {
    dispatch({ type: 'addModuloSelected', payload: modulo });
  };

  const removeSelectedModulo = (modulo: Modulo) => {
    dispatch({ type: 'removeModuloSelected', payload: modulo });
  };

  const deleteModule = (modulo: Modulo) => {
    dispatch({ type: 'deleteModuloSelected', payload: modulo });
  };

  const filterModulo = (query: string) => {
    dispatch({ type: 'filterModulo', payload: query });
  };

  return (
    <ModuloContext.Provider
      value={{
        moduloState,
        addModule,
        addModuleSelected,
        removeSelectedModulo,
        deleteModule,
        loadModulos,
        filterModulo,
      }}
    >
      {children}
    </ModuloContext.Provider>
  );
};

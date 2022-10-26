import { useReducer } from 'react';
import { CLASSES_DATA } from '../../data/class-data';

import { Clase, ClaseInitState } from '../../interfaces';
import { ClaseContext, claseReducer } from './';

const INIT_STATE: ClaseInitState = {
  clases: CLASSES_DATA,
};

type props = {
  children: JSX.Element | JSX.Element[];
};

export const ClaseProvider = ({ children }: props) => {
  const [claseState, dispatch] = useReducer(claseReducer, INIT_STATE);

  const addNewClase = (clase: Clase) => {
    dispatch({ type: 'addClase', payload: clase });
  };

  return (
    <ClaseContext.Provider
      value={{
        claseState,
        addNewClase,
      }}
    >
      {children}
    </ClaseContext.Provider>
  );
};

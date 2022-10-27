import { Clase, ClaseInitState } from '../../interfaces';

type ClaseAction =
  | { type: 'addClase'; payload: Clase }
  | { type: 'addClaseSelected'; payload: Clase }
  | { type: 'removeClaseSelected'; payload: Clase }
  | { type: 'deleteClases'; payload: Clase };

export const claseReducer = (state: ClaseInitState, action: ClaseAction) => {
  switch (action.type) {
    case 'addClase':
      return {
        ...state,
        clases: [...state.clases, action.payload],
      };

    case 'addClaseSelected':
      return {
        ...state,
        clasesSelected: [...new Set([...state.clasesSelected, action.payload])],
      };

    case 'removeClaseSelected':
      return {
        ...state,
        clasesSelected: state.clasesSelected.filter(
          (selected) => selected !== action.payload
        ),
      };

    case 'deleteClases':
      return {
        ...state,
        clases: state.clases.filter((clase) => clase !== action.payload),
      };

    default:
      return state;
  }
};

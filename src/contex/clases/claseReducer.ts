import { Clase, ClaseInitState } from '../../interfaces';

type ClaseAction = { type: 'addClase'; payload: Clase };

export const claseReducer = (state: ClaseInitState, action: ClaseAction) => {
  switch (action.type) {
    case 'addClase':
      return {
        ...state,
        clases: [...state.clases, action.payload],
      };

    default:
      return state;
  }
};

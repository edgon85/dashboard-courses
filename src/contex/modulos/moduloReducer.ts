import { Modulo, ModuloInitState } from '../../interfaces/modulo.interface';

type ModuloActions =
  | { type: 'addModulo'; payload: Modulo }
  | { type: 'addModuloSelected'; payload: Modulo }
  | { type: 'removeModuloSelected'; payload: Modulo }
  | { type: 'deleteModuloSelected'; payload: Modulo }
  | { type: 'loadModulos'; payload: Modulo[] }
  | { type: 'filterModulo'; payload: string };

export const moduloReducer = (
  state: ModuloInitState,
  action: ModuloActions
) => {
  switch (action.type) {
    case 'loadModulos':
      return {
        ...state,
        modulos: action.payload,
      };
    case 'addModulo':
      return {
        ...state,
        modulos: [...state.modulos, action.payload],
      };
    case 'addModuloSelected':
      return {
        ...state,
        modulosSelected: [
          ...new Set([...state.modulosSelected, action.payload]),
        ],
      };
    case 'removeModuloSelected':
      return {
        ...state,
        modulosSelected: state.modulosSelected.filter(
          (selected) => selected !== action.payload
        ),
      };
    case 'deleteModuloSelected':
      return {
        ...state,
        modulos: state.modulos.filter((modulo) => modulo !== action.payload),
      };
    case 'filterModulo':
      return {
        ...state,
        modulos: state.modulos.filter((modulo) =>
          modulo.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    default:
      return state;
  }
};

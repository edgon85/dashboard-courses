export interface Modulo {
  id: string;
  name: string;
  slug: string;
  modulo: string;
  order: number;
}

export interface ModuloInitState {
  modulos: Modulo[];
  modulosSelected: Modulo[];
}

export type ModuloContextProps = {
  moduloState: ModuloInitState;
  addModule: (modulo: Modulo) => void;
  addModuleSelected: (modulo: Modulo) => void;
  removeSelectedModulo: (modulo: Modulo) => void;
  deleteModule: (modulo: Modulo) => void;
};

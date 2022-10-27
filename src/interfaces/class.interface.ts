export interface Clase {
  id: string;
  name: string;
  slug: string;
  lessonPath: string;
  status: string;
  urlVideo: string;
}

export interface ClaseInitState {
  clases: Clase[];
  clasesSelected: Clase[];
}

export type ClaseContextProps = {
  claseState: ClaseInitState;
  addNewClase: (clase: Clase) => void;
  addSelectedClase: (clase: Clase) => void;
  removeSelectedClase: (clase: Clase) => void;
  deleteClase: (clase: Clase) => void;
};

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
}

export type ClaseContextProps = {
  claseState: ClaseInitState;
  addNewClase: (clase: Clase) => void;
};

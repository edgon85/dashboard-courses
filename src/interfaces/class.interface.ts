export interface Clase {
  id: string;
  name: string;
  slug: string;
  lessonPath: string;
}

export interface ClaseInitState {
  clases: Clase[];
}

export type ClaseContextProps = {
  claseState: ClaseInitState;
};

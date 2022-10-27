import { createContext } from 'react';
import { ModuloContextProps } from '../../interfaces';

export const ModuloContext = createContext<ModuloContextProps>(
  {} as ModuloContextProps
);

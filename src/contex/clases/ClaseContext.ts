import { createContext } from 'react';
import { ClaseContextProps } from '../../interfaces';

export const ClaseContext = createContext<ClaseContextProps>(
  {} as ClaseContextProps
);

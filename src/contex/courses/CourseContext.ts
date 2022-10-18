import { createContext } from 'react';
import { CourseContextProps } from '../../interfaces';

export const CourseContext = createContext<CourseContextProps>(
  {} as CourseContextProps
);

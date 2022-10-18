import { useReducer } from 'react';
import { COURSES_DATA } from '../../data';
import { CourseState } from '../../interfaces';
import { CourseContext, courseReducer } from './';

const INITIAL_STATE: CourseState = {
  courses: COURSES_DATA,
};

type props = {
  children: JSX.Element | JSX.Element[];
};

export const CoursesProvider = ({ children }: props) => {
  const [courseState, dispatch] = useReducer(courseReducer, INITIAL_STATE);

  return (
    <CourseContext.Provider
      value={{
        courseState,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

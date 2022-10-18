import { useReducer } from 'react';
import { COURSES_DATA } from '../../data';
import { Course, CourseState } from '../../interfaces';
import { CourseContext, courseReducer } from './';

const INITIAL_STATE: CourseState = {
  courses: COURSES_DATA,
};

type props = {
  children: JSX.Element | JSX.Element[];
};

export const CoursesProvider = ({ children }: props) => {
  const [courseState, dispatch] = useReducer(courseReducer, INITIAL_STATE);

  const addCourse = (course: Course) => {
    dispatch({ type: 'addCourse', payload: course });
  };

  return (
    <CourseContext.Provider
      value={{
        courseState,

        addCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

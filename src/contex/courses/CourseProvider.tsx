import { useReducer } from 'react';
import { COURSES_DATA } from '../../data';
import { Course, CourseInitState } from '../../interfaces';
import { CourseContext, courseReducer } from './';

const INITIAL_STATE: CourseInitState = {
  courses: COURSES_DATA,
  coursesSelected: [],
};

type props = {
  children: JSX.Element | JSX.Element[];
};

export const CoursesProvider = ({ children }: props) => {
  const [courseState, dispatch] = useReducer(courseReducer, INITIAL_STATE);

  const addCourse = (course: Course) => {
    dispatch({ type: 'addCourse', payload: course });
  };

  const addCourseSelected = (CourseId: number) => {
    dispatch({ type: 'addCourseSelected', payload: CourseId });
  };

  const removeCourseSelected = (CourseId: number) => {
    dispatch({ type: 'removeCourseSelected', payload: CourseId });
  };

  return (
    <CourseContext.Provider
      value={{
        courseState,

        addCourse,
        addCourseSelected,
        removeCourseSelected,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

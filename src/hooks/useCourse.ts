import { useContext } from 'react';
import { CourseContext } from '../contex';

export const useCourse = () => {
  const { courseState, addCourse } = useContext(CourseContext);

  return {
    ...courseState,

    addCourse,
  };
};

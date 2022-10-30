import { useContext } from 'react';
import { CourseContext } from '../contex';

export const useCourse = (courseSelected?: boolean) => {
  const {
    courseState,
    addCourse,
    addCourseSelected,
    removeCourseSelected,
    deleteCourseSelected,
    fiterCourse,
    loadCourses,
  } = useContext(CourseContext);

  const selectCourse = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = parseInt(event.target.value);

    !courseSelected
      ? addCourseSelected(selectedId)
      : removeCourseSelected(selectedId);
  };

  return {
    ...courseState,

    addCourse,
    addCourseSelected,
    removeCourseSelected,
    deleteCourseSelected,

    selectCourse,
    fiterCourse,
    loadCourses,
  };
};

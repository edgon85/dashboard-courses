import { Course, CourseInitState } from '../../interfaces';

/* type CourseAction =
  | { type: 'addCourse'; payload: Course }
  | { type: 'toggleTodo'; payload: { id: string } }; */
type CourseAction =
  | { type: 'loadCourses'; payload: Course[] }
  | { type: 'addCourse'; payload: Course }
  | { type: 'filterCourse'; payload: string }
  | { type: 'addCourseSelected'; payload: number }
  | { type: 'removeCourseSelected'; payload: number }
  | { type: 'deleteCourseSelected'; payload: string };

export const courseReducer = (
  state: CourseInitState,
  action: CourseAction
): CourseInitState => {
  switch (action.type) {
    case 'loadCourses':
      return {
        ...state,
        courses: action.payload,
      };

    case 'addCourse':
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };

    case 'addCourseSelected':
      return {
        ...state,
        coursesSelected: [
          ...new Set([...state.coursesSelected, action.payload]),
        ],
      };

    case 'removeCourseSelected':
      return {
        ...state,
        coursesSelected: state.coursesSelected.filter(
          (id) => id !== action.payload
        ),
      };

    case 'deleteCourseSelected':
      return {
        ...state,
        courses: state.courses.filter((course) => course.id !== action.payload),
      };

    case 'filterCourse':
      return {
        ...state,
        courses: state.courses.filter((course) =>
          course.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    default:
      return state;
  }
};
/* 
const remainingUsers: User[] = users.filter(
      (user) => !ids.includes(user.id)
    );
*/

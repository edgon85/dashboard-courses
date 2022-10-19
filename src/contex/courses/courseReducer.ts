import { Course, CourseInitState } from '../../interfaces';

/* type CourseAction =
  | { type: 'addCourse'; payload: Course }
  | { type: 'toggleTodo'; payload: { id: string } }; */
type CourseAction =
  | { type: 'addCourse'; payload: Course }
  | { type: 'addCourseSelected'; payload: number }
  | { type: 'removeCourseSelected'; payload: number };

export const courseReducer = (
  state: CourseInitState,
  action: CourseAction
): CourseInitState => {
  switch (action.type) {
    case 'addCourse':
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };

    case 'addCourseSelected':
      return {
        ...state,
        coursesSelected: [...state.coursesSelected, action.payload],
      };

    case 'removeCourseSelected':
      return {
        ...state,
        coursesSelected: state.coursesSelected.filter(
          (id) => id !== action.payload
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

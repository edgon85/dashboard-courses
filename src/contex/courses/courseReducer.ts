import { Course, CourseState } from '../../interfaces';

type CourseAction =
  | { type: 'addCourse'; payload: Course }
  | { type: 'toggleTodo'; payload: { id: string } };

export const courseReducer = (
  state: CourseState,
  action: CourseAction
): CourseState => {
  switch (action.type) {
    case 'addCourse':
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };

    default:
      return state;
  }
};

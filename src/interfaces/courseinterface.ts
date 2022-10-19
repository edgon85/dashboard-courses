export interface Course {
  id: string;
  description: string;
  module: string;
  currencyCode: string;
  hours: number;
  image: string;
  name: string;
  professor: string;
  slug: string;
  status: string;
  price: number;
}

export interface CourseInitState {
  courses: Course[];
  coursesSelected: number[];
}

export type CourseContextProps = {
  courseState: CourseInitState;
  addCourse: (course: Course) => void;
  addCourseSelected: (id: number) => void;
  removeCourseSelected: (id: number) => void;
};
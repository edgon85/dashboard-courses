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

export interface CourseState {
  courses: Course[];
}

export type CourseContextProps = {
  courseState: CourseState;
  addCourse: (course: Course) => void;
};
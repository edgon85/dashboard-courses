export interface Course {
  description: string;
  module: string;
  currencyCode: string;
  hours: number;
  image: string;
  name: string;
  professor: string;
  slug: string;
  status: string;
}


export interface CourseState {
  courses: Course[];
}

export type CourseContextProps = {
  courseState: CourseState;
};
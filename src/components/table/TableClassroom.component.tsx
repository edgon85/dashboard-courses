import { ChangeEvent, useEffect, useState } from 'react';
import { useCourse } from '../../hooks';
import { TableText } from '../../styled-components';
import { TableRow } from './TableRow';

const initForm = {
  isSelected: false,
};

export const TableClassroomComponent = () => {
  const { courses, coursesSelected, addCourseSelected, removeCourseSelected } =
    useCourse();

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (courses.length !== coursesSelected.length) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }, [coursesSelected]);

  const selectAllCourses = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    setIsChecked(checked);

    if (!isChecked) {
      const filterId = courses.map((course) => parseInt(course.id));
      filterId.forEach((item) => addCourseSelected(item));
    } else {
      coursesSelected.forEach((item) => removeCourseSelected(item));
    }
  };

  return (
    <>
      <div className="data-table">
        <div className="data-table__head">
          <span className="text-box-content">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={selectAllCourses}
            />
          </span>
          <span>
            <TableText>Nombre del curso</TableText>
          </span>
          <span>
            <TableText>Slug</TableText>
          </span>
          <span>
            <TableText>Estatus</TableText>
          </span>
          <span>
            <TableText>Precio</TableText>
          </span>
          <span>
            <TableText>Duración</TableText>
          </span>
        </div>
        {/* {courses.map((course) => (
          <TableRow key={course.id} course={course} isSelected={true} />
        ))} */}
        {courses.map((course) => {
          const isSelected = coursesSelected.includes(parseInt(course.id));
          return (
            <TableRow key={course.id} course={course} isSelected={isSelected} />
          );
        })}
      </div>
    </>
  );
};

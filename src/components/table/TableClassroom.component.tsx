import { useCourse } from '../../hooks';
import { TableText } from '../../styled-components';
import { TableRow } from './TableRow';

export const TableClassroomComponent = () => {
  const { courses } = useCourse();

  console.log(courses);

  return (
    <>
      <div className="data-table">
        <div className="data-table__head">
          <span className="text-box-content">
            <input type="checkbox" />
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
        {courses.map((course) => (
          <TableRow key={course.id} course={course} />
        ))}
        {/* <TableRow />
        <TableRow /> */}
      </div>
    </>
  );
};

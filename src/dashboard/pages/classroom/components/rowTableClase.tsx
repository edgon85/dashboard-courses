import { Clase } from '../../../../interfaces';
import { TableText } from '../../../../styled-components';

export const RowTableClase = (clase: Clase) => {
  return (
    <div key={clase.id} className="data-table__row row-class">
      <span className="text-box-content">
        <input
          type="checkbox"
          name="isSlected"
          /*   value={course.id}
onChange={selectCourse}
checked={isSelected} */
        />
      </span>
      <span>
        <TableText>{clase.name}</TableText>
      </span>
      <span>
        <TableText>{clase.slug}</TableText>
      </span>
      <span>
        <TableText>{clase.lessonPath}</TableText>
      </span>
    </div>
  );
};

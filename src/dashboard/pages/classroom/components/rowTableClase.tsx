import { useClase } from '../../../../hooks';
import { Clase } from '../../../../interfaces';
import { TableText } from '../../../../styled-components';

type props = {
  clase: Clase;
  isSelected: boolean;
};

export const RowTableClase = ({ clase, isSelected }: props) => {
  const { addSelectedClase, removeSelectedClase } = useClase();

  const selectClase = () => {
    !isSelected ? addSelectedClase(clase) : removeSelectedClase(clase);
  };

  return (
    <div className="data-table__row row-class">
      <span className="text-box-content">
        <input
          type="checkbox"
          name="isSlected"
          onChange={selectClase}
          checked={isSelected}
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

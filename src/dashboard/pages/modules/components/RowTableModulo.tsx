import { useModulo } from '../../../../hooks';
import { Modulo } from '../../../../interfaces';
import { TableText } from '../../../../styled-components';

type props = {
  modulo: Modulo;
  isSelected: boolean;
};

export const RowTableModulo = ({ modulo, isSelected }: props) => {
  const { addModuleSelected, removeSelectedModulo } = useModulo();

  const selectModulo = () => {
    !isSelected ? addModuleSelected(modulo) : removeSelectedModulo(modulo);
  };

  return (
    <div className="data-table__row">
      <span className="text-box-content">
        <input
          type="checkbox"
          name="isSlected"
          onChange={selectModulo}
          checked={isSelected}
        />
      </span>
      <span>
        <TableText>{modulo.name}</TableText>
      </span>
      <span>
        <TableText>{modulo.slug}</TableText>
      </span>
      <span>
        <TableText>{modulo.order}</TableText>
      </span>
    </div>
  );
};

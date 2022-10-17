import { TableText } from '../../styled-components';
import { TableRow } from './TableRow';

export const TableClassroomComponent = () => {
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
        <TableRow />
        <TableRow />
      </div>
    </>
  );
};

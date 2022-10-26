import { useNavigate } from 'react-router-dom';
import { SearchComponent } from '../../../components';
import { useClase } from '../../../hooks';
import {
  Button,
  ButtonPrimary,
  TableText,
  Title,
} from '../../../styled-components';
import { RowTableClase } from './components';

export const ClassroomPage = () => {
  const { clases } = useClase();
  const navigate = useNavigate();

  return (
    <>
      <div className="classroom__content">
        <SearchComponent searchTitle="clases" />

        <div className="page-heade">
          <Title>Todos las clases ({clases.length})</Title>

          <div className="actions">
            <Button>Eliminar</Button>

            <ButtonPrimary onClick={() => navigate('/clases/new')}>
              Agregar clase
            </ButtonPrimary>
          </div>
        </div>

        <div className="data-table">
          <div className="data-table__head table-class">
            <span className="text-box-content">
              <input
                type="checkbox"
                disabled
                /*          checked={isChecked}
              onChange={selectAllCourses} */
              />
            </span>
            <span>
              <TableText>Nombre de la clase</TableText>
            </span>
            <span>
              <TableText>Slug</TableText>
            </span>
            <span>
              <TableText>Lesson path</TableText>
            </span>
          </div>
          {/* ················································· */}
          {clases.map((clase) => {
            return <RowTableClase key={clase.id} {...clase} />;
          })}
        </div>
      </div>
    </>
  );
};

import { useNavigate } from 'react-router-dom';
import { SearchComponent } from '../../../components';
import { useClase, useModal } from '../../../hooks';
import {
  Button,
  ButtonPrimary,
  TableText,
  Title,
} from '../../../styled-components';
import { RowTableClase } from './components';

export const ClassroomPage = () => {
  const { clases, clasesSelected } = useClase();
  const navigate = useNavigate();
  const { toogleModal } = useModal();

  return (
    <>
      <div className="classroom__content">
        <SearchComponent searchTitle="clases" />

        <section className="page-heade" aria-labelledby="title-content">
          <Title>Todos las clases ({clases.length})</Title>

          <div className="actions">
            {clasesSelected.length > 0 && (
              <Button onClick={() => toogleModal('clase')}>
                Eliminar ({clasesSelected.length}) clases
              </Button>
            )}

            <ButtonPrimary onClick={() => navigate('/clases/new')}>
              Agregar clase
            </ButtonPrimary>
          </div>
        </section>

        <section className="data-table" aria-label="table data">
          <div className="data-table__head table-class">
            <span className="text-box-content">
              <input type="checkbox" disabled />
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
            const isClassInClaseSelected = clasesSelected.includes(clase);

            return (
              <RowTableClase
                key={clase.id}
                clase={clase}
                isSelected={isClassInClaseSelected}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

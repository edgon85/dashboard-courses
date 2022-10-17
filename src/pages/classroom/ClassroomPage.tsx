import { SearchComponent, TableClassroomComponent } from '../../components';
import { Button, ButtonPrimary, Title } from '../../styled-components';

export const ClassroomPage = () => {
  return (
    <>
      <div className="classroom__content">
        <SearchComponent searchTitle="clases" />

        <div className="page-heade">
          <Title>Todos los cursos (5)</Title>
          <div className="actions">
            <Button>Eliminar curso</Button>
            <ButtonPrimary>Agregar curso</ButtonPrimary>
          </div>
        </div>

        <TableClassroomComponent />
      </div>
    </>
  );
};

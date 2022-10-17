import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import { SearchComponent, TableClassroomComponent } from '../../../components';
import { Button, ButtonPrimary, Title } from '../../../styled-components';

export const CoursesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SearchComponent searchTitle="curso" />
      <div className="page-heade">
        <Title>Todos los cursos (5)</Title>
        <div className="actions">
          <Button>Eliminar curso</Button>
          <ButtonPrimary onClick={() => navigate('/cursos/new')}>
            Agregar curso
          </ButtonPrimary>
        </div>
      </div>

      <TableClassroomComponent />
    </>
  );
};

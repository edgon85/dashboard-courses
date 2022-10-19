import { useNavigate } from 'react-router-dom';
import { SearchComponent, TableClassroomComponent } from '../../../components';
import { useCourse } from '../../../hooks';
import { Button, ButtonPrimary, Title } from '../../../styled-components';

export const CoursesPage = () => {
  const navigate = useNavigate();
  const { courses, coursesSelected } = useCourse();

  return (
    <>
      <SearchComponent searchTitle="curso" />
      <div className="page-heade">
        <Title>Todos los cursos ({courses.length})</Title>
        <div className="actions">
          {coursesSelected.length !== 0 && (
            <Button>
              Eliminar ({coursesSelected.length}) curso
              {coursesSelected.length <= 1 ? '' : 's'}
            </Button>
          )}
          <ButtonPrimary onClick={() => navigate('/cursos/new')}>
            Agregar curso
          </ButtonPrimary>
        </div>
      </div>

      <TableClassroomComponent />
    </>
  );
};

import { useNavigate } from 'react-router-dom';
import { SearchComponent, TableClassroomComponent } from '../../../components';
import { useCourse, useModal } from '../../../hooks';
import { Button, ButtonPrimary, Title } from '../../../styled-components';

export const CoursesPage = () => {
  const navigate = useNavigate();
  const { courses, coursesSelected } = useCourse();
  const { toogleModal } = useModal();

  const handleOpenModalDelete = () => {
    toogleModal('course');
  };

  return (
    <>
      <SearchComponent searchTitle="curso" />
      <section className="page-heade" aria-labelledby="title-content">
        {courses.length >= 1 ? (
          <Title>Todos los cursos ({courses.length})</Title>
        ) : (
          <Title>No hay cursos agregados</Title>
        )}
        <div className="actions">
          {coursesSelected.length !== 0 && (
            <Button onClick={handleOpenModalDelete}>
              Eliminar ({coursesSelected.length}) curso
              {coursesSelected.length <= 1 ? '' : 's'}
            </Button>
          )}
          <ButtonPrimary
            onClick={() => navigate('/cursos/new')}
            aria-label="agregar curso"
          >
            Agregar curso
          </ButtonPrimary>
        </div>
      </section>

      {courses.length > 0 && <TableClassroomComponent />}
    </>
  );
};

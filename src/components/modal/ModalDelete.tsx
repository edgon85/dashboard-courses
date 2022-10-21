import { useMemo } from 'react';
import { useCourse, useModal } from '../../hooks';
import { Course } from '../../interfaces';
import { Button, ButtonPrimary } from '../../styled-components';

const filter = (data: number[], data2: Course[]): [] => {
  let dataToRetun: any = [];
  data.forEach((course) => {
    data2.filter((item: Course) => {
      if (item.id === `${course}`) {
        dataToRetun.push(item);
      }
    });
  });

  return dataToRetun;
};

export const ModalDelete = () => {
  const { isModalOpen, toogleModal } = useModal();
  const {
    courses,
    coursesSelected,
    deleteCourseSelected,
    removeCourseSelected,
  } = useCourse();
  // const [itemToDelete, setItemToDelete] = useState<Course[]>([]);

  let itemToDelete = useMemo(
    () => filter(coursesSelected, courses),
    [isModalOpen]
  );

  const handleDeleteCourses = () => {
    itemToDelete.forEach((item: Course) => {
      deleteCourseSelected(item.id);
      removeCourseSelected(Number(item.id));
      toogleModal();
    });
  };

  const handleButtonCancel = () => {
    toogleModal();
  };

  return (
    <>
      <div className={`modal ${isModalOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <h3>¿Deseas eliminar los cursos seleccionados?</h3>
          <p>Estas a punto de eliminar los siguientes cursos:</p>
          <ol>
            {itemToDelete.map((item: Course) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ol>
          <div className="modal-actions">
            <Button onClick={handleDeleteCourses}>Eliminar</Button>
            <ButtonPrimary onClick={handleButtonCancel}>Cancelar</ButtonPrimary>
          </div>
        </div>
      </div>
    </>
  );
};

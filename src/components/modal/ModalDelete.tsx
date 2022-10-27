import { useMemo, useState } from 'react';
import { useClase, useCourse, useModal, useModulo } from '../../hooks';
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
  const { isModalOpen, toogleModal, typeDelete } = useModal();
  const {
    courses,
    coursesSelected,
    deleteCourseSelected,
    removeCourseSelected,
  } = useCourse();
  const { clasesSelected, deleteClase, removeSelectedClase } = useClase();
  const { modulosSelected, removeSelectedModulo, deleteModule } = useModulo();

  let itemToDelete = useMemo(
    () => filter(coursesSelected, courses),
    [isModalOpen]
  );

  const handleDeleteCourses = () => {
    itemToDelete.forEach((item: Course) => {
      deleteCourseSelected(item.id);
      removeCourseSelected(Number(item.id));
      toogleModal('');
    });
  };

  const handleDeleteClases = () => {
    clasesSelected.forEach((item) => {
      deleteClase(item);
      removeSelectedClase(item);
      toogleModal('');
    });
  };

  const handleDeleteModulos = () => {
    modulosSelected.forEach((item) => {
      deleteModule(item);
      removeSelectedModulo(item);
      toogleModal('');
    });
  };

  const handleButtonCancel = () => {
    toogleModal('');
  };

  switch (typeDelete) {
    case 'course':
      return (
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
              <ButtonPrimary onClick={handleButtonCancel}>
                Cancelar
              </ButtonPrimary>
            </div>
          </div>
        </div>
      );

    case 'clase':
      return (
        <div className={`modal ${isModalOpen ? 'open' : ''}`}>
          <div className="modal-content">
            <h3>¿Deseas eliminar las clases seleccionadas?</h3>
            <p>Estas a punto de eliminar las siguientes clases:</p>
            <ol>
              {clasesSelected.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ol>
            <div className="modal-actions">
              <Button onClick={handleDeleteClases}>Eliminar</Button>
              <ButtonPrimary onClick={handleButtonCancel}>
                Cancelar
              </ButtonPrimary>
            </div>
          </div>
        </div>
      );

    case 'modulo':
      return (
        <div className={`modal ${isModalOpen ? 'open' : ''}`}>
          <div className="modal-content">
            <h3>¿Deseas eliminar los modulos seleccionados?</h3>
            <p>Estas a punto de eliminar las siguientes modulos:</p>
            <ol>
              {modulosSelected.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ol>
            <div className="modal-actions">
              <Button onClick={handleDeleteModulos}>Eliminar</Button>
              <ButtonPrimary onClick={handleButtonCancel}>
                Cancelar
              </ButtonPrimary>
            </div>
          </div>
        </div>
      );

    default:
      return <></>;
  }
};
/*   return (
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
  ); */

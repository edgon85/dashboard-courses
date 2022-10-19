import { useModal } from '../../hooks';
import { Button, ButtonPrimary } from '../../styled-components';

export const ModalDelete = () => {
  const { isModalOpen, toogleModal } = useModal();

  return (
    <>
      <div className={`modal ${isModalOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <h3>¿Deseas eliminar los cursos seleccionados?</h3>
          <p>Estas a punto de eliminar los siguientes cursos:</p>
          <ol>
            <li>Curso de CSS Grid Layout e Interfaces</li>
            <li>Curso esencial de JavaScript y el DOM</li>
          </ol>
          <div className="modal-actions">
            <Button>Eliminar</Button>
            <ButtonPrimary onClick={() => toogleModal()}>
              Cancelar
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </>
  );
};

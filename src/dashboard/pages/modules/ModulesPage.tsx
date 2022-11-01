import { useNavigate } from 'react-router-dom';
import { SearchComponent } from '../../../components';
import { useModal, useModulo } from '../../../hooks';
import {
  Button,
  ButtonPrimary,
  TableText,
  Title,
} from '../../../styled-components';
import { RowTableModulo } from './components';

export const ModulesPage = () => {
  const navigate = useNavigate();
  const { modulos, modulosSelected } = useModulo();
  const { toogleModal } = useModal();

  return (
    <>
      <SearchComponent searchTitle="modulo" />
      <section className="page-heade" aria-labelledby="title-content">
        <Title>Todos los modulos({modulos.length})</Title>
        <div className="actions">
          {modulosSelected.length > 0 && (
            <Button onClick={() => toogleModal('modulo')}>
              Eliminar ({modulosSelected.length}) modulo
            </Button>
          )}
          <ButtonPrimary onClick={() => navigate('/modulos/new')}>
            Agregar modulo
          </ButtonPrimary>
        </div>
      </section>

      <section className="data-table" aria-label="table data">
        <div className="data-table__head">
          <span className="text-box-content">
            <input type="checkbox" disabled />
          </span>
          <span>
            <TableText>Nombre del modulo</TableText>
          </span>
          <span>
            <TableText>Título</TableText>
          </span>
          <span>
            <TableText>Orden</TableText>
          </span>
        </div>
        {/* ······················ */}

        {modulos.map((modulo) => {
          const isSelected = modulosSelected.includes(modulo);

          return (
            <RowTableModulo
              key={modulo.id}
              modulo={modulo}
              isSelected={isSelected}
            />
          );
        })}
      </section>
    </>
  );
};

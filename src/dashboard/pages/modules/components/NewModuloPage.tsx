import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, useModulo, useNotificationAlert } from '../../../../hooks';
import { Modulo } from '../../../../interfaces';
import {
  Button,
  ButtonPrimary,
  Input,
  InputGroup,
  Label,
  Title,
} from '../../../../styled-components';

const INIT_FORM: Modulo = {
  id: '',
  name: '',
  slug: '',
  modulo: '',
  order: 1,
};

export const NewModuloPage = () => {
  const navigate = useNavigate();
  const { formState, onInputChange } = useForm(INIT_FORM);
  const { addModule } = useModulo();
  const { setNotification } = useNotificationAlert();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addModule({ ...formState, id: `${new Date().getTime()}` });
    navigate('/modulos');

    setNotification('Modulo agregado', `${formState.name}`);
  };

  return (
    <>
      <Title>Nuevo modulo</Title>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <InputGroup>
            <Label>Nombre</Label>
            <Input
              type="text"
              name="name"
              value={formState.name}
              onChange={onInputChange}
            />
          </InputGroup>
          <InputGroup>
            <Label>Slug</Label>
            <Input
              type="text"
              name="slug"
              value={formState.slug}
              onChange={onInputChange}
            />
          </InputGroup>
        </div>
        <div className="form-group-row">
          <InputGroup>
            <Label>modulo</Label>
            <Input
              type="text"
              name="modulo"
              value={formState.modulo}
              onChange={onInputChange}
            />
          </InputGroup>
          <InputGroup>
            <Label>Orden</Label>
            <Input
              type="number"
              name="order"
              value={formState.order}
              onChange={onInputChange}
            />
          </InputGroup>
        </div>
        <div className="form-actions">
          <Button onClick={() => navigate('/modulos')}>Cancelar</Button>
          <ButtonPrimary type="submit">Guardar</ButtonPrimary>
        </div>
      </form>
    </>
  );
};

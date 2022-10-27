import { FormEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import { useClase, useForm, useNotificationAlert } from '../../../../hooks';
import { Clase } from '../../../../interfaces';
import {
  Button,
  ButtonPrimary,
  Input,
  InputGroup,
  Label,
  Select,
  TextArea,
  Title,
} from '../../../../styled-components';

const INIT_FORM: Clase = {
  id: '',
  name: '',
  slug: '',
  lessonPath: '',
  status: '',
  urlVideo: '',
};

export const AddClasePage = () => {
  const navigate = useNavigate();
  const { formState, onInputChange, onSelectChange } = useForm(INIT_FORM);
  const { addNewClase } = useClase();
  const { setNotification } = useNotificationAlert();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addNewClase({
      ...formState,
      id: `${new Date().getTime()}`,
    });
    setNotification('Clase agregado', `${formState.name}`);
    navigate('/clases');
  };

  return (
    <>
      <Title>Nueva clase</Title>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <InputGroup>
            <Label>Nombre de la clase</Label>
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
            <Label>Status</Label>
            <Select
              name="status"
              onChange={onSelectChange}
              defaultValue="default"
            >
              <option disabled value="default">
                - Seleccione -
              </option>
              <option value="privado">Privado</option>
              <option value="publico">Publico</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Enlace de YouTube</Label>
            <Input
              type="text"
              name="ulrVideo"
              value={formState.urlVideo}
              onChange={onInputChange}
            />
          </InputGroup>
        </div>
        <div className="form-group-row">
          <InputGroup>
            <Label>Lesson Path</Label>
            <Input
              type="text"
              name="lessonPath"
              value={formState.lessonPath}
              onChange={onInputChange}
            />
          </InputGroup>
          <InputGroup></InputGroup>
        </div>
        <div className="form-group-row">
          <InputGroup>
            <Label>Descripción</Label>

            <TextArea
              name="description"
              //   defaultValue={formState.description}
              //   onChange={onTextareaChange}
            ></TextArea>
          </InputGroup>
        </div>

        <div className="form-actions">
          <Button onClick={() => navigate('/clases')}>Cancelar</Button>
          <ButtonPrimary type="submit">Guardar</ButtonPrimary>
        </div>
      </form>
    </>
  );
};

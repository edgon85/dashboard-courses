import { useNavigate } from 'react-router-dom';
import {
  ButtonPrimary,
  Button,
  Input,
  InputGroup,
  Label,
  Select,
  TextArea,
  Title,
} from '../../../styled-components';

export const NewCourse = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title>Nuevo curso</Title>
      <form className="form">
        <div className="form-group-row">
          <InputGroup>
            <Label>Nombre del curso</Label>
            <Input type="text" placeholder="nombre del curso" />
          </InputGroup>

          <InputGroup>
            <Label>Slug</Label>
            <Input type="text" placeholder="Slug" />
          </InputGroup>
        </div>

        <div className="form-group-row">
          <InputGroup>
            <Label>Estatus</Label>
            <Select>
              <option value="">Draft</option>
              <option value="">Review</option>
              <option value="">Uploading</option>
              <option value="">Published</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>Profesor</Label>
            <Select>
              <option value="">Sandra Mayer</option>
              <option value="">Leonidas Esteban</option>
              <option value="">Mariado Lopéz</option>
              <option value="">Maria del Carmen Londoño</option>
            </Select>
          </InputGroup>
        </div>

        <div className="form-group-row">
          <InputGroup>
            <Label>Duracion en horas</Label>
            <Input type="text" placeholder="nombre del curso" />
          </InputGroup>

          <InputGroup>
            <Label>Modulo</Label>
            <Input type="text" placeholder="Slug" />
          </InputGroup>
        </div>

        <div className="form-group-row">
          <InputGroup>
            <Label>Precio</Label>
            <Input type="text" placeholder="nombre del curso" />
          </InputGroup>

          <InputGroup>
            <Label>Código de moneda</Label>
            <Select>
              <option value="">USD</option>
              <option value="">MXN</option>
              <option value="">GTQ</option>
            </Select>
          </InputGroup>
        </div>

        <div>
          <label htmlFor="file-upload" className="custom-file-upload">
            Agregar imagen
          </label>
          <input id="file-upload" type="file" />
        </div>

        <div className="form-group-row">
          <InputGroup>
            <Label>Descripción del curso</Label>

            <TextArea></TextArea>
          </InputGroup>
        </div>

        <div className="form-actions">
          <Button onClick={() => navigate('/cursos')}>Cancelar</Button>
          <ButtonPrimary>Guardar</ButtonPrimary>
        </div>
      </form>
    </>
  );
};

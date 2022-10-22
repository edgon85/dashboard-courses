import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCourse, useForm, useNotificationAlert } from '../../../hooks';
import { Course } from '../../../interfaces';
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

const initData: Course = {
  id: '',
  name: '',
  slug: '',
  status: '',
  professor: '',
  hours: 0,
  currencyCode: '',
  image: '',
  description: '',
  module: '',
  price: 0,
};

export const NewCourse = () => {
  const navigate = useNavigate();
  const { formState, onInputChange, onSelectChange, onTextareaChange } =
    useForm(initData);
  const { addCourse } = useCourse();
  const { setNotification, hideNotification } = useNotificationAlert();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    let newCourse: Course = {
      ...formState,
      id: `${new Date().getTime()}`,
      hours: Number(formState.hours),
      price: Number(formState.price),
    };

    addCourse(newCourse);
    navigate('/cursos');
    setNotification(
      'Curso agregado',
      `${formState.name} fue agregado correctamente.`
    );
    // hideNotification();
  };

  return (
    <>
      <Title>Nuevo curso</Title>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <InputGroup>
            <Label>Nombre del curso</Label>
            <Input
              type="text"
              placeholder="nombre del curso"
              name="name"
              value={formState.name}
              onChange={onInputChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>Slug</Label>
            <Input
              type="text"
              placeholder="Slug"
              name="slug"
              value={formState.slug}
              onChange={onInputChange}
            />
          </InputGroup>
        </div>

        <div className="form-group-row">
          <InputGroup>
            <Label>Estatus</Label>
            <Select
              name="status"
              onChange={onSelectChange}
              defaultValue="default"
            >
              <option disabled value="default">
                - Seleccione -
              </option>
              <option value="draft">Draft</option>
              <option value="review">Review</option>
              <option value="uploading">Uploading</option>
              <option value="published">Published</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>Profesor</Label>
            <Select
              name="professor"
              onChange={onSelectChange}
              defaultValue="default"
            >
              <option disabled value="default">
                - Seleccione -
              </option>
              <option value="Sandra Mayer">Sandra Mayer</option>
              <option value="Leonidas Esteban">Leonidas Esteban</option>
              <option value="Mariado Lopéz">Mariado Lopéz</option>
              <option value="Maria del Carmen Londoño">
                Maria del Carmen Londoño
              </option>
            </Select>
          </InputGroup>
        </div>

        <div className="form-group-row">
          <InputGroup>
            <Label>Duración en horas</Label>
            <Input
              type="number"
              placeholder="nombre del curso"
              name="hours"
              value={formState.hours}
              onChange={onInputChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>Modulo</Label>
            <Input
              type="text"
              placeholder="Slug"
              name="module"
              value={formState.module}
              onChange={onInputChange}
            />
          </InputGroup>
        </div>

        <div className="form-group-row">
          <InputGroup>
            <Label>Precio</Label>
            <Input
              type="number"
              placeholder="nombre del curso"
              name="price"
              value={formState.price}
              onChange={onInputChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>Código de moneda</Label>
            <Select
              name="currencyCode"
              onChange={onSelectChange}
              defaultValue="default"
            >
              <option disabled value="default">
                - Seleccione -
              </option>
              <option value="usd">USD</option>
              <option value="mxn">MXN</option>
              <option value="gtq">GTQ</option>
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

            <TextArea
              name="description"
              defaultValue={formState.description}
              onChange={onTextareaChange}
            ></TextArea>
          </InputGroup>
        </div>

        <div className="form-actions">
          <Button onClick={() => navigate('/cursos')}>Cancelar</Button>
          <ButtonPrimary type="submit">Guardar</ButtonPrimary>
        </div>
      </form>
    </>
  );
};

import { FormEvent } from 'react';
import { useClase, useCourse, useForm, useModal, useModulo } from '../../hooks';
import { Icon } from '../ui';

type SearchProps = {
  searchTitle: string;
};

const INIT_FORM = {
  txtSearch: '',
};

export const SearchComponent = ({ searchTitle }: SearchProps) => {
  const { txtSearch, onInputChange } = useForm(INIT_FORM);
  const { loadCourses, fiterCourse } = useCourse();
  const { loadClases, filterClase } = useClase();
  const { loadModulos, filterModulo } = useModulo();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (searchTitle === 'curso' && txtSearch === '') loadCourses();
    if (searchTitle === 'clases' && txtSearch === '') loadClases();
    if (searchTitle === 'modulo' && txtSearch === '') loadModulos();

    search(txtSearch, searchTitle);
  };

  const search = (query: string, kindOfSearch: string) => {
    switch (kindOfSearch) {
      case 'curso':
        fiterCourse(query);
        break;

      case 'clases':
        filterClase(query);
        break;
      case 'modulo':
        filterModulo(query);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <section className="search-input" aria-label="search data">
        <Icon name="search" size="24" color="var(--gray)" />
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="txtSearch"
            value={txtSearch}
            onChange={onInputChange}
            placeholder={`Buscar ${searchTitle}...`}
          />
        </form>
      </section>
    </>
  );
};

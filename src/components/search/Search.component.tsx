import { Icon } from '../ui';

type SearchProps = {
  searchTitle: string;
};

export const SearchComponent = ({ searchTitle }: SearchProps) => {
  return (
    <>
      <div className="search-input">
        <Icon name="search" size="24" color="var(--gray)" />
        <input
          className="input"
          type="text"
          placeholder={`Buscar ${searchTitle}...`}
        />
      </div>
    </>
  );
};

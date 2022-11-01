import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from '../ui';

type SidebarItemProps = {
  iconName: string;
  name: string;
  path: string;
};

export const SidebarItem = ({ iconName, name, path }: SidebarItemProps) => {
  const { pathname } = useLocation();
  // const isSelected = pathname === `/${path}`;
  const isSelected = pathname.includes(path);

  return (
    <>
      <NavLink to={`${path}`} className="sidebar-item " aria-current="page">
        <div
          className={`sidebar-item__icon ${isSelected ? 'icon-selected' : ''}`}
        >
          <Icon
            name={iconName}
            size="20"
            color={`${isSelected ? 'var(--white)' : 'var(--gray)'}`}
          />
        </div>
        <span
          className={`sidebar-item_title ${isSelected ? 'title-selected' : ''}`}
        >
          {name}
        </span>
      </NavLink>
    </>
  );
};

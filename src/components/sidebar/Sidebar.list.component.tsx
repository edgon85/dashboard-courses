import { SIDEBAR_DATA } from '../../data';
import { SidebarList } from '../../styled-components';
import { SidebarItem } from './';

export const SidebarListComponent = () => {
  return (
    <SidebarList>
      {SIDEBAR_DATA.map((data) => (
        <SidebarItem
          key={data.id}
          iconName={data.iconName}
          name={data.name}
          path={data.path}
        />
      ))}
    </SidebarList>
  );
};

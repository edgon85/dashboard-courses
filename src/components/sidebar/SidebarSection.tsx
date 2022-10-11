import { Sidebar, SidebarContent, SidebarList } from '../../styled-components';
import { LogoutItem } from './LogoutItem';
import { SidebarHeader } from './SidebarHeader';
import { SidebarItem } from './SidebarItem';

export const SidebarSection = () => {
  return (
    <Sidebar>
      {/* <div className="sidebar-content"> */}
      <SidebarContent>
        <SidebarHeader />
        <SidebarList>
          <SidebarItem iconName="monitor" title={'Cursos'} />
          <SidebarItem iconName="book" title="Clases" />
          <SidebarItem iconName="box" title="Modulos" />
        </SidebarList>

        <LogoutItem />
      </SidebarContent>
      {/* </div> */}
    </Sidebar>
  );
};

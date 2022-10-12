import { Sidebar, SidebarContent } from '../../styled-components';
import { LogoutItem, SidebarHeader, SidebarListComponent } from './';

export const SidebarSection = () => {
  return (
    <Sidebar>
      <SidebarContent>
        {/* ···················· */}
        <SidebarHeader />
        {/* ···················· */}
        <SidebarListComponent />
        {/* ···················· */}
        <LogoutItem />
      </SidebarContent>
    </Sidebar>
  );
};

import {
  MainLayout,
  ModalDelete,
  NotificationAlert,
  SidebarSection,
} from '../../components';
import { Layout, LayoutContent } from '../../styled-components';

export const DashboardPage = () => {
  return (
    <Layout>
      <LayoutContent>
        {/* ·················· */}
        <SidebarSection />
        {/* ·················· */}
        <MainLayout />
        {/* <AppRouter /> */}
        {/* ·················· */}
      </LayoutContent>
      <ModalDelete />
      <NotificationAlert />
    </Layout>
  );
};

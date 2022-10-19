import { MainLayout, ModalDelete, SidebarSection } from '../../components';
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
    </Layout>
  );
};

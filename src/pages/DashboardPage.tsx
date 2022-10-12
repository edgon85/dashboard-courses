import { MainLayout, SidebarSection } from '../components';
import { AppRouter } from '../router/AppRouter';
import { Layout, LayoutContent } from '../styled-components';

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
    </Layout>
  );
};

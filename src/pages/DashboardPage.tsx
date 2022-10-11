import { LogoutItem, SidebarHeader, SidebarItem } from '../components';

export const DashboardPage = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-content">
          <div className="sidebar">
            <div className="sidebar-content">
              <SidebarHeader />
              <div className="list-item">
                <SidebarItem iconName="monitor" title={'Cursos'} />
                <SidebarItem iconName="book" title="Clases" />
                <SidebarItem iconName="box" title="Modulos" />
              </div>
              <LogoutItem />
            </div>
          </div>
          <main className="main">
            <div className="main-content">
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
              <p>Contentido</p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

import logo from '../../assets/images/logo-dash.png';

export const SidebarHeader = () => {
  return (
    <>
      <section className="header-sidebar" aria-label="Sidebar header">
        <div className="logo-content">
          <img src={logo} alt="course board logo" />
        </div>
        <p className="header-sidebar__title" id="sidebar-navigation">
          Dashboard de cursos
        </p>
      </section>
    </>
  );
};

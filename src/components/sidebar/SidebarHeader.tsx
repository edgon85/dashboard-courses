import logo from '../../assets/images/logo-dash.png';

export const SidebarHeader = () => {
  return (
    <>
      <div className="header-sidebar">
        <div className="logo-content">
          <img src={logo} alt="course board logo" />
        </div>
        <p className="header-sidebar__title">Dashboard de cursos</p>
      </div>
    </>
  );
};

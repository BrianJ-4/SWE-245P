import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidenav">
      <h2 className="sidenavTitle">Sections</h2>
      <nav className="sidenavLinks">
        <a className="active" href="#overview">Overview</a>
        <a href="#webapps">Web Apps</a>
        <a href="#hardware">Hardware</a>
        <a href="#aiml">AI / ML</a>
        <a href="#games">Games</a>
        <a href="#tools">Tools</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
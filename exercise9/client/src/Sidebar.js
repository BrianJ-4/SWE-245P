import "./Sidebar.css";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidenav">
      <h2 className="sidenavTitle">Sections</h2>
      <nav className="sidenavLinks">
        <Link to="/">
          Projects
        </Link>
        <Link to="second">
          About
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;

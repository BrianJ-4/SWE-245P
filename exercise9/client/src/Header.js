import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        <div className="brand">
          <span className="brandMark">B</span>
          <span className="brandText">BrianDev</span>
        </div>

        <nav className="navLinks">
          <Link className="active" to="/">
            Projects
          </Link>
          <Link to="second">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
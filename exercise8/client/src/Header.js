import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        <div className="brand">
          <span className="brandMark">B</span>
          <span className="brandText">BrianDev</span>
        </div>

        <nav className="navLinks">
          <a className="active" href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

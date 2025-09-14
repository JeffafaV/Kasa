import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src="/header-logo-desktop.png" alt="header-logo" />
        <div className="link_list">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

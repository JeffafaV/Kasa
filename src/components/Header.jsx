import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src="/header-logo-desktop.png" alt="header-logo" />
        <div className="link_list">
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
            to="/about"
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;

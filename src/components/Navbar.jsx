import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
const NavbarLink = ({ children, to }) => {
  const { pathname } = useLocation();
  const classNameLink = `link ${pathname === to ? "active" : ""}`;
  return (
    <Link className={classNameLink} to={to}>
      {children}
    </Link>
  );
};
export default function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <header>
      <div className="container-nav">
        <div>
          <Link to="/" className="link">
            HOME
          </Link>
        </div>
        <nav ref={navRef}>
          <div className="container-links">
            <NavbarLink to="/">Inicio</NavbarLink>
            <NavbarLink to="/dashboard">Dashboard</NavbarLink>
          </div>
          <button
            className="nav-btn nav-close-btn"
            aria-label="Close"
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </nav>
      </div>
      <button className="nav-btn" aria-label="Open" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

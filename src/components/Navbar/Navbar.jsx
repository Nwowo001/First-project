import "./Navbar.css";
import logo from "../../assets/seedfi.svg";
import ButtonComponent from "../Button/ButtonComponent";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const handleSignInClick = () => {
    navigate("/sign-in");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="#Home">
          <img src={logo} alt="Seedfi Logo" />
        </a>
      </div>
      <div className="nav-menu">
        <input
          type="checkbox"
          id="menu-toggle"
          className="menu-toggle"
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className={isMenuOpen ? "dropdown-open" : ""}>
          <li className={`nav-items ${isActive("/") ? "active" : ""}`}>
            <a href="/" className="links">
              Home
            </a>
          </li>
          <li className={`nav-items ${isActive("/About") ? "active" : ""}`}>
            <a href="/About" className="links">
              About
            </a>
          </li>
          <li className={`nav-items ${isActive("/Products") ? "active" : ""}`}>
            <a href="/Products" className="links">
              Products
            </a>
          </li>
          <li className={`nav-items ${isActive("/Blog") ? "active" : ""}`}>
            <a href="/Blog" className="links">
              Blog
            </a>
          </li>
          <li className={`nav-items ${isActive("/Contacts") ? "active" : ""}`}>
            <a href="/Contacts" className="links">
              Contact
            </a>
          </li>
          <li className={`nav-items ${isActive("/FAQ") ? "active" : ""}`}>
            <a href="/FAQ" className="links">
              FAQ
            </a>
          </li>

          <ButtonComponent
            backgroundColor="#2A8851"
            fontSize="16px"
            borderRadius="8px"
            color="white"
            border="none"
            margin="0px,0px,0px,25px"
            padding="14px 28.8px"
            cursor="pointer"
            fontFamily="Arial"
            className="sign-in"
            onClick={handleSignInClick}
          >
            Sign in
          </ButtonComponent>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

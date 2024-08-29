import "./Navbar.css";
import logo from "../../assets/seedfi.svg";
import ButtonComponent from "../Button/ButtonComponent";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const handleSignInClick = () => {
    navigate("/sign-in");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
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

        {isMobile ? (
          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                className="dropdown-open"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                {["Home", "About", "Products", "Blog", "Contacts", "FAQ"].map(
                  (item, index) => {
                    const path = item === "Home" ? "/" : `/${item}`;
                    return (
                      <motion.li
                        key={index}
                        className={`nav-items ${
                          isActive(path) ? "active" : ""
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a href={path} className="links">
                          {item}
                        </a>
                      </motion.li>
                    );
                  }
                )}
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
              </motion.ul>
            )}
          </AnimatePresence>
        ) : (
          <ul className={isMenuOpen ? "dropdown-open" : ""}>
            {["Home", "About", "Products", "Blog", "Contacts", "FAQ"].map(
              (item, index) => {
                const path = item === "Home" ? "/" : `/${item}`;
                return (
                  <li
                    key={index}
                    className={`nav-items ${isActive(path) ? "active" : ""}`}
                  >
                    <a href={path} className="links">
                      {item}
                    </a>
                  </li>
                );
              }
            )}
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
        )}
      </div>
    </div>
  );
};

export default Navbar;

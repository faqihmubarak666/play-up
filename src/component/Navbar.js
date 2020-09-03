import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "#0AC1A5" }}>
        <div
          className="navbar-container"
          style={{ backgroundColor: "#0AC1A5" }}
        >
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            PLAY UP!
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Fitur
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Kategori
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Masuk</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

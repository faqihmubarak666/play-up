import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../style/Navbar.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "../pages/landingPage/Home";
import Features from "../pages/landingPage/Features";
import Category from "../pages/landingPage/Category";
import SignIn from "../pages/landingPage/signUp/SignIn";
import PlayVideo from "../pages/landingPage/PlayVideo";

const Navbar = () => {
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
      <BrowserRouter>
        <nav
          hidden="true"
          className="navbar"
          style={{ backgroundColor: "#0AC1A5" }}
        >
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
                  to="/features"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/category"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Category
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/sign-in"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/category" component={Category} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/play-video" component={PlayVideo} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Navbar;

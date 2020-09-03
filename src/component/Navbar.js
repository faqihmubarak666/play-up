import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../style/Navbar.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "../pages/landingPage/Home";
import Services from "../pages/landingPage/Services";
import Category from "../pages/landingPage/Category";
import SignIn from "../pages/landingPage/signUp/SignIn";
import SideBar from "./SideBar";

function Navbar(props) {
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

  // const { adminPage } = props;
  // if (adminPage) {
  //   return <SideBar />;
  // }

  return (
    <>
      <BrowserRouter>
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

              <li>
                <Link
                  to="/sign-in"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle="btn--outline">Sign In</Button>}
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" component={Services} />
          <Route path="/category" component={Category} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Navbar;

import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../style/Navbar.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "../pages/landingPage/Home";
import Features from "../pages/landingPage/Features";
import Category from "../pages/landingPage/Category";
import SignInContainer from "../pages/landingPage/signIn/SignInContainer";
import PlayVideo from "../pages/landingPage/PlayVideo";
import { getAllCategory } from "../pages/admin/category/CategoryService";
import { getAllFeature } from "../pages/admin/features/FeatureService";
import { connect } from "react-redux";

const Navbar = (props) => {
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
    loadDataCategory();
    loadDataFeature();
  }, []);

  const loadDataCategory = () => {
    getAllCategory().then((response) => {
      const data = response.data;
      props.GetAllCategory(data);
    });
  };

  const loadDataFeature = () => {
    getAllFeature().then((response) => {
      const data = response.data;
      props.GetAllFeature(data);
    });
  };

  window.addEventListener("resize", showButton);

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
                <Link
                  to="/"
                  className="nav-links"
                  onClick={(closeMobileMenu, loadDataFeature, loadDataCategory)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/features"
                  className="nav-links"
                  onClick={(closeMobileMenu, loadDataFeature)}
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/category"
                  className="nav-links"
                  onClick={(closeMobileMenu, loadDataCategory)}
                >
                  Category
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/category" component={Category} />
          <Route path="/play-video" component={PlayVideo} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllCategory: (data) => dispatch({ type: "GET_CATEGORY", data: data }),
    GetAllFeature: (data) => dispatch({ type: "GET_FEATURE", data: data }),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);

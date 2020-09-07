import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "../pages/landingPage/Home";
import Features from "../pages/landingPage/Features";
import Category from "../pages/landingPage/Category";
import SignInContainer from "../pages/landingPage/signIn/SignInContainer";
import PlayVideo from "../pages/landingPage/PlayVideo";
import { SideBar } from "./SideBar";
// import "../style/Header.css";

export class Header extends Component {
  render() {
    // const { adminPage } = this.props;

    // if (adminPage == true) {
    //   return <SideBar />;
    // }
    return (
      <div>
        <BrowserRouter>
          <nav
            class="navbar navbar-expand-lg navbar-light bg-light"
            style={{ backgroundColor: "#0ac1a5", color: "black" }}
          >
            <Link
              class="navbar-brand"
              to="/"
              style={{ color: "black", fontSize: "30px" }}
            >
              PLAY UP!
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/" style={{ color: "black" }}>
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/features"
                    style={{ color: "black" }}
                  >
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/category"
                    style={{ color: "black" }}
                  >
                    Category
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/sign-in"
                    style={{ color: "black" }}
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/features" component={Features} />
            <Route path="/category" component={Category} />
            <Route path="/sign-in" component={SignInContainer} />
            <Route path="/play-video" component={PlayVideo} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Header;

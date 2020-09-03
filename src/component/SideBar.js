import React, { Component } from "react";
import "../style/SideBar.css";
import swal from "sweetalert";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import UserContainer from "../pages/admin/users/UserContainer";

export class SideBar extends Component {
  state = {
    logoutPage: false,
  };

  logout = () => {
    swal({
      title: "Are you sure?",
      text: "Logout",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Logout success", {
          icon: "success",
        });
        this.setState({
          logoutPage: !this.state.logoutPage,
        });
      } else {
        swal("Logout cancel!");
      }
    });
  };
  render() {
    if (this.state.logoutPage) {
      return <Navbar />;
    }
    return (
      <div>
        <BrowserRouter>
          <aside
            className="main-sidebar sidebar-dark-primary elevation-4"
            style={{ backgroundColor: "#0ac1a5", minHeight: "50rem" }}
          >
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
              <img
                src="dist/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
              />
              <span
                className="brand-text font-weight-light"
                style={{ color: "white" }}
              >
                PLAY UP!
              </span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                  <img
                    src="dist/img/user2-160x160.jpg"
                    className="img-circle elevation-2"
                    alt="User Image"
                  />
                </div>
                <div className="info">
                  <a href="#" className="d-block" style={{ color: "white" }}>
                    Alexander Pierce
                  </a>
                </div>
              </div>
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
                  <li className="nav-item has-treeview menu-open">
                    <Link
                      to="/admin"
                      className="nav-links"
                      style={{ color: "white" }}
                    >
                      Semua User
                    </Link>
                  </li>

                  <li className="nav-item has-treeview menu-open">
                    <Link
                      to="/match-schedule"
                      className="nav-links"
                      style={{ color: "white" }}
                    >
                      Jadwal Pertandingan
                    </Link>
                  </li>

                  <li className="nav-item has-treeview menu-open">
                    <Link
                      to="/logout"
                      className="nav-links"
                      onClick={this.logout}
                      style={{ color: "white" }}
                    >
                      Keluar
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
          </aside>
          <Switch>
            <Route path="/admin" exact component={UserContainer} />
            <Route path="/match-schedule" component={UserContainer} />
            <Route path="/logout" component={Navbar} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default SideBar;

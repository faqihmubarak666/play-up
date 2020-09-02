import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "./Navbar";

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
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
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
                <a href="#" className="d-block">
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
                  <Link to="/all-user" className="nav-links">
                    Semua User
                  </Link>
                </li>

                <li className="nav-item has-treeview menu-open">
                  <Link to="/match-schedule" className="nav-links">
                    Jadwal Pertandingan
                  </Link>
                </li>

                <li className="nav-item has-treeview menu-open">
                  <Link to="/logout" className="nav-links">
                    Keluar
                  </Link>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}

export default SideBar;

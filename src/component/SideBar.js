import React, { Component } from "react";
import "../style/SideBar.css";
import swal from "sweetalert";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import UserContainer from "../pages/admin/users/UserContainer";
import Dashboard from "../pages/admin/Dashboard";
import { connect } from "react-redux";
import Header from "./Header";
import ScheduleContainer from "../pages/admin/scheduleMatch/ScheduleContainer";
import CategoryContainer from "../pages/admin/category/CategoryContainer";

export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutPage: false,
    };
  }

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
        // this.props.history.push({
        //   pathname: "/",
        // });
      } else {
        swal("Logout cancel!");
      }
    });
  };

  render() {
    if (this.state.logoutPage) {
      return <Navbar />;
    }

    const { admin } = this.props;

    return (
      <div>
        <BrowserRouter>
          <aside
            className="main-sidebar sidebar-dark-primary elevation-4"
            style={{ backgroundColor: "#0ac1a5", minHeight: "50rem" }}
          >
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
              <span
                className="brand-text font-weight-light"
                style={{ color: "white", marginLeft: "10px" }}
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
                    src={admin.photo}
                    // className="img-circle elevation-2"
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50px",
                    }}
                    alt="Admin Image"
                  />
                </div>
                <div className="info">
                  <a
                    href="#"
                    className="d-block"
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginTop: "5px",
                    }}
                  >
                    {admin.user_full_name}
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
                      Dashboard
                      <i
                        class="fas fa-columns"
                        style={{ marginLeft: "5px", marginTop: "3px" }}
                      ></i>
                    </Link>
                  </li>

                  <li className="nav-item has-treeview menu-open">
                    <Link
                      to="/all-user"
                      className="nav-links"
                      style={{ color: "white" }}
                    >
                      All User
                      <i
                        class="fas fa-users"
                        style={{ marginLeft: "5px", marginTop: "3px" }}
                      ></i>
                    </Link>
                  </li>

                  <li className="nav-item has-treeview menu-open">
                    <Link
                      to="/match-schedule"
                      className="nav-links"
                      style={{ color: "white" }}
                    >
                      Match Schedule
                      <i
                        class="far fa-calendar-alt"
                        style={{ marginLeft: "5px", marginTop: "3px" }}
                      ></i>
                    </Link>
                  </li>

                  <li className="nav-item has-treeview menu-open">
                    <Link
                      to="/features"
                      className="nav-links"
                      style={{ color: "white" }}
                    >
                      Features
                      <i
                        class="fab fa-android"
                        style={{ marginLeft: "5px", marginTop: "3px" }}
                      ></i>
                    </Link>
                  </li>

                  <li className="nav-item has-treeview menu-open">
                    <Link
                      to="/category"
                      className="nav-links"
                      style={{ color: "white" }}
                    >
                      Category
                      <i
                        class="fas fa-list"
                        style={{ marginLeft: "5px", marginTop: "3px" }}
                      ></i>
                    </Link>
                  </li>

                  <li className="nav-item has-treeview menu-open">
                    <Link
                      to="/logout"
                      className="nav-links"
                      onClick={this.logout}
                      style={{ color: "white" }}
                    >
                      Logout
                      <i
                        class="fas fa-sign-out-alt"
                        style={{ marginLeft: "5px", marginTop: "3px" }}
                      ></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
          <Switch>
            <Route path="/admin" component={Dashboard} />
            <Route path="/all-user" component={UserContainer} />
            <Route path="/match-schedule" component={ScheduleContainer} />
            <Route path="/features" component={ScheduleContainer} />
            <Route path="/category" component={CategoryContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.rGetDataUser.Users.admin,
  };
};

export default connect(mapStateToProps)(SideBar);

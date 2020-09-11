import React, { Component } from "react";
import "../../../style/Login.css";
import swal from "sweetalert";
import SideBar from "../../../components/SideBar";
import { login } from "./SignInService";
import SignInForm from "./SignInForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameInvalid: "",
      passwordInvalid: "",
      adminPage: false,
      isLoaded: false,
    };
  }

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  getDataAdmin = () => {
    if (this.state.username === "" && this.state.password === "") {
      this.setState({
        usernameInvalid: "Invalid username",
        passwordInvalid: "Invalid password",
      });
      swal("Login Invalid", "You clicked the button!", "error");
    } else if (this.state.username === "") {
      this.setState({
        usernameInvalid: "Invalid username",
      });
      swal("Login Invalid", "You clicked the button!", "error");
    } else if (this.state.password === "") {
      this.setState({
        passwordInvalid: "Invalid password",
      });
      swal("Login Invalid", "You clicked the button!", "error");
    } else {
      login({
        username: this.state.username,
        password: this.state.password,
      })
        .then((response) => {
          if (response.data.token !== undefined) {
            const data = response;
            this.props.GetAdmin(data);
            sessionStorage.setItem("token", response.data.token);
            this.props.history.push({
              pathname: "/admin",
            });

            this.setState({
              adminPage: true,
              isLoaded: true,
            });

            swal("Login Success", "You clicked the button!", "success");
          } else {
            swal("Login Invalid", "You clicked the button!", "error");
          }
        })
        .catch((err) => {
          swal("Login Invalid", "You clicked the button!", "error");
        });
    }
  };

  render() {
    if (this.state.adminPage) {
      return <SideBar />;
    }
    return (
      <div>
        <SignInForm
          username={this.state.username}
          password={this.state.password}
          usernameInvalid={this.state.usernameInvalid}
          passwordInvalid={this.state.passwordInvalid}
          isLoaded={this.state.isLoaded}
          handleChangeInput={this.handleChangeInput}
          getDataAdmin={this.getDataAdmin}
          adminPage={this.state.adminPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetAdmin: (data) => dispatch({ type: "GET_ADMIN", data: data }),
  };
};
export default withRouter(connect(null, mapDispatchToProps)(SignInContainer));

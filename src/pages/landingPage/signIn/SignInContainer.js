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
    } else if (this.state.username === "") {
      this.setState({
        usernameInvalid: "Invalid username",
      });
    } else if (this.state.password === "") {
      this.setState({
        passwordInvalid: "Invalid password",
      });
    } else {
      login({
        username: this.state.username,
        password: this.state.password,
      })
        .then((response) => {
          if (response.data !== null) {
            const data = response.data;
            this.props.GetAdmin(data);
            // sessionStorage.setItem("token", response.result);
            this.setState({
              adminPage: !this.state.adminPage,
              isLoaded: !this.state.isLoaded,
            });

            this.props.history.push({
              pathname: "/admin",
            });
            swal("Login Success", "You clicked the button!", "success");
          } else {
            swal("Login Invalid", "You clicked the button!", "error");
          }
        })
        .catch((err) => {
          console.log("error", err);
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

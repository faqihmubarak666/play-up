import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import "../../../style/Login.css";
import swal from "sweetalert";
import SideBar from "../../../component/SideBar";
import { login } from "./ServiceSignUp";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameInvalid: "",
      passwordInvalid: "",
      adminPage: false,
    };
  }

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  getDataUser = () => {
    if (this.state.username === "" && this.state.password === "") {
      this.setState({
        usernameInvalid: "Invalid username and password !",
      });
    } else if (this.state.username === "") {
      this.setState({
        usernameInvalid: "Invalid username !",
      });
    } else if (this.state.password === "") {
      this.setState({
        passwordInvalid: "Invalid password !",
      });
    } else {
      login({
        username: this.state.username,
        password: this.state.password,
      })
        .then((response) => {
          if (response.data !== null) {
            console.log("response login", response);
            // sessionStorage.setItem("token", response.result);
            this.setState({
              adminPage: true,
            });
            this.props.history.push({
              pathname: "/",
            });
            swal("Login Success", "You clicked the button!", "success");
          } else {
            swal("Login Invalid", "You clicked the button!", "error");
          }
        })
        .catch(() => {
          swal("Login Invalid", "You clicked the button!", "error");
        });
    }
  };

  render() {
    if (this.state.adminPage) {
      return <SideBar />;
    }
    return (
      <div className="container-login">
        <Form className="login-form">
          <h2>PLAY UP!</h2>
          <FormGroup>
            <Label>Username / Email</Label>
            <Input
              name="username"
              type="email"
              placeholder="Username / Email"
              onChange={(event) => this.handleChangeInput(event)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={(event) => this.handleChangeInput(event)}
            />
          </FormGroup>
          <Button
            className="btn-lg btn-dark btn-block"
            onClick={this.getDataUser}
            style={{ backgroundColor: "#2c3c5b" }}
          >
            Masuk
          </Button>
          <div className="text-center pt-3">atau</div>
          <FacebookLoginButton className="mt-3 mb-3" />
          <GoogleLoginButton className="mt-3 mb-3" />
          <div className="text-center">
            <span>Tidak punya akun ? </span>
            <a href="/register">Buat akun</a>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignUp;

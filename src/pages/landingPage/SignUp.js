import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import "../../style/Login.css";
import swal from "sweetalert";
import SideBar from "../../component/SideBar";

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
    } else if (this.state.username !== "123" && this.state.password !== "123") {
      swal("Login Invalid", "You clicked the button!", "error");
    } else {
      swal("Login Success", "You clicked the button!", "success");
      this.props.history.push({
        pathname: "/all-user",
      });
      this.setState({
        adminPage: true,
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

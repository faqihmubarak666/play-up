import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import "../../style/Login.css";

class SignUp extends Component {
  render() {
    return (
      <div className="container-login">
        <Form className="login-form">
          <h2>PLAY UP!</h2>
          <FormGroup>
            <Label>Username / Email</Label>
            <Input type="email" placeholder="Username / Email" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Password" />
          </FormGroup>
          <Button
            className="btn-lg btn-dark btn-block"
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

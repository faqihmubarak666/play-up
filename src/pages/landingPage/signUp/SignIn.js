import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../../style/Login.css";
import swal from "sweetalert";
import SideBar from "../../../component/SideBar";
import Navbar from "../../../component/Navbar";
import { login } from "./ServiceSignIn";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import FiturChat from "../../../image/undraw_chatting_2yvo(1).svg";

class SignIn extends Component {
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
              adminPage: !this.state.adminPage,
            });
            this.props.history.push({
              pathname: "/admin",
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
          <Container>
            <Row>
              <Col>
                <img src={FiturChat} alt="fitur chat" />
              </Col>
              <Col className="container-form">
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
                <Link to="/admin">
                  <Button
                    className="btn-lg btn-dark btn-block"
                    onClick={this.getDataUser}
                    style={{ backgroundColor: "#2c3c5b" }}
                  >
                    Login
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    );
  }
}

export default SignIn;

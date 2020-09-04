import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../../style/Login.css";
import swal from "sweetalert";
import SideBar from "../../../component/SideBar";
import { login } from "./ServiceSignIn";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../../../image/undraw_secure_login_pdn4.svg";
import Footer from "../../../component/Footer";
import { connect } from "react-redux";
import Header from "../../../component/Header";
import Navbar from "../../../component/Navbar";

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
                <img src={Login} alt="picture login" />
              </Col>
              <Col className="container-form">
                <h2>PLAY UP!</h2>
                <FormGroup>
                  <Label
                    style={
                      this.state.passwordInvalid
                        ? { color: "red" }
                        : { color: "black" }
                    }
                  >
                    {this.state.usernameInvalid
                      ? this.state.usernameInvalid
                      : "Username"}
                  </Label>
                  <Input
                    name="username"
                    type="username"
                    placeholder="Username"
                    onChange={(event) => this.handleChangeInput(event)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label
                    style={
                      this.state.passwordInvalid
                        ? { color: "red" }
                        : { color: "black" }
                    }
                  >
                    {this.state.passwordInvalid
                      ? this.state.passwordInvalid
                      : "Password"}
                  </Label>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={(event) => this.handleChangeInput(event)}
                  />
                </FormGroup>
                {/* <Link to="/admin"> */}
                <Button
                  className="btn-lg btn-dark btn-block"
                  onClick={this.getDataUser}
                  style={{ backgroundColor: "#2c3c5b" }}
                >
                  Login
                </Button>
                {/* </Link> */}
              </Col>
            </Row>
          </Container>
        </Form>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetAdmin: (data) => dispatch({ type: "GET_ADMIN", data: data }),
  };
};
export default connect(null, mapDispatchToProps)(SignIn);

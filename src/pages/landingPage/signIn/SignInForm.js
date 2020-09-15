import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Login from "../../../image/undraw_secure_login_pdn4.svg";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

const SignInForm = (props) => {
  const {
    username,
    password,
    usernameInvalid,
    passwordInvalid,
    handleChangeInput,
    getDataAdmin,
  } = props;
  return (
    <div data-test="component-signin">
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
                      passwordInvalid ? { color: "red" } : { color: "black" }
                    }
                  >
                    {usernameInvalid ? usernameInvalid : "Username"}
                  </Label>
                  <Input
                    data-test="input-username"
                    value={username}
                    name="username"
                    type="username"
                    placeholder="Username"
                    onChange={(event) => handleChangeInput(event)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label
                    style={
                      passwordInvalid ? { color: "red" } : { color: "black" }
                    }
                  >
                    {passwordInvalid ? passwordInvalid : "Password"}
                  </Label>
                  <Input
                    data-test="input-password"
                    value={password}
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={(event) => handleChangeInput(event)}
                  />
                </FormGroup>

                <Link to="/admin">
                  <Button
                    className="btn-lg btn-dark btn-block"
                    onClick={() => getDataAdmin()}
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
      <Footer />
    </div>
  );
};

export default SignInForm;

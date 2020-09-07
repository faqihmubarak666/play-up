import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Login from "../../../image/undraw_secure_login_pdn4.svg";
import Footer from "../../../component/Footer";
import Loading from "../../../image/animation_500_kenxqlc5.gif";
import App from "../../../App";

const SignInForm = (props) => {
  const {
    username,
    password,
    usernameInvalid,
    passwordInvalid,
    isLoaded,
    handleChangeInput,
    getDataAdmin,
  } = props;
  return (
    <div>
      <div className="container-login">
        {/* // <div>
      //   {isLoaded ? ( */}
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
        <Footer />
        {/* </div> */}
        {/* // ) : (
        //   <img
        //     src={Loading}
        //     alt="loading"
        //     style={{
        //       marginTop: "40px",
        //     }}
        //   />
        // )} */}
      </div>
    </div>
  );
};

export default SignInForm;

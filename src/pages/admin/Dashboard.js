import React, { Component } from "react";
import Welcome from "../../image/animation_500_ken3imlb.gif";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";

export class Dashboard extends Component {
  render() {
    const { allUser } = this.props;
    console.log("data", allUser);
    return (
      <div>
        <Container>
          <Row>
            <Col style={{ marginLeft: "100px" }}>
              <h1
                style={{
                  marginLeft: "450px",
                  color: "#0ac1a5",
                  fontSize: "50px",
                }}
              >
                PLAY UP!
              </h1>
              <img src={Welcome} alt="Welcome" />
            </Col>
          </Row>
          <Row style={{ marginLeft: "170px" }}>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "blue",
                  border: "solid 5px",
                  borderColor: "white",
                }}
              >
                <Card.Header
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "30px",
                  }}
                >
                  TOTAL USER
                </Card.Header>
                <Card.Body>
                  <Card.Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: "30px",
                    }}
                  >
                    {allUser.length}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "yellow",
                  border: "solid 5px",
                  borderColor: "white",
                }}
              >
                <Card.Header
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "30px",
                  }}
                >
                  TOTAL SCHEDULE
                </Card.Header>
                <Card.Body>
                  <Card.Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: "30px",
                    }}
                  >
                    15
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "red",
                  border: "solid 5px",
                  borderColor: "white",
                }}
              >
                <Card.Header
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "30px",
                  }}
                >
                  TOTAL ?
                </Card.Header>
                <Card.Body>
                  <Card.Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: "30px",
                    }}
                  >
                    15
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allUser: state.rGetDataUser.Users.allUser,
  };
};

export default connect(mapStateToProps)(Dashboard);

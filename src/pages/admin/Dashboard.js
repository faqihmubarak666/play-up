import React, { Component } from "react";
import Welcome from "../../image/animation_500_ken3imlb.gif";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";

export class Dashboard extends Component {
  render() {
    const { allUser, allSchedule, allCategory } = this.props;
    return (
      <div className="content-wrapper" style={{ backgroundColor: "white" }}>
        <Row>
          <Col>
            <h1
              style={{
                textAlign: "center",
                color: "#0ac1a5",
                fontSize: "50px",
              }}
            >
              PLAY UP!
            </h1>
            <img
              src={Welcome}
              alt="Welcome"
              style={{ width: "500px", height: "300px" }}
            />
          </Col>
        </Row>
        <Row
          style={{
            margin: "30px  120px auto",
          }}
        >
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
                  {allSchedule.length}
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
                TOTAL CATEGORY
              </Card.Header>
              <Card.Body>
                <Card.Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "30px",
                  }}
                >
                  {allCategory.length}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allUser: state.rGetDataUser.Users.allUser,
    allSchedule: state.rGetDataSchedule.Schedule.allSchedule,
    allCategory: state.rGetDataCategory.Category.allCategory,
  };
};

export default connect(mapStateToProps)(Dashboard);

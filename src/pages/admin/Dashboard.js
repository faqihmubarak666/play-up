import React, { Component } from "react";
import Welcome from "../../image/animation_500_ken3imlb.gif";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { getAllUsers } from "../admin/users/UserServiceAPI";
import { getAllSchedule } from "../admin/scheduleMatch/ScheduleService";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 50,
    };
  }

  componentDidMount() {
    this.loadDataUsers();
    this.loadDataSchedule();
  }

  loadDataUsers = () => {
    getAllUsers(this.state.page, this.state.limit).then((response) => {
      const data = response.data.result;
      this.props.GetAllUser(data);
    });
  };

  loadDataSchedule = () => {
    getAllSchedule(this.state.page, this.state.limit).then((response) => {
      const data = response.data.result;
      this.props.GetAllSchedule(data);
    });
  };

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
            margin: "30px  40px auto",
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
                  {!allUser ? null : allUser.length}
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
                  {!allSchedule ? null : allSchedule.length}
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
                  {!allCategory ? null : allCategory.length}
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

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllUser: (data) => dispatch({ type: "GET_USER", data: data }),
    GetAllSchedule: (data) => dispatch({ type: "GET_SCHEDULE", data: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

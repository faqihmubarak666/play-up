import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const ScheduleList = (props) => {
  const { allSchedule } = props;

  return (
    <div>
      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", alignContent: "center" }}
      >
        <thead>
          <tr>
            <th>NO</th>
            <th>SCHEDULE ID</th>
            <th>STATUS</th>
            <th>RESULT</th>
          </tr>
        </thead>
        <tbody>
          {allSchedule.map((data, index) => (
            <>
              <tr>
                <td>{index + 1}</td>
                <td>{data.schedule_id}</td>

                <td>{data.schedule_status}</td>
                <td>{data.schedule_result}</td>
              </tr>
              <tr>
                <td colSpan="7">
                  <Row>
                    <Col>
                      <ListGroup.Item
                        style={{
                          backgroundColor: "Blue",
                          textTransform: "uppercase",
                          color: "black",
                        }}
                      >
                        ID : {data.schedule_user_id}
                        <br />
                        {data.schedule_user_name}
                      </ListGroup.Item>
                    </Col>
                    <span style={{ textAlign: "center", margin: "auto" }}>
                      VS
                    </span>
                    <Col>
                      <ListGroup.Item
                        style={{
                          backgroundColor: "Red",
                          textTransform: "uppercase",
                          color: "black",
                        }}
                      >
                        ID : {data.schedule_opponent_id}
                        <br />
                        {data.schedule_opponent}
                      </ListGroup.Item>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td colSpan="7" style={{ textTransform: "uppercase" }}>
                  {data.schedule_time} AT {data.schedule_location}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allSchedule: state.rGetDataSchedule.Schedule.allSchedule,
  };
};

export default connect(mapStateToProps)(ScheduleList);

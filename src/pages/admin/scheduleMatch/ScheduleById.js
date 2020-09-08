import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const ScheduleById = (props) => {
  const { scheduleById, handleShowTableScheduleById } = props;
  return (
    <div style={{ backgroundColor: "white" }}>
      <button
        onClick={() => handleShowTableScheduleById()}
        style={{
          float: "left",
          backgroundColor: "#0ac1a5",
          color: "white",
          width: "70px",
        }}
      >
        <i class="fas fa-arrow-left"></i> Back
      </button>
      <Table
        striped
        bordered
        hover
        style={{
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <thead>
          <tr>
            <th>SCHEDULE ID</th>
            <th>STATUS</th>
            <th>RESULT</th>
          </tr>
        </thead>
        <tbody>
          <>
            <tr>
              <td>{!scheduleById ? null : scheduleById.schedule_id}</td>

              <td>{!scheduleById ? null : scheduleById.schedule_status}</td>
              <td>{!scheduleById ? null : scheduleById.schedule_result}</td>
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
                      ID :{" "}
                      {!scheduleById ? null : scheduleById.schedule_user_id}
                      <br />
                      {!scheduleById ? null : scheduleById.schedule_user_name}
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
                      ID :{" "}
                      {!scheduleById ? null : scheduleById.schedule_opponent_id}
                      <br />
                      {!scheduleById ? null : scheduleById.schedule_opponent}
                    </ListGroup.Item>
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td colSpan="7" style={{ textTransform: "uppercase" }}>
                {!scheduleById ? null : scheduleById.schedule_time} AT{" "}
                {!scheduleById ? null : scheduleById.schedule_location}
              </td>
            </tr>
          </>
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    scheduleById: state.rGetDataSchedule.Schedule.scheduleById,
  };
};

export default connect(mapStateToProps)(ScheduleById);

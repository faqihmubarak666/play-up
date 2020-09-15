import React from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const ScheduleById = (props) => {
  const { filtered, handleShowTableScheduleById } = props;
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
          {!filtered
            ? null
            : filtered.map((data) => (
                <>
                  <tr>
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
                              borderRadius: "50px",
                            }}
                          >
                            ID :{data.schedule_user_id}
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
                              borderRadius: "50px",
                            }}
                          >
                            ID :{data.schedule_opponent_id}
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

export default ScheduleById;

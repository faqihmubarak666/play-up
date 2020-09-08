import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Loading from "../../../image/animation_500_kesozuti.gif";
import { Form, FormControl, Button } from "react-bootstrap";

const ScheduleList = (props) => {
  const {
    allSchedule,
    isLoaded,
    inputValue,
    onSearch,
    handleChangeInput,
  } = props;

  return (
    <div style={{ backgroundColor: "white" }}>
      <Form
        inline
        className="form-search"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <FormControl
          value={inputValue}
          name="inputValue"
          type="text"
          placeholder="Search..."
          className="mr-sm-2"
          style={{ width: "300px", borderRadius: "15px" }}
          onChange={(event) => handleChangeInput(event)}
        />
        <Button
          onClick={() => onSearch(inputValue)}
          style={{ borderRadius: "15px", backgroundColor: "#0ac1a5" }}
        >
          Search
        </Button>
      </Form>
      {isLoaded ? (
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
            {!allSchedule
              ? null
              : allSchedule.map((data, index) => (
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
      ) : (
        <img
          src={Loading}
          alt="loading"
          style={{
            marginTop: "40px",
          }}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allSchedule: state.rGetDataSchedule.Schedule.allSchedule,
  };
};

export default connect(mapStateToProps)(ScheduleList);

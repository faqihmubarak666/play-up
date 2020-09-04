import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";

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
            <th>USERNAME</th>
            <th>LOCATION</th>
            <th>TIME</th>
            <th>STATUS</th>
            <th>RESULT</th>
            <th>OPPONENT</th>
          </tr>
        </thead>
        <tbody>
          {allSchedule.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data.schedule_id}</td>
              <td>{data.schedule_user_name}</td>
              <td>{data.schedule_location}</td>
              <td>{data.schedule_time}</td>
              <td>{data.schedule_status}</td>
              <td>{data.schedule_result}</td>
              <td>{data.schedule_opponent}</td>
            </tr>
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

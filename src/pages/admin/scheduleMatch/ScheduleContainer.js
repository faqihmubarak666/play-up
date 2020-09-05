import React, { Component } from "react";
import { getAllSchedule } from "./ScheduleService";
import { connect } from "react-redux";
import ScheduleList from "./ScheduleList";

class ScheduleContainer extends Component {
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    getAllSchedule().then((response) => {
      const data = response.data;
      console.log("data schedule=", data);
      this.props.GetAllSchedule(data);
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        <ScheduleList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllSchedule: (data) => dispatch({ type: "GET_SCHEDULE", data: data }),
  };
};

export default connect(null, mapDispatchToProps)(ScheduleContainer);

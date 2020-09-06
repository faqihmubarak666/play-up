import React, { Component } from "react";
import { getAllSchedule } from "./ScheduleService";
import { connect } from "react-redux";
import ScheduleList from "./ScheduleList";

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    getAllSchedule().then((response) => {
      const data = response.data;
      console.log("data schedule=", data);
      this.props.GetAllSchedule(data);
      this.setState({
        isLoaded: !this.state.isLoaded,
      });
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        <ScheduleList isLoaded={this.state.isLoaded} />
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

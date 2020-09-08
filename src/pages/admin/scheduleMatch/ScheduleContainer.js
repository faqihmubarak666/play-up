import React, { Component } from "react";
import { getAllSchedule, getScheduleById } from "./ScheduleService";
import { connect } from "react-redux";
import ScheduleList from "./ScheduleList";
import SchedulePagination from "./SchedulePagination";
import ScheduleById from "./ScheduleById";

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      page: 0,
      limit: 3,
      totalResult: "",
      showTableScheduleById: false,
      search: "",
    };
  }

  componentDidMount() {
    this.loadData();
  }

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  loadData = () => {
    getAllSchedule(this.state.page, this.state.limit).then((response) => {
      const data = response.data.result;
      this.props.GetAllSchedule(data);
      this.setState({
        isLoaded: !this.state.isLoaded,
        totalResult: response.data.total_data,
      });
    });
  };

  onSetPage = (pagePagination) => {
    this.setState({
      ...this.state,
      isLoaded: !this.state.isLoaded,
      page: (this.state.page = pagePagination),
    });
    this.loadData();
  };

  onSetLimit = (limitPagination) => {
    this.setState({
      ...this.state,
      isLoaded: !this.state.isLoaded,
      limit: (this.state.limit = limitPagination),
    });
    this.loadData();
  };

  scheduleById = (id) => {
    getScheduleById(id).then((response) => {
      const data = response.data;
      this.props.GetScheduleById(data);
      this.setState({
        showTableScheduleById: !this.state.showTableScheduleById,
      });
    });
  };

  handleShowTableScheduleById = () => {
    this.setState({
      showTableScheduleById: !this.state.showTableScheduleById,
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        {!this.state.showTableScheduleById ? (
          <div>
            <ScheduleList
              isLoaded={this.state.isLoaded}
              scheduleById={this.scheduleById}
              search={this.state.search}
              handleChangeInput={this.handleChangeInput}
            />
            <SchedulePagination
              onSetLimit={this.onSetLimit}
              onSetPage={this.onSetPage}
              page={this.state.page}
              limit={this.state.limit}
              totalResult={this.state.totalResult}
            />
          </div>
        ) : (
          <ScheduleById
            handleShowTableScheduleById={this.handleShowTableScheduleById}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllSchedule: (data) => dispatch({ type: "GET_SCHEDULE", data: data }),
    GetScheduleById: (data) =>
      dispatch({ type: "GET_SCHEDULE_BY_ID", data: data }),
  };
};

export default connect(null, mapDispatchToProps)(ScheduleContainer);

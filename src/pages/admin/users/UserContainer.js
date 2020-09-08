import React, { Component } from "react";
import { getAllUsers, getUserById } from "./UserServiceAPI";
import { connect } from "react-redux";
import UserList from "./UserList";
import UserPagination from "./UserPagination";
import UserById from "./UserById";

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      showTableUserById: false,
      page: 1,
      limit: 3,
      totalResult: "",
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
    getAllUsers(this.state.page, this.state.limit).then((response) => {
      const data = response.data.result;
      this.props.GetAllUser(data);
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

  userById = (id) => {
    getUserById(id).then((response) => {
      const data = response.data;
      this.props.GetUserById(data);
      this.setState({
        showTableUserById: !this.state.showTableUserById,
      });
    });
  };

  handleShowTableUserById = () => {
    this.setState({
      showTableUserById: !this.state.showTableUserById,
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        {!this.state.showTableUserById ? (
          <div>
            <UserList
              isLoaded={this.state.isLoaded}
              page={this.state.page}
              limit={this.state.limit}
              handleButton={this.handleButton}
              handleButtonBack={this.handleButtonBack}
              handleButtonNext={this.handleButtonNext}
              userById={this.userById}
              search={this.state.search}
              handleChangeInput={this.handleChangeInput}
            />
            <UserPagination
              onSetLimit={this.onSetLimit}
              onSetPage={this.onSetPage}
              page={this.state.page}
              limit={this.state.limit}
              totalResult={this.state.totalResult}
            />
          </div>
        ) : (
          <UserById handleShowTableUserById={this.handleShowTableUserById} />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllUser: (data) => dispatch({ type: "GET_USER", data: data }),
    GetUserById: (data) => dispatch({ type: "GET_USER_BY_ID", data: data }),
  };
};

export default connect(null, mapDispatchToProps)(UserContainer);

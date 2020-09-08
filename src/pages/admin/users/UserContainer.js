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
      filtered: [],
      inputValue: "",
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

  onSearch = (data) => {
    this.setState({
      showTableUserById: !this.state.showTableUserById,

      filtered: this.props.allUser.filter((user) => {
        console.log("all user", user);
        return (
          user.id.toLowerCase() +
          user.username.toLowerCase() +
          user.user_full_name.toLowerCase() +
          user.gender.toLowerCase() +
          user.email.toLowerCase()
        ).includes(data.toLowerCase());
      }),
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
              handleChangeInput={this.handleChangeInput}
              onSearch={this.onSearch}
              inputValue={this.state.inputValue}
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
          <UserById
            handleShowTableUserById={this.handleShowTableUserById}
            filtered={this.state.filtered}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allUser: state.rGetDataUser.Users.allUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllUser: (data) => dispatch({ type: "GET_USER", data: data }),
    GetUserById: (data) => dispatch({ type: "GET_USER_BY_ID", data: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

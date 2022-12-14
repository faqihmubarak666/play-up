import React, { Component } from "react";
import { getAllUsers, getUserById, getUserImageById } from "./UserServiceAPI";
import { connect } from "react-redux";
import UserList from "./UserList";
import UserPagination from "./UserPagination";
import UserById from "./UserById";
import UserImageById from "./UserImageById";

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      showTableUserById: false,
      showModalUserImageById: false,
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

  userImageById = (image) => {
    getUserImageById(image).then((response) => {
      console.log(response);
      const data = response.url;
      this.props.GetUserImageById(data);
      this.setState({
        showModalUserImageById: !this.state.showModalUserImageById,
      });
    });
  };

  handleShowModalDetail = () => {
    this.setState({
      showModalUserImageById: !this.state.showModalUserImageById,
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        {!this.state.showTableUserById ? (
          <div>
            <UserList
              isLoaded={this.state.isLoaded}
              handleButton={this.handleButton}
              handleButtonBack={this.handleButtonBack}
              handleButtonNext={this.handleButtonNext}
              handleChangeInput={this.handleChangeInput}
              onSearch={this.onSearch}
              inputValue={this.state.inputValue}
              userImageById={this.userImageById}
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
            userImageById={this.userImageById}
            filtered={this.state.filtered}
          />
        )}

        {!this.state.showModalUserImageById ? null : (
          <UserImageById
            show={this.state.showModalUserImageById}
            onHide={this.handleShowModalDetail}
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
    GetUserImageById: (data) =>
      dispatch({ type: "GET_USER_IMAGE_BY_ID", data: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

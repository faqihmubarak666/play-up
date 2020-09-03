import React, { Component } from "react";
import { getAllUsers } from "./UserServiceAPI";
import { connect } from "react-redux";
import UserList from "./UserList";
import Footer from "../../../component/Footer";

class UserContainer extends Component {
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    getAllUsers().then((response) => {
      const data = response.data;
      console.log(`====${data}`);
      this.props.GetAllUser(data);
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        <UserList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllUser: (data) => dispatch({ type: "GET_USER", data: data }),
  };
};

export default connect(null, mapDispatchToProps)(UserContainer);

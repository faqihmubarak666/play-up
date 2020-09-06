import React, { Component } from "react";
import { getAllUsers } from "./UserServiceAPI";
import { connect } from "react-redux";
import UserList from "./UserList";

class UserContainer extends Component {
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
    getAllUsers().then((response) => {
      const data = response.data;
      this.props.GetAllUser(data);
      this.setState({
        isLoaded: !this.state.isLoaded,
      });
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        <UserList isLoaded={this.state.isLoaded} />
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

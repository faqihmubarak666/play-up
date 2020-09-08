import React from "react";
import { connect } from "react-redux";
import "../../../style/ListUser.css";
import Table from "react-bootstrap/Table";

const UserById = (props) => {
  const { userById, handleShowTableUserById } = props;
  return (
    <div style={{ backgroundColor: "white" }}>
      <button
        onClick={() => handleShowTableUserById()}
        style={{
          float: "left",
          backgroundColor: "#0ac1a5",
          color: "white",
          width: "70px",
        }}
      >
        <i class="fas fa-arrow-left"></i> Back
      </button>
      <Table
        striped
        bordered
        hover
        style={{
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <thead>
          <tr>
            {/* <th>NO</th> */}
            <th>ID USER</th>
            <th>USERNAME</th>
            <th>FULL NAME</th>
            <th>GENDER</th>
            <th>EMAIL</th>
            <th>PHOTO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{index + 1}</td> */}
            <td>{!userById ? null : userById.id}</td>
            <td>{!userById ? null : userById.username}</td>
            <td>{!userById ? null : userById.user_full_name}</td>
            <td>{!userById ? null : userById.gender}</td>
            <td>{!userById ? null : userById.email}</td>
            <td>
              <img
                src={!userById ? null : userById.photo}
                alt="user"
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50px",
                }}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userById: state.rGetDataUser.Users.userById,
  };
};

export default connect(mapStateToProps)(UserById);

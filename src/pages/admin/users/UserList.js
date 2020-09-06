import React from "react";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import "../../../style/ListUser.css";
import Table from "react-bootstrap/Table";
import Loading from "../../../image/animation_500_kenxqlc5.gif";

const UserList = (props) => {
  const { allUser, isLoaded } = props;
  return (
    <div style={{ backgroundColor: "white" }}>
      {isLoaded ? (
        <Table
          striped
          bordered
          hover
          style={{ textAlign: "center", alignContent: "center" }}
        >
          <thead>
            <tr>
              <th>NO</th>
              <th>ID USER</th>
              <th>USERNAME</th>
              <th>FULL NAME</th>
              <th>GENDER</th>
              <th>EMAIL</th>
              <th>PHOTO</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((data, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{data.id}</td>
                <td>{data.username}</td>
                <td>{data.user_full_name}</td>
                <td>{data.gender}</td>
                <td>{data.email}</td>
                <td>
                  <img
                    src={data.photo}
                    alt="user"
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50px",
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <img
          src={Loading}
          alt="loading"
          style={{
            marginTop: "40px",
          }}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allUser: state.rGetDataUser.Users.allUser,
  };
};

export default connect(mapStateToProps)(UserList);

import React from "react";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import "../../../style/ListUser.css";
import Table from "react-bootstrap/Table";

const UserList = (props) => {
  const { allUser } = props;
  return (
    <div>
      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", alignContent: "center" }}
      >
        <thead>
          <tr>
            <th>NO</th>
            <th>USERNAME</th>
            <th>JENIS KELAMIN</th>
            <th>EMAIL</th>
            <th>FOTO</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allUser: state.rGetDataUser.Users.allUser,
  };
};

export default connect(mapStateToProps)(UserList);

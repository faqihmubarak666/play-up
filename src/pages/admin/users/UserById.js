import React from "react";
import "../../../style/ListUser.css";
import Table from "react-bootstrap/Table";

const UserById = (props) => {
  const { handleShowTableUserById, filtered, userImageById } = props;
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
            <th>PHOTO PROFILE</th>
          </tr>
        </thead>
        <tbody>
          {!filtered
            ? null
            : filtered.map((data) => (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.username}</td>
                  <td>{data.user_full_name}</td>
                  <td>{data.gender}</td>
                  <td>{data.email}</td>
                  <td>
                    <button
                      onClick={() => userImageById(data.photo)}
                      style={{
                        backgroundColor: "#0ac1a5",
                        color: "white",
                        width: "50px",
                      }}
                    >
                      Photo
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserById;

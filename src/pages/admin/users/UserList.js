import React from "react";
import { connect } from "react-redux";
import "../../../style/ListUser.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "../../../image/animation_500_kesozuti.gif";
import { Form, FormControl, Button } from "react-bootstrap";

const UserList = (props) => {
  const {
    allUser,
    isLoaded,
    handleChangeInput,
    onSearch,
    inputValue,
    userImageById,
  } = props;
  return (
    <div style={{ backgroundColor: "white" }}>
      <Form
        inline
        className="form-search"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <FormControl
          value={inputValue}
          name="inputValue"
          type="text"
          placeholder="Search..."
          className="mr-sm-2"
          style={{ width: "300px", borderRadius: "15px" }}
          onChange={(event) => handleChangeInput(event)}
        />
        <Button
          onClick={() => onSearch(inputValue)}
          style={{ borderRadius: "15px", backgroundColor: "#0ac1a5" }}
        >
          Search
        </Button>
      </Form>
      {isLoaded ? (
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
              <th>NO</th>
              <th>ID USER</th>
              <th>USERNAME</th>
              <th>FULL NAME</th>
              <th>GENDER</th>
              <th>EMAIL</th>
              <th>Photo Profile</th>
            </tr>
          </thead>
          <tbody>
            {!allUser
              ? null
              : allUser.map((data, index) => (
                  <tr>
                    <td>{index + 1}</td>
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

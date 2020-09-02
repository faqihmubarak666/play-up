import React from "react";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import "../../../style/ListUser.css";

const UserList = (props) => {
  const { allUser } = props;
  return (
    <div className="container-listuser">
      <row>
        {allUser.map((data) => (
          <Card
            style={{
              width: "20em",
              display: "inline-flex",
              margin: "10px 10px 10px 10px",
            }}
          >
            <Card.Body>
              <Card.Img
                variant="top"
                src={data.photo}
                style={{ height: "220px" }}
              />

              <Card.Title style={{ fontWeight: "bold" }}>
                {data.user_full_name}
              </Card.Title>
              <Card.Text>{data.gender}</Card.Text>
              <Card.Text>{data.email}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allUser: state.rGetDataUser.Users.allUser,
  };
};

export default connect(mapStateToProps)(UserList);

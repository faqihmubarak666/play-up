import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";

const UserImageById = (props) => {
  const { show, onHide, userImageById } = props;
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Modal.Header onClick={onHide} style={{ backgroundColor: "#0ac1a5" }}>
            <Modal.Title
              style={{
                fontWeight: "bold",
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              Image User
            </Modal.Title>
          </Modal.Header>

          <Card style={{ width: "29rem" }}>
            <img
              src={userImageById}
              style={{
                width: "230px",
                height: "230px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10px",
              }}
            />
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={onHide}
            style={{
              backgroundColor: "#0ac1a5",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userImageById: state.rGetDataUser.Users.userImageById,
  };
};

export default connect(mapStateToProps)(UserImageById);

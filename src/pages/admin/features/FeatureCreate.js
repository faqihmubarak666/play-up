import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";

const FeatureCreate = (props) => {
  const {
    show,
    onHide,
    handleChangeInput,
    createNewFeature,
    feature_name,
    feature_description,
    feature_image,
    uploadImage,
  } = props;
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Modal.Header closeButton onClick={() => onHide()}>
            <Modal.Title id="contained-modal-title-vcenter">
              CREATE NEW FEATURE
            </Modal.Title>
          </Modal.Header>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>NAME FEATURE</Form.Label>
              <Form.Control
                value={feature_name}
                type="text"
                name="feature_name"
                placeholder="Input name feature"
                onChange={(event) => handleChangeInput(event)}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>DESCRIPTION FEATURE</Form.Label>
              <Form.Control
                value={feature_description}
                type="text"
                name="feature_description"
                placeholder="Input description feature"
                onChange={(event) => handleChangeInput(event)}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <img
                src={feature_image}
                style={{ width: "70px", height: "70px" }}
                alt="*upload image"
              />
              <Form.Label>IMAGE FEATURE</Form.Label>
              <Form.Control
                type="file"
                accept="image"
                name="feature_image"
                placeholder="Input image feature"
                onChange={(event) => uploadImage(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => createNewFeature()}
            style={{ backgroundColor: "#0ac1a5" }}
          >
            Submit
          </Button>
          <Button
            onClick={() => onHide()}
            style={{ backgroundColor: "#0ac1a5" }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FeatureCreate;

import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";
import { updateFeature } from "./FeatureService";

const FeatureUpdate = (props) => {
  const {
    show,
    onHide,
    handleChangeInput,
    updateNewFeature,
    dataFeature: {
      feature_id,
      feature_name,
      feature_description,
      feature_image,
    },
    handleUploadImage,
  } = props;
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              UPDATE FEATURE
            </Modal.Title>
          </Modal.Header>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>ID FEATURE</Form.Label>
              <Form.Control
                defaultValue={feature_id}
                type="text"
                name="feature_id"
                disabled={true}
                placeholder="Input id feature"
                onChange={handleChangeInput}
              ></Form.Control>
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>NAME FEATURE</Form.Label>
              <Form.Control
                defaultValue={feature_name}
                type="text"
                name="feature_name"
                placeholder="Input name feature"
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>DEESCRIPTION FEATURE</Form.Label>
              <Form.Control
                defaultValue={feature_description}
                type="text"
                name="feature_description"
                placeholder="Input description feature"
                onChange={handleChangeInput}
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
                onChange={(event) => handleUploadImage(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() =>
              updateNewFeature(
                feature_id,
                feature_name,
                feature_description,
                feature_image
              )
            }
            style={{ backgroundColor: "#0ac1a5" }}
          >
            Save
          </Button>
          <Button onClick={onHide} style={{ backgroundColor: "#0ac1a5" }}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FeatureUpdate;

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
    dataFeature: { id, featureName, featureDescription, featureImage },
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
              <Form.Label>ID</Form.Label>
              <Form.Control
                defaultValue={id}
                type="text"
                name="id"
                disabled={true}
                placeholder="Input id"
                onChange={handleChangeInput}
              ></Form.Control>
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>NAME FEATURE</Form.Label>
              <Form.Control
                defaultValue={featureName}
                type="text"
                name="featureName"
                placeholder="Input name feature"
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>DEESCRIPTION FEATURE</Form.Label>
              <Form.Control
                defaultValue={featureDescription}
                type="text"
                name="featureDescription"
                placeholder="Input description feature"
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>IMAGE FEATURE</Form.Label>
              <Form.Control
                defaultValue={featureImage}
                type="text"
                name="featureImage"
                placeholder="Input image feature"
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() =>
              updateNewFeature(
                id,
                featureName,
                featureDescription,
                featureImage
              )
            }
            style={{ backgroundColor: "blue" }}
          >
            Save
          </Button>
          <Button onClick={onHide} style={{ backgroundColor: "blue" }}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FeatureUpdate;

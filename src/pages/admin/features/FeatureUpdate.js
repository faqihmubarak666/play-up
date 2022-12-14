import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";
import Loading from "../../../image/animation_500_kesozuti.gif";

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
    uploadImage,
    handleEditButton,
    disabledInput,
  } = props;
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Modal.Header closeButton onClick={() => onHide()}>
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
                disabled={!disabledInput}
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
                disabled={!disabledInput}
                placeholder="Input description feature"
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <img
                src={feature_image ? feature_image : Loading}
                style={{ width: "70px", height: "70px" }}
                alt="*upload image"
              />
              <Form.Label>IMAGE FEATURE</Form.Label>
              <Form.Control
                id="feature_image"
                type="file"
                accept="image"
                name="feature_image"
                disabled={!disabledInput}
                placeholder="Input image feature"
                onChange={(event) => uploadImage(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {disabledInput ? (
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
          ) : (
            <Button
              onClick={() => handleEditButton()}
              style={{ backgroundColor: "#0ac1a5" }}
            >
              Edit
            </Button>
          )}

          <Button onClick={onHide} style={{ backgroundColor: "#0ac1a5" }}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FeatureUpdate;

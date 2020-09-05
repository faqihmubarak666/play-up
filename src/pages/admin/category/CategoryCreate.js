import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";

const CategoryCreate = (props) => {
  const {
    show,
    onHide,
    handleChangeInput,
    createNewCategory,
    categoryName,
    categoryImage,
  } = props;
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              CREATE NEW CATEGORY
            </Modal.Title>
          </Modal.Header>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>NAME CATEGORY</Form.Label>
              <Form.Control
                value={categoryName}
                type="text"
                name="categoryName"
                placeholder="Input name category"
                onChange={(event) => handleChangeInput(event)}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>UPLOAD IMAGE</Form.Label>
              <Form.Control
                value={categoryImage}
                type="text"
                name="categoryImage"
                placeholder="Input image category"
                onChange={(event) => handleChangeInput(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => createNewCategory()}
            style={{ backgroundColor: "blue" }}
          >
            Submit
          </Button>
          <Button onClick={() => onHide()} style={{ backgroundColor: "blue" }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CategoryCreate;

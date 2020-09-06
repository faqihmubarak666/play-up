import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";

const CategoryUpdate = (props) => {
  const {
    show,
    onHide,
    handleChangeInput,
    updateNewCategory,
    dataCategory: { id, categoryName, categoryImage },
    handleUploadImage,
  } = props;
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              UPDATE CATEGORY
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
              <Form.Label>NAME CATEGORY</Form.Label>
              <Form.Control
                defaultValue={categoryName}
                type="text"
                name="categoryName"
                placeholder="Input name category"
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <img
                src={categoryImage}
                style={{ width: "70px", height: "70px" }}
                alt="*upload image"
              />
              <Form.Label>IMAGE CATEGORY</Form.Label>
              <Form.Control
                type="file"
                name="categoryImage"
                accept="image"
                placeholder="Input image category"
                onChange={(event) => handleUploadImage(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => updateNewCategory(id, categoryName, categoryImage)}
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

export default CategoryUpdate;

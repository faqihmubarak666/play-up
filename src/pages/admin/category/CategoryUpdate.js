import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";
import Loading from "../../../image/animation_500_kesozuti.gif";

const CategoryUpdate = (props) => {
  const {
    show,
    onHide,
    handleChangeInput,
    updateNewCategory,
    dataCategory: { category_id, category_name, category_image },
    uploadImage,
  } = props;
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Modal.Header closeButton onClick={() => onHide()}>
            <Modal.Title id="contained-modal-title-vcenter">
              UPDATE CATEGORY
            </Modal.Title>
          </Modal.Header>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>ID CATEGORY</Form.Label>
              <Form.Control
                defaultValue={category_id}
                type="text"
                name="category_id"
                disabled={true}
                placeholder="Input category id"
                onChange={handleChangeInput}
              ></Form.Control>
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>NAME CATEGORY</Form.Label>
              <Form.Control
                defaultValue={category_name}
                type="text"
                name="category_name"
                placeholder="Input name category"
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <img
                src={category_image ? category_image : Loading}
                style={{ width: "70px", height: "70px" }}
                alt="*upload image"
              />
              <Form.Label>IMAGE CATEGORY</Form.Label>
              <Form.Control
                type="file"
                name="category_image"
                accept="image"
                placeholder="Input image category"
                onChange={(event) => uploadImage(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() =>
              updateNewCategory(category_id, category_name, category_image)
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

export default CategoryUpdate;

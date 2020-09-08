import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";

const CategoryById = (props) => {
  const { categoryById, handleShowTableCategoryById } = props;
  return (
    <div style={{ backgroundColor: "white" }}>
      <button
        onClick={() => handleShowTableCategoryById()}
        style={{
          float: "left",
          backgroundColor: "#0ac1a5",
          color: "white",
          width: "70px",
        }}
      >
        <i class="fas fa-arrow-left"></i> Back
      </button>
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
            <th>ID CATEGORY</th>
            <th>NAME CATEGORY</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{!categoryById ? null : categoryById.category_id}</td>
            <td>{!categoryById ? null : categoryById.category_name}</td>
            <td>
              <img
                src={!categoryById ? null : categoryById.category_image}
                alt="image category"
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50px",
                }}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryById: state.rGetDataCategory.Category.categoryById,
  };
};

export default connect(mapStateToProps)(CategoryById);

import React from "react";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import "../../../style/ListUser.css";
import Table from "react-bootstrap/Table";

const CategoryList = (props) => {
  const {
    allCategory,
    handleShowModalCreate,
    handleShowModalUpdate,
    handleDeleteCategory,
  } = props;
  return (
    <div>
      <button
        onClick={() => handleShowModalCreate()}
        style={{ float: "left", backgroundColor: "blue", color: "white" }}
      >
        <i class="fa fa-plus" aria-hidden="true"></i> New Category
      </button>
      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", alignContent: "center" }}
      >
        <thead>
          <tr>
            <th>NO</th>
            <th>ID CATEGORY</th>
            <th>NAME CATEGORY</th>
            <th>IMAGE</th>
            <th>STATUS CATEGORY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {allCategory.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data.id}</td>
              <td>{data.categoryName}</td>
              <td>
                <img
                  src={data.categoryImage}
                  alt="image category"
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50px",
                  }}
                />
              </td>
              <td>{data.categoryStatus}</td>
              <td>
                <button
                  onClick={() => handleShowModalUpdate(data)}
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    width: "50px",
                  }}
                >
                  <i class="fa fa-pencil-square" aria-hidden="true"></i>
                </button>
                <button
                  onClick={() => handleDeleteCategory(data.id)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    width: "50px",
                  }}
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allCategory: state.rGetDataCategory.Category.allCategory,
  };
};

export default connect(mapStateToProps)(CategoryList);

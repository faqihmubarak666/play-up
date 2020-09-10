import React from "react";
import Table from "react-bootstrap/Table";

const CategoryById = (props) => {
  const { filtered, handleShowTableCategoryById } = props;
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
          {!filtered
            ? null
            : filtered.map((data) => (
                <tr>
                  <td>{data.category_id}</td>
                  <td>{data.category_name}</td>
                  <td>
                    <img
                      src={data.category_image}
                      alt="image category"
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50px",
                      }}
                    />
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CategoryById;

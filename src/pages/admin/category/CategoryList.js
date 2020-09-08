import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Loading from "../../../image/animation_500_kesozuti.gif";
import { Form, FormControl, Button } from "react-bootstrap";

const CategoryList = (props) => {
  const {
    allCategory,
    handleShowModalCreate,
    handleShowModalUpdate,
    handleDeleteCategory,
    isLoaded,
    inputValue,
    onSearch,
    handleChangeInput,
  } = props;
  return (
    <div style={{ backgroundColor: "white" }}>
      <Form
        inline
        className="form-search"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <FormControl
          value={inputValue}
          name="inputValue"
          type="text"
          placeholder="Search..."
          className="mr-sm-2"
          style={{ width: "300px", borderRadius: "15px" }}
          onChange={(event) => handleChangeInput(event)}
        />
        <Button
          onClick={() => onSearch(inputValue)}
          style={{ borderRadius: "15px", backgroundColor: "#0ac1a5" }}
        >
          Search
        </Button>
      </Form>
      {isLoaded ? (
        <div>
          <button
            onClick={() => handleShowModalCreate()}
            style={{
              float: "left",
              backgroundColor: "#0ac1a5",
              color: "white",
            }}
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
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {!allCategory
                ? null
                : allCategory.map((data, index) => (
                    <tr>
                      <td>{index + 1}</td>
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
                      <td>
                        <button
                          onClick={() => handleShowModalUpdate(data)}
                          style={{
                            backgroundColor: "#0ac1a5",
                            color: "white",
                            width: "50px",
                          }}
                        >
                          <i class="fa fa-pencil-square" aria-hidden="true"></i>
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(data.category_id)}
                          style={{
                            backgroundColor: "#0ac1a5",
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
      ) : (
        <img
          src={Loading}
          alt="loading"
          style={{
            marginTop: "40px",
          }}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allCategory: state.rGetDataCategory.Category.allCategory,
  };
};

export default connect(mapStateToProps)(CategoryList);

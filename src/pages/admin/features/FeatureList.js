import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Loading from "../../../image/animation_500_kesozuti.gif";
import { Form, FormControl, Button } from "react-bootstrap";

const FeatureList = (props) => {
  const {
    allFeature,
    handleShowModalCreate,
    handleShowModalUpdate,
    handleDeleteFeature,
    isLoaded,
    search,
    handleChangeInput,
    featureById,
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
          name="search"
          type="text"
          placeholder="Search..."
          className="mr-sm-2"
          style={{ width: "300px", borderRadius: "15px" }}
          onChange={(event) => handleChangeInput(event)}
        />
        <Button
          onClick={() => featureById(search)}
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
            <i class="fa fa-plus" aria-hidden="true"></i> New Feature
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
                <th>ID FEATURE</th>
                <th>NAME FEATURE</th>
                <th>DESCRIPTION FEATURE</th>
                <th>IMAGE FEATURE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {!allFeature
                ? null
                : allFeature.map((data, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data.feature_id}</td>
                      <td>{data.feature_name}</td>
                      <td>{data.feature_description}</td>
                      <td>
                        <img
                          src={data.feature_image}
                          alt="image feature"
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
                          onClick={() => handleDeleteFeature(data.feature_id)}
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
    allFeature: state.rGetDataFeature.Feature.allFeature,
  };
};

export default connect(mapStateToProps)(FeatureList);

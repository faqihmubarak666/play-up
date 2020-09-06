import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";

const FeatureList = (props) => {
  const {
    allFeature,
    handleShowModalCreate,
    handleShowModalUpdate,
    handleDeleteFeature,
  } = props;
  return (
    <div>
      <button
        onClick={() => handleShowModalCreate()}
        style={{ float: "left", backgroundColor: "blue", color: "white" }}
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
            <th>STATUS FEATURE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {allFeature.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data.id}</td>
              <td>{data.featureName}</td>
              <td>{data.featureDescription}</td>
              <td>
                <img
                  src={data.featureImage}
                  alt="image feature"
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50px",
                  }}
                />
              </td>
              <td>{data.featureStatus}</td>
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
                  onClick={() => handleDeleteFeature(data.id)}
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
    allFeature: state.rGetDataFeature.Feature.allFeature,
  };
};

export default connect(mapStateToProps)(FeatureList);

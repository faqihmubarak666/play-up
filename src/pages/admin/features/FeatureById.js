import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";

const FeatureById = (props) => {
  const { featureById, handleShowTableFeatureById } = props;
  return (
    <div style={{ backgroundColor: "white" }}>
      <button
        onClick={() => handleShowTableFeatureById()}
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
            <th>ID FEATURE</th>
            <th>NAME FEATURE</th>
            <th>DESCRIPTION FEATURE</th>
            <th>IMAGE FEATURE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{!featureById ? null : featureById.feature_id}</td>
            <td>{!featureById ? null : featureById.feature_name}</td>
            <td>{!featureById ? null : featureById.feature_description}</td>
            <td>
              <img
                src={!featureById ? null : featureById.feature_image}
                alt="image feature"
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
    featureById: state.rGetDataFeature.Feature.featureById,
  };
};

export default connect(mapStateToProps)(FeatureById);

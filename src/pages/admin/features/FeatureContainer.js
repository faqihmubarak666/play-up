import React, { Component } from "react";
import {
  getAllFeature,
  createFeature,
  updateFeature,
  deleteFeature,
} from "./FeatureService";
import { connect } from "react-redux";
import swal from "sweetalert";
import FeatureList from "./FeatureList";
import FeatureCreate from "./FeatureCreate";
import FeatureUpdate from "./FeatureUpdate";
import Navbar from "../../../components/Navbar";

export class FeatureContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      featureName: "",
      featureDescription: "",
      featureImage: "",
      showModalCreate: false,
      showModalUpdate: false,
      isLoaded: false,
      dataFeature: {},
    };
  }

  handleUploadImage = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({
          featureImage: reader.result,
        });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  componentDidMount() {
    this.loadData();
  }

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  loadData = () => {
    getAllFeature().then((response) => {
      const data = response.data;
      this.props.GetAllFeature(data);
      this.setState({
        isLoaded: !this.state.isLoaded,
      });
    });
  };

  createNewFeature = () => {
    createFeature({
      featureName: this.state.featureName,
      featureDescription: this.state.featureDescription,
      featureImage: this.state.featureImage,
    })
      .then((response) => {
        if (
          this.state.featureName == "" ||
          this.state.featureDescription == "" ||
          this.state.featureImage == ""
        ) {
          swal("Create New Feature Failed !!!");
        } else if (response.code !== 200) {
          swal("Create New Feature Failed !!!");
        } else {
          swal(
            "Create New Feature Success",
            "You clicked the button!",
            "success"
          );
          this.loadData();
          this.handleShowModalCreate();
          this.setState({
            ...this.state,
            featureName: "",
            featureDescription: "",
            featureImage: "",
            isLoaded: !this.state.isLoaded,
          });
        }
      })
      .catch((err) => {
        swal(err);
      });
  };

  handleShowModalCreate = () => {
    this.setState({
      showModalCreate: !this.state.showModalCreate,
    });
  };

  updateNewFeature = (id, featureName, featureDescription, featureImage) => {
    updateFeature({
      id: this.state.id === "" ? id : this.state.id,
      featureName:
        this.state.featureName === "" ? featureName : this.state.featureName,
      featureDescription:
        this.state.featureDescription === ""
          ? featureDescription
          : this.state.featureDescription,
      featureImage:
        this.state.featureImage === "" ? featureImage : this.state.featureImage,
    })
      .then((response) => {
        if (response.code === 200) {
          console.log(`hasil update`, response);
          swal("Update Feature Success", "You clicked the button!", "success");
          this.loadData();
          this.handleShowModalUpdate();
          this.setState({
            ...this.state,
            id: "",
            featureName: "",
            featureDescription: "",
            featureImage: "",
            isLoaded: !this.state.isLoaded,
          });
        }
      })
      .catch((err) => {
        swal(err);
      });
  };

  handleShowModalUpdate = (data) => {
    this.setState({
      dataFeature: data,
      showModalUpdate: !this.state.showModalUpdate,
    });
  };

  handleDeleteFeature = (id) => {
    swal({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        deleteFeature(id).then((response) => {
          if (response.code === 200) {
            swal(
              "Delete Feature Success",
              "You clicked the button!",
              "success"
            );
            this.loadData();
            this.setState({
              isLoaded: !this.state.isLoaded,
            });
          }
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        <FeatureList
          handleShowModalCreate={this.handleShowModalCreate}
          handleShowModalUpdate={this.handleShowModalUpdate}
          handleDeleteFeature={this.handleDeleteFeature}
          isLoaded={this.state.isLoaded}
        />
        {!this.state.showModalCreate ? null : (
          <FeatureCreate
            show={this.state.showModalCreate}
            onHide={this.handleShowModalCreate}
            handleChangeInput={this.handleChangeInput}
            createNewFeature={this.createNewFeature}
            featureName={this.state.featureName}
            featureDescription={this.state.featureDescription}
            featureImage={this.state.featureImage}
            handleUploadImage={this.handleUploadImage}
          />
        )}

        {!this.state.showModalUpdate ? null : (
          <FeatureUpdate
            show={this.state.showModalUpdate}
            onHide={this.handleShowModalUpdate}
            handleChangeInput={this.handleChangeInput}
            updateNewFeature={this.updateNewFeature}
            dataFeature={this.state.dataFeature}
            handleUploadImage={this.handleUploadImage}
          />
        )}

        {/* <Navbar loadDataFeature={this.loadData} /> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllFeature: (data) => dispatch({ type: "GET_FEATURE", data: data }),
  };
};

export default connect(null, mapDispatchToProps)(FeatureContainer);

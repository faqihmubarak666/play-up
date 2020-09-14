import React, { Component } from "react";
import {
  getAllFeature,
  createFeature,
  updateFeature,
  deleteFeature,
  getFeatureById,
  uploadApiFeature,
} from "./FeatureService";
import { connect } from "react-redux";
import swal from "sweetalert";
import FeatureList from "./FeatureList";
import FeatureCreate from "./FeatureCreate";
import FeatureUpdate from "./FeatureUpdate";
import FeatureById from "./FeatureById";

export class FeatureContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_id: "",
      feature_name: "",
      feature_description: "",
      feature_image: "",
      showModalCreate: false,
      showModalUpdate: false,
      isLoaded: false,
      dataFeature: {},
      showTableFeatureById: false,
      filtered: [],
      inputValue: "",
    };
  }

  uploadImage = async (event) => {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "playup");

    uploadApiFeature(data).then((res) => {
      this.setState({
        feature_image: res.secure_url,
      });
    });
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
      feature_name: this.state.feature_name,
      feature_description: this.state.feature_description,
      feature_image: this.state.feature_image,
    })
      .then((response) => {
        if (
          this.state.feature_name === "" ||
          this.state.feature_description === "" ||
          this.state.feature_image === ""
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
            feature_name: "",
            feature_description: "",
            feature_image: "",
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

  updateNewFeature = (
    feature_id,
    feature_name,
    feature_description,
    feature_image
  ) => {
    updateFeature({
      feature_id:
        this.state.feature_id === "" ? feature_id : this.state.feature_id,
      feature_name:
        this.state.feature_name === "" ? feature_name : this.state.feature_name,
      feature_description:
        this.state.feature_description === ""
          ? feature_description
          : this.state.feature_description,
      feature_image:
        this.state.feature_image === ""
          ? feature_image
          : this.state.feature_image,
    })
      .then((response) => {
        if (response.code === 200) {
          swal("Update Feature Success", "You clicked the button!", "success");
          this.loadData();
          this.handleShowModalUpdate();
          this.setState({
            ...this.state,
            feature_id: "",
            feature_name: "",
            feature_description: "",
            feature_image: "",
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

  handleDeleteFeature = (feature_id) => {
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
        deleteFeature(feature_id).then((response) => {
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

  featureById = (id) => {
    getFeatureById(id).then((response) => {
      const data = response.data;
      this.props.GetFeatureById(data);
      this.setState({
        showTableFeatureById: !this.state.showTableFeatureById,
      });
    });
  };

  handleShowTableFeatureById = () => {
    this.setState({
      showTableFeatureById: !this.state.showTableFeatureById,
    });
  };

  onSearch = (data) => {
    this.setState({
      showTableFeatureById: !this.state.showTableFeatureById,

      filtered: this.props.allFeature.filter((feature) => {
        return (
          feature.feature_id.toLowerCase() +
          feature.feature_name.toLowerCase() +
          feature.feature_description.toLowerCase()
        ).includes(data.toLowerCase());
      }),
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        {!this.state.showTableFeatureById ? (
          <FeatureList
            handleShowModalCreate={this.handleShowModalCreate}
            handleShowModalUpdate={this.handleShowModalUpdate}
            handleDeleteFeature={this.handleDeleteFeature}
            isLoaded={this.state.isLoaded}
            inputValue={this.state.inputValue}
            handleChangeInput={this.handleChangeInput}
            onSearch={this.onSearch}
          />
        ) : (
          <FeatureById
            handleShowTableFeatureById={this.handleShowTableFeatureById}
            filtered={this.state.filtered}
          />
        )}
        {!this.state.showModalCreate ? null : (
          <FeatureCreate
            show={this.state.showModalCreate}
            onHide={this.handleShowModalCreate}
            handleChangeInput={this.handleChangeInput}
            createNewFeature={this.createNewFeature}
            feature_name={this.state.feature_name}
            feature_description={this.state.feature_description}
            feature_image={this.state.feature_image}
            handleUploadImage={this.handleUploadImage}
            uploadImage={this.uploadImage}
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
            uploadImage={this.uploadImage}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allFeature: state.rGetDataFeature.Feature.allFeature,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllFeature: (data) => dispatch({ type: "GET_FEATURE", data: data }),
    GetFeatureById: (data) =>
      dispatch({ type: "GET_FEATURE_BY_ID", data: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureContainer);

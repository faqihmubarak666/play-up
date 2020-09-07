import React, { Component } from "react";
import {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "./CategoryService";
import { connect } from "react-redux";
import swal from "sweetalert";
import CategoryList from "./CategoryList";
import CategoryCreate from "./CategoryCreate";
import CategoryUpdate from "./CategoryUpdate";

class CategoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      categoryName: "",
      categoryImage: "",
      showModalCreate: false,
      showModalUpdate: false,
      isLoaded: false,
      dataCategory: {},
    };
  }

  handleUploadImage = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({
          categoryImage: reader.result,
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
    getAllCategory().then((response) => {
      const data = response.data;
      this.props.GetAllCategory(data);
      this.setState({
        isLoaded: !this.state.isLoaded,
      });
    });
  };

  createNewCategory = () => {
    createCategory({
      categoryName: this.state.categoryName,
      categoryImage: this.state.categoryImage,
    })
      .then((response) => {
        if (
          this.state.categoryName === "" ||
          (this.state.categoryImage === "" && response.code !== 200)
        ) {
          swal("Create New Category Failed !!!");
        } else {
          swal(
            "Create New Category Success",
            "You clicked the button!",
            "success"
          );
          this.loadData();
          this.handleShowModalCreate();
          this.setState({
            ...this.state,
            categoryName: "",
            categoryImage: "",
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

  updateNewCategory = (id, categoryName, categoryImage) => {
    updateCategory({
      id: this.state.id === "" ? id : this.state.id,
      categoryName:
        this.state.categoryName === "" ? categoryName : this.state.categoryName,
      categoryImage:
        this.state.categoryImage === ""
          ? categoryImage
          : this.state.categoryImage,
    })
      .then((response) => {
        if (response.code === 200) {
          swal("Update Category Success", "You clicked the button!", "success");
          this.loadData();
          this.handleShowModalUpdate();
          this.setState({
            ...this.state,
            id: "",
            categoryName: "",
            categoryImage: "",
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
      dataCategory: data,
      showModalUpdate: !this.state.showModalUpdate,
    });
  };

  handleDeleteCategory = (id) => {
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
        deleteCategory(id).then((response) => {
          if (response.code === 200) {
            swal(
              "Delete Category Success",
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
        <CategoryList
          handleShowModalCreate={this.handleShowModalCreate}
          handleShowModalUpdate={this.handleShowModalUpdate}
          handleDeleteCategory={this.handleDeleteCategory}
          isLoaded={this.state.isLoaded}
        />
        {!this.state.showModalCreate ? null : (
          <CategoryCreate
            show={this.state.showModalCreate}
            onHide={this.handleShowModalCreate}
            handleChangeInput={this.handleChangeInput}
            createNewCategory={this.createNewCategory}
            categoryName={this.state.categoryName}
            categoryImage={this.state.categoryImage}
            handleUploadImage={this.handleUploadImage}
          />
        )}

        {!this.state.showModalUpdate ? null : (
          <CategoryUpdate
            show={this.state.showModalUpdate}
            onHide={this.handleShowModalUpdate}
            handleChangeInput={this.handleChangeInput}
            updateNewCategory={this.updateNewCategory}
            dataCategory={this.state.dataCategory}
            handleUploadImage={this.handleUploadImage}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllCategory: (data) => dispatch({ type: "GET_CATEGORY", data: data }),
  };
};

export default connect(null, mapDispatchToProps)(CategoryContainer);

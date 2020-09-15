import React, { Component } from "react";
import {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
  uploadApiCategory,
} from "./CategoryService";
import { connect } from "react-redux";
import swal from "sweetalert";
import CategoryList from "./CategoryList";
import CategoryCreate from "./CategoryCreate";
import CategoryUpdate from "./CategoryUpdate";
import CategoryById from "./CategoryById";

class CategoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: "",
      category_name: "",
      category_image: "",
      showModalCreate: false,
      showModalUpdate: false,
      isLoaded: false,
      dataCategory: {},
      showTableCategoryById: false,
      filtered: [],
      inputValue: "",
      disabledInput: false,
    };
  }

  uploadImage = async (event) => {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "playup");

    uploadApiCategory(data).then((res) => {
      this.loadData();

      this.setState({
        category_image: res.secure_url,
        isLoaded: !this.state.isLoaded,
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
      category_name: this.state.category_name,
      category_image: this.state.category_image,
    })
      .then((response) => {
        if (
          this.state.category_name === "" ||
          (this.state.category_image === "" && response.code !== 200)
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
            category_name: "",
            category_image: "",
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

  updateNewCategory = (category_id, category_name, category_image) => {
    updateCategory({
      category_id:
        this.state.category_id === "" ? category_id : this.state.category_id,
      category_name:
        this.state.category_name === ""
          ? category_name
          : this.state.category_name,
      category_image:
        this.state.category_image === ""
          ? category_image
          : this.state.category_image,
    })
      .then((response) => {
        if (response.code === 200) {
          swal("Update Category Success", "You clicked the button!", "success");
          this.loadData();
          this.handleShowModalUpdate();
          this.handleEditButton();

          this.setState({
            ...this.state,
            category_id: "",
            category_name: "",
            category_image: "",
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

  handleDeleteCategory = (category_id) => {
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
        deleteCategory(category_id).then((response) => {
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

  categoryById = (id) => {
    getCategoryById(id).then((response) => {
      const data = response.data;
      this.props.GetCategoryById(data);
      this.setState({
        showTableCategoryById: !this.state.showTableCategoryById,
      });
    });
  };

  handleShowTableCategoryById = () => {
    this.setState({
      showTableCategoryById: !this.state.showTableCategoryById,
    });
  };

  onSearch = (data) => {
    this.setState({
      showTableCategoryById: !this.state.showTableCategoryById,

      filtered: this.props.allCategory.filter((category) => {
        return (
          category.category_id.toLowerCase() +
          category.category_name.toLowerCase()
        ).includes(data.toLowerCase());
      }),
    });
  };

  handleEditButton = () => {
    this.setState({
      disabledInput: !this.state.disabledInput,
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        {!this.state.showTableCategoryById ? (
          <CategoryList
            handleShowModalCreate={this.handleShowModalCreate}
            handleShowModalUpdate={this.handleShowModalUpdate}
            handleDeleteCategory={this.handleDeleteCategory}
            isLoaded={this.state.isLoaded}
            inputValue={this.state.inputValue}
            onSearch={this.onSearch}
            handleChangeInput={this.handleChangeInput}
          />
        ) : (
          <CategoryById
            handleShowTableCategoryById={this.handleShowTableCategoryById}
            filtered={this.state.filtered}
          />
        )}
        {!this.state.showModalCreate ? null : (
          <CategoryCreate
            show={this.state.showModalCreate}
            onHide={this.handleShowModalCreate}
            handleChangeInput={this.handleChangeInput}
            createNewCategory={this.createNewCategory}
            category_name={this.state.category_name}
            category_image={this.state.category_image}
            handleUploadImage={this.handleUploadImage}
            uploadImage={this.uploadImage}
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
            uploadImage={this.uploadImage}
            handleEditButton={this.handleEditButton}
            disabledInput={this.state.disabledInput}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allCategory: state.rGetDataCategory.Category.allCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllCategory: (data) => dispatch({ type: "GET_CATEGORY", data: data }),
    GetCategoryById: (data) =>
      dispatch({ type: "GET_CATEGORY_BY_ID", data: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);

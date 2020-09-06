import React, { Component } from "react";
import "../../style/Category.css";
import "../../style/Footer.css";
import Badminton from "../../image/category_badminton.jpg";
import Footer from "../../component/Footer";
import { connect } from "react-redux";

export class Category extends Component {
  render() {
    const { allCategory } = this.props;
    return (
      <div>
        {allCategory.map((data) => (
          <div className="container_category">
            <img src={data.categoryImage} alt="badminton" />
            <h2>{data.categoryName}</h2>
          </div>
        ))}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allCategory: state.rGetDataCategory.Category.allCategory,
  };
};

export default connect(mapStateToProps)(Category);

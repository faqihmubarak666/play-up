import React, { Component } from "react";
import "../../style/Category.css";
import "../../style/Footer.css";
import Badminton from "../../image/category_badminton.jpg";
import Footer from "../../component/Footer";

export class Category extends Component {
  render() {
    return (
      <div>
        <div className="container_category">
          <img src={Badminton} alt="badminton" />
          <h2>Badminton</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Category;

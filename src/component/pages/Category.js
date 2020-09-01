import React from "react";
import "../../style/Category.css";
import Badminton from "../../image/category_badminton.jpg";

function Category() {
  return (
    <div className="container_category">
      <img src={Badminton} alt="badminton" />
      <h2>Badminton</h2>
    </div>
  );
}
export default Category;

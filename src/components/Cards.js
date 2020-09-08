import React from "react";
import "../style/Cards.css";
import CardItem from "./CardItem";
import { connect } from "react-redux";

const Cards = (props) => {
  const { allFeature, allCategory } = props;
  return (
    <div className="cards">
      <h1>Fiturs Application Play Up!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {!allFeature
              ? null
              : allFeature.map((data) => (
                  <CardItem
                    src={data.feature_image}
                    text={data.feature_description}
                    label={data.feature_name}
                    path="/features"
                  />
                ))}
          </ul>
          <ul className="cards__items">
            {!allCategory
              ? null
              : allCategory.map((data) => (
                  <CardItem
                    src={data.category_image}
                    text={data.category_name}
                    label={data.category_name}
                    path="/category"
                  />
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allFeature: state.rGetDataFeature.Feature.allFeature,
    allCategory: state.rGetDataCategory.Category.allCategory,
  };
};

export default connect(mapStateToProps)(Cards);

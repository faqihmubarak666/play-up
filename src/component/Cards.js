import React from "react";
import "../style/Cards.css";
import CardItem from "./CardItem";
import FiturChat from "../image/undraw_chatting_2yvo(1).svg";
import SearchPeople from "../image/undraw_people_search_wctu.svg";
import Rank from "../image/undraw_winners_ao2o.svg";
import { connect } from "react-redux";

const Cards = (props) => {
  const { allFeature, allCategory } = props;
  return (
    <div className="cards">
      <h1>Fiturs Application Play Up!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {allFeature.map((data) => (
              <CardItem
                src={data.featureImage}
                text={data.featureDescription}
                label={data.featureName}
                path="/features"
              />
            ))}
          </ul>
          <ul className="cards__items">
            {allCategory.map((data) => (
              <CardItem
                src={data.categoryImage}
                text={data.categoryName}
                label={data.categoryName}
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

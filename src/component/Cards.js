import React from "react";
import "../style/Cards.css";
import CardItem from "./CardItem";
import FiturChat from "../image/undraw_chatting_2yvo(1).svg";
import SearchPeople from "../image/undraw_people_search_wctu.svg";
import Rank from "../image/undraw_winners_ao2o.svg";

function Cards() {
  return (
    <div className="cards">
      <h1>Fiturs Application Play Up!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={FiturChat}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Chatting"
              path="/features"
            />
            <CardItem
              src={SearchPeople}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Find Opponent"
              path="/features"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Rank}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Rank"
              path="/features"
            />
            <CardItem
              src={Rank}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Rank"
              path="/features"
            />
            <CardItem
              src={Rank}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Rank"
              path="/features"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

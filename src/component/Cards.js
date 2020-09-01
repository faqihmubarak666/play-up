import React from "react";
import "../style/Cards.css";
import CardItem from "./CardItem";
import FiturChat from "../image/undraw_chatting_2yvo(1).svg";
import SearchPeople from "../image/undraw_people_search_wctu.svg";

function Cards() {
  return (
    <div className="cards">
      <h1>Fitur Aplikasi Play Up!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={FiturChat}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Chat"
              path="/services"
            />
            <CardItem
              src={SearchPeople}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Mencari lawan"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/category"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

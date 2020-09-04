import React from "react";
import "../App.css";
import { Button } from "./Button";
import "../style/HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>FIND OPPONENT</h1>
      <p>
        What are you waiting for ? download the application now to search your
        opponent
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <a href="https://play.google.com/store" style={{ color: "black" }}>
            Download PLAY UP!
          </a>
        </Button>

        <Link to="/play-video">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            <a style={{ color: "black" }}>
              WATCH TRAILER <i className="far fa-play-circle" />
            </a>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;

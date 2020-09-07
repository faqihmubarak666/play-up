import React, { Component } from "react";
import VideoPlayer from "react-video-js-player";
import TrailerPlayUp from "../../image/TrailerPlayUp.MP4";
import Footer from "../../components/Footer";

export class PlayVideo extends Component {
  render() {
    return (
      <div className="container-video">
        <VideoPlayer
          src={TrailerPlayUp}
          className="video-player"
          width="1510px"
          height="600px"
        />
        <Footer />
      </div>
    );
  }
}

export default PlayVideo;

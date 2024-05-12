import React from "react";
import YouTube from "react-youtube";
import "../styles/video.css";
const Video = ({ videoId, title }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // Adjust options as needed
    },
  };

  return (
    <div className="video-container">
      {" "}
      <YouTube videoId={videoId} opts={opts} />
      <h3 className="video-title">{title}</h3>
    </div>
  );
};

export default Video;

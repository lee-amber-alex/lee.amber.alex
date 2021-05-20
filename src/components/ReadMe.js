import React from "react";
import ReactPlayer from "react-player";

function ReadMe() {
  return (
    <div>
      <ReactPlayer />
      <div>
        <iframe
          src="https://player.vimeo.com/video/475283514?title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed"
          title="My Readme"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          frameborder="0"
          className="video-team"
        ></iframe>
      </div>
    </div>
  );
}

export default ReadMe;

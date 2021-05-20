import React from "react";
import ReactPlayer from "react-player";

function TeamEmbed() {
  return (
    <div>
        {/* url="https://player.vimeo.com/video/477902553?" */}
      <ReactPlayer  />
      <div >
        <iframe
          src="https://player.vimeo.com/video/477902553?title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed"
          title="My Team"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          frameborder="0"
          className="video-team"
        ></iframe>
      </div>
    </div>
  );
}

export default TeamEmbed;

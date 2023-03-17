import React from "react";

const Player = ({ video }) => {
  const { title, link } = video;

  return (
    <iframe
      width="100%"
      class="aspect-video"
      src={link}
      title={title}
      frameborder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Player;

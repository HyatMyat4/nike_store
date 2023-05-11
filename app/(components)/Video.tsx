import React from "react";

function Video(clip: any) {
  return (
    <video
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      className=" h-full w-full object-cover rounded-[8px] "
    >
      <source type="video/mp4" src="/clip.mp4" />
    </video>
  );
}

export default Video;

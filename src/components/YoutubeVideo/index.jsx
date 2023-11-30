import React from "react";
import ReactPlayer from "react-player";

function YoutubeVideo() {
  return (
    <div>
      <div className="flex justify-center my-10">
        <div className="xl:w-[80%] w-[95%] md:w-[90%]">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=7PIji8OubXU"
            width={"100%"}
            controls
          />
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideo;

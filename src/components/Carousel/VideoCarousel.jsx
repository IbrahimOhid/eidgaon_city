import React from "react";
import CarouselVideo from "../../assets/video/video_carousel.mp4";

const VideoCarousel = () => {
  return (
    <div className="relative">
      <video className="h-full w-full" autoPlay muted loop>
        
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCarousel;

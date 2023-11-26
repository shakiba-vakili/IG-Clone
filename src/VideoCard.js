import React, { useRef, useState, useEffect } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader.js";
import VideoFooter from "./VideoFooter.js";
const VideoCard = ({ url, likes, shares, avatarSrc, song, channel }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  // Pause the video when the component unmounts or a new video is loaded
  useEffect(() => {
    // Create a local variable to store the current video reference
    const currentVideoRef = videoRef.current;

    return () => {
      // Use the local variable in the cleanup function
      if (currentVideoRef) {
        currentVideoRef.pause();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // Pause other videos before playing this one
      document.querySelectorAll("video").forEach((video) => {
        if (video !== videoRef.current) {
          video.pause();
        }
      });

      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="IG reel video"
        loop
      />
      <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        likes={likes}
        shares={shares}
      />
    </div>
  );
};

export default VideoCard;

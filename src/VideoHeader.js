import React from "react";
import "./VideoHeader.css";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const VideoHeader = () => {
  return (
    <div className="videoHeader">
      <ArrowBackIosOutlinedIcon />
      <h3>Reels</h3>
      <CameraAltOutlinedIcon />
    </div>
  );
};

export default VideoHeader;

import React from "react";
import "./VideoFooter.css";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SendIcon from '@mui/icons-material/Send';
const VideoFooter = ({ url, likes, shares, avatarSrc, song, channel }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar alt="User Avatar" src={avatarSrc} />
        <h3>
          {channel} . <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />

        <h4 className="ticker-text">{song}</h4>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteIcon />
          <ModeCommentIcon />
          <SendIcon />
          <MoreHorizIcon />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteIcon className="videoFooter__stat__icon" />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeCommentIcon className="videoFooter__stat__icon" />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;

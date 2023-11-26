import "./App.css";
import React from "react";
import VideoCard from "./VideoCard";
import data from "./data.json";
function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__top">
        {/* {image at top - logo} */}
        <img
          className="app__logo"
          src="./Instagram_logo_2022.svg.png"
          alt="instagram logo"
        />
        <h2>Reels</h2>
        {/* {Reels text} */}
      </div>
      <div className="app__videos">
        {data.map(
          ({ channel, avatarSrc, song, url, likes, shares, key }, index) => {
            console.log("Key:", key); // Log the key value
            return (
              <VideoCard
                key={key || index} // Use key if present, otherwise fallback to index
                channel={channel}
                avatarSrc={avatarSrc}
                song={song}
                url={url}
                likes={likes}
                shares={shares}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./PlayList.css";

import TrackList from "../TrackList/TrackList";

const Playlist = () => (
  <div className="Playlist">
    <input defaultValue={"New Playlist"} />
    <TrackList />
    <button className="Playlist-save">SAVE TO SPOTIFY</button>
  </div>
);

export default Playlist;

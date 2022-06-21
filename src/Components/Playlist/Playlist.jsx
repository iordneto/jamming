import React from "react";
import "./PlayList.css";

import TrackList from "../TrackList/TrackList";

const Playlist = ({ name, removeTrack, tracks }) => (
  <div className="Playlist">
    <input defaultValue={name ? name : "New Playlist"} />
    <TrackList isRemoval list={tracks} removeTrack={removeTrack} />
    <button className="Playlist-save">SAVE TO SPOTIFY</button>
  </div>
);

export default Playlist;

import React from "react";
import "./PlayList.css";

import TrackList from "../TrackList/TrackList";

const Playlist = ({ name, onNameChange, removeTrack, tracks }) => {
  const handleNameChange = ({ target }) => {
    onNameChange(target.value);
  };

  return (
    <div className="Playlist">
      <input
        defaultValue={name ? name : "New Playlist"}
        onChange={handleNameChange}
      />
      <TrackList isRemoval list={tracks} removeTrack={removeTrack} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;

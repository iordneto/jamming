import React from "react";
import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

const Playlist = ({ name, onNameChange, removeTrack, onSave, tracks }) => {
  const handleNameChange = ({ target }) => {
    onNameChange(target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <div className="Playlist">
      <input
        defaultValue={name ? name : "New Playlist"}
        onChange={handleNameChange}
      />
      <TrackList isRemoval list={tracks} removeTrack={removeTrack} />
      <button className="Playlist-save" onClick={handleSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;

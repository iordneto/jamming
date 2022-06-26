import React from "react";
import "./TrackList.css";

import Track from "../Track/Track";

const TrackList = ({ list, addTrack, removeTrack, isRemoval }) => (
  <div className="TrackList">
    {!!list &&
      list.map((track, key) => (
        <Track
          key={key}
          id={track.id}
          isRemoval={isRemoval}
          addTrack={addTrack}
          removeTrack={removeTrack}
          name={track.name}
          artist={track.artist}
          album={track.album}
        />
      ))}
  </div>
);

export default TrackList;

import React from "react";
import "./TrackList.css";

import Track from "../Track/Track";

const TrackList = ({ list }) => (
  <div className="TrackList">
    {list &&
      list.length &&
      list.map((track) => (
        <Track
          key={track.id}
          name={track.name}
          artist={track.artist}
          album={track.album}
        />
      ))}
  </div>
);

export default TrackList;

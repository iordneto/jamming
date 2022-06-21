import React from "react";
import "./Track.css";

const Track = ({ isRemoval, addTrack, id, name, artist, album }) => {
  const renderAction = () => {
    return isRemoval ? (
      <button className="Track-action">-</button>
    ) : (
      <button className="Track-action" onClick={handleClick}>
        +
      </button>
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    addTrack(id);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>
          {artist} - {album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;

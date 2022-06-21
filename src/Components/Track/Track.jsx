import React from "react";
import "./Track.css";

const Track = ({
  isRemoval,
  addTrack,
  removeTrack,
  id,
  name,
  artist,
  album,
}) => {
  const renderAction = () => {
    return isRemoval ? (
      <button className="Track-action" onClick={handleRemoveClick}>
        -
      </button>
    ) : (
      <button className="Track-action" onClick={handleAddClick}>
        +
      </button>
    );
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    addTrack(id);
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    removeTrack(id);
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

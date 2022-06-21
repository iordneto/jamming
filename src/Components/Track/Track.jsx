import React from "react";
import "./Track.css";

const Track = (props) => {
  const renderAction = () => {
    return props.isRemoval ? (
      <button className="Track-action">-</button>
    ) : (
      <button className="Track-action">+</button>
    );
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.name}</h3>
        <p>
          {props.artist} - {props.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;

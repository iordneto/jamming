import React from "react";
import "./Track.css";

const Track = (props) => {
  const renderAction = () => {
    return props.isRemoval ? (
      <button class="Track-action">-</button>
    ) : (
      <button class="Track-action">+</button>
    );
  };

  return (
    <div class="Track">
      <div class="Track-information">
        <h3>Track Name{/*<!-- track name will go here -->*/}</h3>
        <p>
          Artist
          {/*<!-- track artist will go here--> | <!-- track album will go here -->*/}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;

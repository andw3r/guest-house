import React from "react";
import "./EscapeCol.scss";

const EscapeCol = ({ col }) => {
  return (
    <div class="escape__column">
      <div class="escape__column-icon">
        <img src={require(`../../../assets/images/escape/${col.img}`)} />
      </div>
      <div class="escape__column-text">
        <h6 class="escape__column-title">{col.title}</h6>
        <h6 class="escape__column-description">{col.description}</h6>
      </div>
    </div>
  );
};

export default EscapeCol;

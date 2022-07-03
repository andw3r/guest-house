import React from "react";
import "./TogetherCol.scss";

const TogetherCol = ({ col }) => {
  return (
    <div className="together__column">
      <div className="together__icon">
        <img src={require(`../../../assets/images/together/${col.img}`)} />
      </div>
      <h6>{col.text}</h6>
    </div>
  );
};

export default TogetherCol;

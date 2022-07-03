import React from "react";
import "./ArrangementsCol.scss";

const ArrangementsCol = ({ col }) => {
  return (
    <div classNameName="arrangements__column">
      <div className="arrangements__icon">
        <img src={require(`../../../assets/images/arrangements/${col.img}`)} />
      </div>
      <h6 className="arrangements__column-title">{col.title}</h6>
      <p className="arrangements__column-text">{col.text}</p>
    </div>
  );
};

export default ArrangementsCol;

import React from "react";
import "./Banner.scss";

const Banner = ({ image }) => {
  return (
    <section class="banner">
      <div class="banner__image">
        <img src={image} />
      </div>
    </section>
  );
};

export default Banner;

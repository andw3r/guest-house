import img from "../../assets/images/img";
import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section class="hero">
      <div class="hero__image">
        <img src={img.herobackground} />
      </div>
      <div class="container">
        <div class="hero__wrapper">
          <div class="hero__logo">
            <img src={img.logo} />
          </div>

          <div class="hero__text">
            <h1 class="hero__title">
              Experience the perfect combination of modern housing &amp; natural
              scenery.
            </h1>
            <h6 class="hero__sub-title">Located in Lofoten, norway</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

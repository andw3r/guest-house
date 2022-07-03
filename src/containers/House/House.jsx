import React from "react";
import "./House.scss";

const House = () => {
  return (
    <section class="house section-padding">
      <div class="container">
        <div class="house__wrapper wrapper">
          <div class="house__description">
            <p class="house__text">
              The Guest House is the perfect weekend get-away housing. Located
              in the Norwegian archipelago, Lofoten, it's a great escape from
              the hustle and bustle of the city. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam scelerisque aliquam odio et
              faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque
              ex, condimentum dapibus congue et, vulputate ut ligula.
            </p>
          </div>

          <div class="house__description">
            <p class="house__text">
              Below you'll find information about the accommodation and what's
              included in the price. Don't hesitate to reach out to us vi the
              contact page if you have any questions around your stay.
            </p>
            <button class="house__button btn-book-now">Book now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default House;

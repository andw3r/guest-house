import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section class="contact section-padding">
      <div class="container">
        <div class="wrapper">
          <div class="contact__text">
            <h3 class="contact__title">
              We're already booked up for the spring — hurry up &amp; secure
              your stay for the summer.
            </h3>
            <p class="contact__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus.
            </p>
          </div>

          <div class="contact__outer">
            <button class="contact__button contact__button--contact">
              Contact
            </button>
            <button class="contact__button btn-book-now">Book now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

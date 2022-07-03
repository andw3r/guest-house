import img from "../../assets/images/img";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  const items = [
    "Start",
    "Contact",
    "Our history",
    "Licenses",
    "Instructions",
    "Style guide",
  ];

  return (
    <footer class="footer section-padding">
      <div class="container">
        <div class="footer__wrapper">
          <div class="footer__inner">
            <div class="footer__pages">
              <h6>Pages</h6>
              {items.map((item) => (
                <a href="#">{item}</a>
              ))}
            </div>

            <div class="footer__media">
              <h6>Social Media</h6>
              <div class="footer__media-icons">
                <a href="#">
                  <img src={img.icons.airbnb} alt="" />
                </a>
                <a href="#">
                  <img src={img.icons.facebook} alt="" />
                </a>
                <a href="#">
                  <img src={img.icons.instagram} alt="" />
                </a>
              </div>
            </div>
            <div class="footer__form">
              <h6>Newsletter</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <form action="" class="email-input">
                <input type="text" placeholder="Email" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>

          <div class="footer__outer">
            <div class="footer__image">
              <img src={img.logo} alt="" />
            </div>
            <p class="footer__copyright">
              © Guest House, LLC. All rights reserved. Powered by Webflow
            </p>
            <p>
              +47 (0) 702 88 12 34 example@webflow.io Klubbvika 12, 8310
              Kabelvag, Norway
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

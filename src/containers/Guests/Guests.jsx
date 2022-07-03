import React from "react";
import "./Guests.scss";
import ReviewOffer from "./Review/Review";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import reviews from "../../assets/data/reviews";
import Slider from "react-slick";

const Guests = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="guests section-padding">
      <div className="container">
        <div className="wrapper">
          <div className="guests__text">
            <h2 className="guests__title">Past guests.</h2>
            <p className="guests__description">
              Don't take our word for it! Have a look at what our previous
              guests say about their stay at the Guest House.
            </p>
          </div>

          <motion.div className="reviews-container">
            <motion.div
              ref={carousel}
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
              className="guests__reviews-wrapper carousel"
            >
              {reviews.map((review) => (
                <ReviewOffer review={review} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guests;

import React from "react";
import "./Review.scss";
import { motion } from "framer-motion";
import StarRatings from "react-star-ratings";

const ReviewOffer = ({ review }) => {
  return (
    <motion.div class="review">
      <div className="review__rating">
        <StarRatings
          numberOfStars={5}
          rating={review.rating}
          className="review__star"
          starDimension="18px"
          starSpacing="2px"
          starRatedColor="#52503B"
          starEmptyColor="#FFFFFF"
        />
      </div>
      <h3 class="review__title">{review.title}</h3>
      <p class="review__text">{review.text}</p>
      <p class="review__author">{review.author}</p>
    </motion.div>
  );
};

export default ReviewOffer;

import React from "react";
import TogetherCol from "./TogetherCol/TogetherCol";
import "./Together.scss";

const Together = () => {
  const columns = [
    {
      id: 1,
      img: "01.svg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      img: "02.svg",
      text: "Nulla rhoncus feugiat eros quis consectetur.",
    },
    {
      id: 3,
      img: "03.svg",
      text: "Nullam scelerisque aliquam odio et faucibus.",
    },
    {
      id: 4,
      img: "04.svg",
      text: "Morbi neque ex, condimentum.",
    },
  ];

  return (
    <section className="together section-padding">
      <div className="container">
        <div className="together__wrapper wrapper">
          <div className="together__text">
            <h3 className="together__title">Come together.</h3>
            <p className="together__descrption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus.
            </p>
          </div>

          <div className="together__columns-container">
            {columns.map((col) => (
              <TogetherCol col={col} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Together;

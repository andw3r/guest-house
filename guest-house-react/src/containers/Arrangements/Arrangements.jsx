import img from "../../assets/images/img";
import React from "react";
import "./Arrangements.scss";
import ArrangementsCol from "./ArrangementsCol/ArrangementsCol";

const Arrangements = () => {
  const arrangementsCols = [
    {
      id: 1,
      img: "01.svg",
      title: "Beds",
      text: "The cabin is equipped with 12 beds, 4 of which are in bunk. The rent includes linens for all beds.",
    },
    {
      id: 2,
      img: "02.svg",
      title: "Bedrooms",
      text: "Spread out over two floors, the cabin offers 4 bedrooms. Ranging from 2 to 4 beds per room.",
    },
    {
      id: 3,
      img: "03.svg",
      title: "Bathrooms",
      text: "The cabin has three bathrooms, all equipped with showers and one with a bath tub,",
    },
  ];

  return (
    <section className="arrangements section-padding">
      <div className="container">
        <div className="wrapper">
          <div className="arrangements__main-text">
            <h2 className="arrangements__title">Sleeping arrangements.</h2>
            <h2 className="arrangements__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
              quis consectetur.
            </h2>
          </div>

          <div className="arrangements__row">
            {arrangementsCols.map((col) => (
              <ArrangementsCol col={col} key={col.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrangements;

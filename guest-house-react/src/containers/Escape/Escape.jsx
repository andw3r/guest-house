import React from "react";
import "./Escape.scss";
import EscapeCol from "./EscapeCol/EscapeCol";

const Escape = () => {
  const columns = [
    {
      id: 1,
      img: "01.svg",
      title: "Modern Kitchen Appliances",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      img: "02.svg",
      title: "Outdoor Paths",
      description: "Nulla rhoncus feugiat eros quis consectetur.",
    },
    {
      id: 3,
      img: "03.svg",
      title: "Coffee Maker",
      description:
        "Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.",
    },
    {
      id: 4,
      img: "04.svg",
      title: "Natural Scenery",
      description:
        "Cras commodo consequat orci, in convallis risus egestas non.",
    },
    {
      id: 5,
      img: "05.svg",
      title: "Air Conditioner",
      description: "Nullam scelerisque aliquam odio et faucibus.",
    },
    {
      id: 6,
      img: "06.svg",
      title: "Storage Solutions",
      description:
        "Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.",
    },
    {
      id: 7,
      img: "07.svg",
      title: "Cutlery Selection",
      description: "Duis tristique sed lorem a vestibulum.",
    },
    {
      id: 8,
      img: "08.svg",
      title: "Take-away Options",
      description:
        "Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.",
    },
  ];
  return (
    <section class="escape section-padding">
      <div class="container">
        <div class="wrapper">
          <div class="escape__text">
            <h3 class="escape__title">The perfect escape.</h3>
            <p class="escape__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
              quis consectetur.
            </p>
          </div>

          <div class="escape__columns-container">
            {columns.map((col) => (
              <EscapeCol col={col} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Escape;

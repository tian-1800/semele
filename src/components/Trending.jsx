import React from "react";
import Stars from "../helper/Stars";

import cupcakeChoco from "../img/cupcake-choco.png";
import donerKebab from "../img/doner-kebab.png";
import doughnutMilk from "../img/doughnut-milk.png";
import doughnutUnicorn from "../img/doughnut-unicorn.png";
import kathiKebab from "../img/kathi-kebab.png";
import pizzaMeat from "../img/pizza-meat.png";
import pizzaPaperoni from "../img/pizza-paperoni.png";
import salmonRoll from "../img/salmon-roll.png";

const Trending = () => {
  const receipt = [
    { img: pizzaPaperoni, name: "Pizza Paperoni", category: "Pizza", stars: 4 },
    { img: pizzaMeat, name: "Pizza Meat", category: "Pizza", stars: 3 },
    { img: donerKebab, name: "Doner Kebab", category: "Kebab", stars: 5 },
    { img: salmonRoll, name: "Salmon Roll", category: "Salmon", stars: 4 },
    { img: cupcakeChoco, name: "Cupcake Choco", category: "Cupcake", stars: 4 },
    {
      img: doughnutMilk,
      name: "Doughnut Milk",
      category: "Doughnut",
      stars: 5,
    },
    {
      img: doughnutUnicorn,
      name: "Doughnut Unicorn",
      category: "Doughnut",
      stars: 4,
    },
    { img: kathiKebab, name: "Kathi Kebab", category: "Kebab", stars: 4 },
  ];

  return (
    <div className="trending">
      <h3 className="trending__title">Browser Our Trending</h3>
      <div className="trending__container">
        {receipt.map((item) => {
          const { img, name, category, stars } = item;
          return (
            <div className="trending__item">
              <img src={img} alt={name} className="trending__item-img" />
              <p className="trending__item-name">{name}</p>
              <p className="trending__item-category">{category}</p>
              <Stars stars={stars} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;

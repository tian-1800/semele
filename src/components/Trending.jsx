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
    { img: pizzaPaperoni, name: "Pizza Paperoni", category: "pizza", stars: 4 },
    { img: pizzaMeat, name: "Pizza Meat", category: "pizza", stars: 3 },
    { img: donerKebab, name: "Doner Kebab", category: "kebab", stars: 5 },
    { img: salmonRoll, name: "Salmon Roll", category: "salmon", stars: 4 },
    { img: cupcakeChoco, name: "Cupcake Choco", category: "cupcake", stars: 4 },
    {
      img: doughnutMilk,
      name: "Doughnut Milk",
      category: "doughnut",
      stars: 5,
    },
    {
      img: doughnutUnicorn,
      name: "Doughnut Unicorn",
      category: "doughnut",
      stars: 4,
    },
    { img: kathiKebab, name: "Kathi Kebab", category: "kebab", stars: 4 },
  ];

  return (
    <div className="trending">
      <h3 className="trending__title">
        Browser Our Trending <br />
        <span className="trending__title-green">Receipt</span>
      </h3>
      <div className="trending__container">
        {receipt.map((item) => {
          const { img, name, category, stars } = item;
          return (
            <div className={`trending__item ${category}`}>
              <img src={img} alt={name} className="trending__item-img" />
              <div className="trending__item-detail">
                <p className="trending__item-name">{name}</p>
                <p className="trending__item-category">{category}</p>
                <Stars stars={stars} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="trending__btn btn">
        <a href="##">All Receipt</a>
      </div>
    </div>
  );
};

export default Trending;

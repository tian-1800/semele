import React from "react";
import cupcake from "../icons/cupcake.svg";
import doughnut from "../icons/doughnut.svg";
import kebab from "../icons/kebab.svg";
import pizza from "../icons/pizza.svg";
import salmon from "../icons/salmon.svg";

const Category = () => {
  const categories = [
    { name: "Cupcake", img: cupcake, items: 22 },
    { name: "Pizza", img: pizza, items: 25 },
    { name: "Kebab", img: kebab, items: 12 },
    { name: "Salmon", img: salmon, items: 22 },
    { name: "Doughnut", img: doughnut, items: 11 },
  ];

  return (
    <div className="category">
      <h3 className="category__title">Browser Our Category</h3>
      <div className="category__container">
        {categories.map((category) => {
          const { name, img, items } = category;
          return (
            <div className="category__item">
              <img src={img} alt="" className="category__item-icon" />
              <p className="category__item-name">{name}</p>
              <p className="category__item-items">{items}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;

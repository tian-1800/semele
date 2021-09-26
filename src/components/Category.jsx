import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
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
      <h3 className="category__title">
        Browser Our Category <br />
        <span className="category__title-green">Receipt</span>
      </h3>
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
      <div className="category__btn-container">
        <button type="button" className="category__next-btn btn">
          <MdChevronLeft className="btn__chevron" />
          <span className="category__btn-text">PREV</span>
        </button>
        <button type="button" className="category__next-btn btn">
          <span className="category__btn-text">NEXT</span>
          <MdChevronRight className="btn__chevron" />
        </button>
      </div>
    </div>
  );
};

export default Category;

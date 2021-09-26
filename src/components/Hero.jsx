import React from "react";
import Stars from "../helper/Stars";
import teaserImg from "../img/salad.png";

const Hero = () => {
  const teaser = {
    name: "Green Salad Tomato",
    img: teaserImg,
    category: "Tomato",
    stars: 4,
  };

  const { name, img, category, stars } = teaser;

  return (
    <div className="hero">
      <div className="hero__left">
        <h3 className="hero__title">Good Food Us Good Mood</h3>
        <p className="hero__text">
          I should think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>
      </div>
      <div className="hero__right">
        <img src={img} alt={name} className="hero__teaser-large" />
        <div className="hero__inset inset">
          <img src={img} alt={name} className="inset__img" />
          <div className="inset__detail">
            <p className="inset__title">{name}</p>
            <p className="inset__category">{category}</p>
            <Stars stars={stars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

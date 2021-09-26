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
      <h3 className="hero__title">Good Food Us Good Mood</h3>
      <div className="hero__teaser">
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
      <p className="hero__text">
        I should think that conserving our natural resources should be a
        conservative position: Not to waste food, and not to throw away a lot of
        the food that we buy.
      </p>
      <div className="hero__container-btn">
        <div className="hero__btn btn__masuk">Daftar Sekarang</div>
        <div className="hero__btn btn__about">About Us</div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Footer = () => {
  const burger = (
    <div className="footer__burger">
      <div className="footer__burger-bar" />
      <div className="footer__burger-bar" />
      <div className="footer__burger-bar" />
    </div>
  );

  return (
    <div className="footer">
      <p className="footer__text-desktop">
        &copy; 2021 ELEMES ID. ALL RIGHTS RESERVED
      </p>
      <div className="footer__block">
        {burger}
        <p className="footer__group-name">Home</p>
      </div>
      <div className="footer__block">
        {burger}
        <p className="footer__group-name">Promotions</p>
      </div>
      <div className="footer__block">
        {burger}
        <p className="footer__group-name">Others</p>
      </div>
    </div>
  );
};

export default Footer;

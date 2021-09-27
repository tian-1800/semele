import React from "react";
import logo from "../img/logo.png";

const Navbar = () => (
  <div className="navbar">
    <img src={logo} alt="logo" className="navbar__logo" />

    <div className="navbar__menu">
      <span className="navbar__menu-item">
        <a href="##">Home</a>
      </span>
      <span className="navbar__menu-item">
        <a href="##">About</a>
      </span>
      <span className="navbar__menu-item">
        <a href="##">Promotions</a>
      </span>
      <span className="navbar__menu-item">
        <a href="##">Blogs</a>
      </span>
      <span className="navbar__menu-item">
        <a href="##">Contact Us</a>
      </span>
    </div>
    <div className="navbar__login">
      <span className="navbar__login-text">Masuk</span>
      <span className="btn__masuk navbar__login-button"> Daftar Sekarang</span>
    </div>
  </div>
);

export default Navbar;

import React from "react";
import { FiMail, FiPhone, FiInstagram } from "react-icons/fi";
import logo from "../img/logo.png";

const BottomNav = () => (
  <div className="bottom-nav">
    <div className="bottom-nav__company">
      <img src={logo} alt="logo" className="bottom-nav__logo" />
      <p className="bottom-nav__address">
        Jl. Prof. Dr. Satrio no.7, RT 3/RW 3, Karet Kuningan, Kecamatan
        Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
      </p>
      <div className="bottom-nav__btn-container">
        <div className="bottom-nav__btn-item">
          <FiMail />
        </div>
        <div className="bottom-nav__btn-item">
          <FiPhone />
        </div>
        <div className="bottom-nav__btn-item">
          <FiInstagram />
        </div>
      </div>
    </div>
    <div className="bottom-nav__section">
      <p className="bottom-nav__subtitle">Categories</p>
      <p className="bottom-nav__subitem">
        <a href="##"> Cupcake</a>
      </p>
      <p className="bottom-nav__subitem">
        <a href="##"> Pizza</a>
      </p>
      <p className="bottom-nav__subitem">
        <a href="##"> Kebab</a>
      </p>
      <p className="bottom-nav__subitem">
        <a href="##"> Salmon</a>
      </p>
      <p className="bottom-nav__subitem">
        <a href="##"> Doughnut</a>
      </p>
    </div>
    <div className="bottom-nav__section">
      <p className="bottom-nav__subtitle">About Us</p>
      <p className="bottom-nav__subitem">
        <a href="##"> About Us</a>
      </p>
      <p className="bottom-nav__subitem">
        <a href="##"> FAQ</a>
      </p>
      <p className="bottom-nav__subitem">
        <a href="##"> Report Problem</a>
      </p>
    </div>
    <div className="bottom-nav__section">
      <p className="bottom-nav__subtitle">Newsletter</p>
      <p className="bottom-nav__discount">
        Get now free 50% discount for all products on your first order
      </p>
      <form action="" className="bottom-nav__form">
        <input
          type="text"
          className="bottom-nav__form-input"
          placeholder="Your email address"
        />
        <button type="submit" className="bottom-nav__form-btn btn">
          SEND
        </button>
      </form>
      <div className="bottom-nav__newsletter-email">
        <FiMail className="bottom-nav__newsletter-icon" />
        elemesid@gmail.com
      </div>
      <div className="bottom-nav__newsletter-phone">
        <FiPhone className="bottom-nav__newsletter-icon" />
        0888 1111 2222
      </div>
    </div>
  </div>
);

export default BottomNav;

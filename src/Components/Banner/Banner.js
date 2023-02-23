import React from "react";
import "./Banner.scss";

const Banner = () => {
  const scrollDown = () => {
    window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
  };

  return (
    <div className="banner">
      <img
        className="img"
        src="https://cdn.shopify.com/s/files/1/0304/5739/7386/files/slide1.3.jpg?v=1613680270"
      />
      <div className="title">
        <h3 className="banner-h3">TREND SHOPPING</h3>
        <h1>Health Clay Studio</h1>
        <h2>DinnersetWare</h2>
        <a className="btn shop" href="#shop">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner;

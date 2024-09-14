import React from "react";
import "./carousel.scss";
import carouselLogo from "../../assets/images/carousel-logo.svg";

export const Carousel = () => {
  return (
    <div id="carousel">
      <p>USED BY OVER 50 ENTERPRISES</p>
      <div className="carousel-track">
        <img src={carouselLogo} alt="logo" />
        <img src={carouselLogo} alt="logo" />
        <img src={carouselLogo} alt="logo" />
        <img src={carouselLogo} alt="logo" />
        <img src={carouselLogo} alt="logo" />
        <img src={carouselLogo} alt="logo" />
      </div>
    </div>
  );
};

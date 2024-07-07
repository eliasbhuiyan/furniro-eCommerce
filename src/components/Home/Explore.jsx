import React from "react";
import Button from "../utilities/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../utilities/NextArrow";
import PrevArrow from "../utilities/PrevArrow";
const Explore = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow/>,
  };
  return (
    <section className="mb-16 py-11 bg-[#FCF8F3] explore">
      <div className="container flex gap-10 items-center">
        <div className="w-2/5">
          <h2 className="title">50+ Beautiful rooms inspiration</h2>
          <p className="details mb-6">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Button title="Explore More" path="/shop" />
        </div>
        <div className="w-3/5">
          <Slider {...settings}>
            <div className="slide_items">
              <img src="/slide-1.png" className="w-full h-full" alt="" />
            </div>
            <div className="slide_items">
              <img src="/slide-2.png" className="w-full h-full" alt="" />
            </div>
            <div className="slide_items">
              <img src="/slide-3.png" className="w-full h-full" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Explore;

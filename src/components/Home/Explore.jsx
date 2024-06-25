import React from "react";
import Button from "../Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const Explore = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section className="mb-16 py-11 bg-[#FCF8F3]">
      <div className="container flex gap-10">
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
            <div className="">
              <img src="/slide-1.png" className="w-full" alt="" />
            </div>
            <div className="">
              <img src="/slide-1.png" className="w-full" alt="" />
            </div>
            <div className="">
              <img src="/slide-1.png" className="w-full" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Explore;

import React from "react";
import Button from "../utilities/Button";

const Banner = () => {
  return (
    <section className="py-[150px] bg-[url('/banner.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="container">
        <div className="w-1/2 bg-[#FFF3E3] ml-auto pt-14 pb-9 px-10 rounded-xl">
          <h2 className="text-lg font-primary font-semibold text-primary">
            New Arrival
          </h2>
          <h1 className="text-[52px] font-primary font-bold text-brand leading-[65px] w-[420px] pt-1 pb-4">
            Discover Our New Collection
          </h1>
          <p className="text-lg font-primary text-primary font-medium pb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button title="BUY NOW" path="/shop" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

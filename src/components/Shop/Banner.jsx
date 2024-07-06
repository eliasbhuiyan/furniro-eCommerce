import React from "react";
import BreadCrumb from "../utilities/BreadCrumb";

const Banner = () => {
  return (
    <section className="pt-[120px] pb-24 bg-[url('/shop_banner.png')]">
      <div className="container">
        <h2 className="font-primary text-5xl font-medium text-black text-center">
          Shop
        </h2>
        <BreadCrumb />
      </div>
    </section>
  );
};

export default Banner;

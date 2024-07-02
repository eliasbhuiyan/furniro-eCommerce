import React from "react";
import BreadCrumb from "./BreadCrumb";

const PageBanner = ({ title }) => {
  return (
    <section className="pt-[120px] pb-24 bg-[url('/shop_banner.png')]">
      <div className="container">
        <img src="/logo-icon.png" alt="logo-icon" className="m-auto" />
        <h2 className="font-primary text-5xl font-medium text-black text-center">
          {title}
        </h2>
        <BreadCrumb />
      </div>
    </section>
  );
};

export default PageBanner;

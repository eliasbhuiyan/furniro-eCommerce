import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Details from "../components/ProductDetails/Details";

const ProductDetails = () => {
  return (
    <section>
      <div className="py-8 bg-third">
        <BreadCrumb />
      </div>
      <Details />
    </section>
  );
};

export default ProductDetails;

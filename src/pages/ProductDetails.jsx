import React from "react";
import BreadCrumb from "../components/utilities/BreadCrumb";
import Details from "../components/ProductDetails/Details";
import RelatedProducts from "../components/ProductDetails/RelatedProducts";

const ProductDetails = () => {
  return (
    <section>
      <div className="py-8 bg-third">
        <BreadCrumb />
      </div>
      <Details />
      <RelatedProducts />
    </section>
  );
};

export default ProductDetails;

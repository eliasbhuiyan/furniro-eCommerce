import React from "react";
import { Link } from "react-router-dom";
import ProductItems from "../utilities/ProductItems";

const RelatedProducts = () => {
  return (
    <section className="pt-14 pb-24">
      <div className="container">
        <h2 className="title text-center">Related Products</h2>
        <div className="flex justify-between pt-6 pb-11">
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/shop"
            className="text-brand text-base font-primary font-bold py-3 px-[78px] inline-block border-2 border-brand"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;

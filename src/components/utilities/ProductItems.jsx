import React from "react";
import { Link } from "react-router-dom";

const ProductItems = ({data}) => {
  return (
    <Link to={`/shop/${data?.id}`} className="relative group h-fit overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(58,58,58,0.31)] flex items-center justify-center scale-0 group-hover:scale-100 transition-all">
          <button className="text-brand text-base font-primary font-bold py-3 px-[52px] bg-white inline-block">
            Add to cart
          </button>
        </div>
      <div className="w-full">
        <img src={data?.images[0]} className="w-full" alt="product" />
      </div>
      <div className="bg-[#F4F5F7] px-5 pt-4 pb-7 block">
        <h3 className="font-primary text-xl font-semibold text-primary">
          {data?.title}
        </h3>
        <p className="font-primary text-base font-medium text-secondary py-2">
          {data?.description.substring(0,60)}...
        </p>
        <div className="flex justify-between">
          <p className="font-primary text-xl font-medium text-primary">
            BDT {data?.price}
          </p>
          <p className="font-primary text-xl font-medium text-secondary line-through">
            BDT 3.500.000
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItems;

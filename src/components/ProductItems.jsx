import React from "react";

const ProductItems = () => {
  return (
    <div>
      <img src="/product.png" className="w-full" alt="product" />
      <div className="bg-[#F4F5F7] px-5 pt-4 pb-7">
        <h3 className="font-primary text-2xl font-semibold text-primary">
          Syltherine
        </h3>
        <p className="font-primary text-base font-medium text-secondary py-2">
          Stylish cafe chair
        </p>
        <div className="flex justify-between">
          <p className="font-primary text-xl font-medium text-primary">
            BDT 2.500.000
          </p>
          <p className="font-primary text-xl font-medium text-secondary line-through">
            BDT 3.500.000
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;

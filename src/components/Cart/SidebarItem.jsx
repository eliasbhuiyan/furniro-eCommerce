import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
const SidebarItem = () => {
  return (
    <div className="flex items-center pb-5">
      <div className="w-24 rounded-xl overflow-hidden">
        <img src="/product.png" className="w-full" alt="product" />
      </div>
      <div className=" ml-8 mr-14">
        <h3 className="font-primary font-normal text-base text-black pb-3">
          Asgaard sofa
        </h3>
        <p className="font-primary font-light text-base text-black">
          1 x <span className="text-brand font-medium">BDT 2.500.000</span>
        </p>
      </div>
      <FaRegWindowClose className="text-secondary cursor-pointer" />
    </div>
  );
};

export default SidebarItem;

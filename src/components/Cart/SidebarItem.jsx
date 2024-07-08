import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { removeFromCart } from "../../reducer/productSlice";
import { useDispatch } from "react-redux";
const SidebarItem = ({data}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center pb-5">
      <div className="w-24 rounded-xl overflow-hidden">
        <img src={data?.images} className="w-full" alt="product" />
      </div>
      <div className=" ml-8 mr-14">
        <h3 className="font-primary font-normal text-base text-black pb-3">
          {data?.title}
        </h3>
        <p className="font-primary font-light text-base text-black">
          {data?.quantity} x <span className="text-brand font-medium">BDT {data?.total}</span>
        </p>
      </div>
      <FaRegWindowClose onClick={()=> dispatch(removeFromCart(data?.id))} className="text-secondary cursor-pointer" />
    </div>
  );
};

export default SidebarItem;

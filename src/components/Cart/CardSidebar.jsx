import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import CardButton from "../utilities/CardButton";
import { useSelector } from "react-redux";

const CardSidebar = ({ handelSidebar }) => {
  const productList = useSelector((state)=> state.cartList.product)
  const totalPrice = productList.reduce((total, product)=> total + product.total,0)

  return (
    <div className="fixed bottom-0 left-0 w-full h-full bg-[rgba(0,0,0,0.20)] z-50">
      <div className="w-fit py-7 bg-white ml-auto h-[746px]">
        <div className="flex items-center justify-between mb-10 pb-6 border-b px-6">
          <h2 className="font-primary font-semibold text-black text-2xl">
            Shopping Cart
          </h2>
          <FaRegWindowClose
            onClick={() => handelSidebar(false)}
            className="text-secondary cursor-pointer"
          />
        </div>
        <div className="sideCard h-[480px] overflow-y-scroll px-6">
          {
            productList.map((item)=>(
              <SidebarItem key={item.key} data={item}/>
            ))
          }
        </div>
        <div className="flex items-center justify-between pb-6 border-b px-6">
          <p className="font-primary font-normal text-base text-black">
            Subtotal
          </p>
          <p className="font-primary font-semibold text-base text-brand">
            BDT. {totalPrice}
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6 px-6">
          <CardButton path="/cart" title="Cart" />
          <CardButton path="/checkout" title="Checkout" />
        </div>
      </div>
    </div>
  );
};

export default CardSidebar;

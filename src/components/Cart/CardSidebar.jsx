import React, { useEffect, useRef } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import CardButton from "../utilities/CardButton";
import { useSelector } from "react-redux";

const CardSidebar = ({ handelSidebar }) => {
  const productList = useSelector((state)=> state.cartList.product)
  const totalPrice = productList.reduce((total, product)=> total + product.total,0)

  const cartRef = useRef(null)

  const handelCartToggle = (e)=>{
    if(e.target.contains(cartRef.current)){
      handelSidebar(false)
    }
  }

  useEffect(()=>{
    document.addEventListener("mousedown", handelCartToggle)

    return ()=> document.removeEventListener("mousedown", handelCartToggle)
  },[])

  return (
    <div className="fixed bottom-0 left-0 w-full h-full bg-[rgba(0,0,0,0.20)] z-50">
      <div ref={cartRef} className="w-fit py-7 bg-white ml-auto h-[746px] flex flex-col">
        <div className="flex items-center justify-between mb-10 pb-6 border-b px-6">
          <h2 className="font-primary font-semibold text-black text-2xl">
            Shopping Cart
          </h2>
          <FaRegWindowClose
            onClick={() => handelSidebar(false)}
            className="text-secondary cursor-pointer"
          />
        </div>
        {
          productList.length > 0
          ?
          <>
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
          </>
          :
          <div className="px-6">
            <p>There are no items in this cart!</p>
          </div>
        }
        <div className="flex items-center justify-center gap-4 px-6 mt-auto">
          <CardButton path="/cart" title="Cart" />
          <CardButton path="/checkout" title="Checkout" />
        </div>
      </div>
    </div>
  );
};

export default CardSidebar;

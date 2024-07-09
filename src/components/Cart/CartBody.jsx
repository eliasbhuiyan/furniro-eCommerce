import React from "react";
import CartItems from "./CartItems";
import CardButton from "../utilities/CardButton";
import { useSelector } from "react-redux";
const CartBody = () => {
  const productList = useSelector((state)=> state.cartList.product)
  const totalPrice = productList.reduce((total, product)=> total + product.total,0)
  return (
    <section className="py-16">
      <div className="container flex gap-8">
        {
          productList.length > 0
          ?
          <>
          <table className="w-9/12">
            <thead>
              <tr>
                <th className="bg-third py-4 font-primary font-medium text-base">
                  Product
                </th>
                <th className="bg-third py-4 font-primary font-medium text-base">
                  Price
                </th>
                <th className="bg-third py-4 font-primary font-medium text-base">
                  Quantity
                </th>
                <th className="bg-third py-4 font-primary font-medium text-base">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {
                productList.map((item)=>(
                  <CartItems key={item.key} data={item}/>
                ))
              }
            </tbody>
          </table>
          <div className="w-3/12 px-16 pt-4 pb-12 bg-third text-center h-fit">
            <h3 className="font-primary font-semibold text-3xl mb-16">
              Cart Totals
            </h3>
            <div className="flex justify-between">
              <p className="font-primary font-medium text-base">Subtotal</p>
              <p className="font-primary font-medium text-base text-secondary">
                BDT. {totalPrice}
              </p>
            </div>
            <div className="flex justify-between pt-8 pb-10">
              <p className="font-primary font-medium text-base">Total</p>
              <p className="font-primary font-medium text-base text-brand">
                BDT. {totalPrice}
              </p>
            </div>
            <CardButton path="/checkout" title="Check Out" />
          </div>
          </>
          :
          <div className="w-full text-center">
            <p className="pb-8 text-primary font-primary font-semibold">There are no items in this cart!</p>
            <CardButton path="/shop" title="Continue Shopping" />
          </div>
        }
      </div>
    </section>
  );
};

export default CartBody;

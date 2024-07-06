import React from "react";
import CartBody from "../components/Cart/CartBody";
import PageBanner from "../components/utilities/PageBanner";

const Cart = () => {
  return (
    <>
      <PageBanner title="Cart" />
      <CartBody />
    </>
  );
};

export default Cart;

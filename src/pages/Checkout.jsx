import React from "react";
import CheckoutBody from "../components/Checkout/CheckoutBody";
import PageBanner from "../components/utilities/PageBanner";

const Checkout = () => {
  return (
    <>
      <PageBanner title="Checkout" />
      <CheckoutBody />
    </>
  );
};

export default Checkout;

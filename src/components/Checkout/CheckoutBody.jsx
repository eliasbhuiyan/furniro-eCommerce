import React from "react";
import InputBox from "../utilities/InputBox";
import SelectBox from "../utilities/SelectBox";
import CardButton from "../utilities/CardButton";
import { useSelector } from "react-redux";

const CheckoutBody = () => {
  const productList = useSelector((state) => state.cartList.product);
  const totalPrice = productList.reduce(
    (total, product) => total + product.total,
    0
  );
  return (
    <section className="py-24">
      <div className="container flex justify-between">
        <div className="w-2/5">
          <h2 className="title">Billing details</h2>
          <div className="flex gap-8">
            <InputBox title="First Name" />
            <InputBox title="Last Name" />
          </div>
          <InputBox title="Company Name (Optional)" />
          <SelectBox title="Country / Region"></SelectBox>
          <InputBox title="Street address" />
          <InputBox title="Town / City" />
          <SelectBox title="Province"></SelectBox>
          <InputBox title="ZIP code" type="number" />
          <InputBox title="Phone" type="number" />
          <InputBox title="Email address" type="email" />
          <InputBox placeholder="Additional information" type="email" />
        </div>
        <div className="w-2/5 mt-20">
          <div className="flex justify-between">
            <p className="font-primary font-medium text-2xl">Product</p>
            <p className="font-primary font-medium text-2xl">Subtotal</p>
          </div>
          {productList.map((item) => (
            <div key={item.key} className="flex justify-between mt-4">
              <p className="font-primary font-normal text-base text-secondary">
                {item?.title}
                <span className="text-black"> X {item?.quantity}</span>
              </p>
              <p className="font-primary font-light text-base">
                BDT. {item.total}
              </p>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <p className="font-primary font-normal text-base text-black">
              Subtotal
            </p>
            <p className="font-primary font-light text-base">
              BDT. {totalPrice}
            </p>
          </div>
          <div className="flex justify-between mt-4 pb-8 border-b">
            <p className="font-primary font-normal text-base text-black">
              Total
            </p>
            <p className="font-primary font-bold text-2xl text-brand">
              BDT. {totalPrice}
            </p>
          </div>
          <div className="mt-5">
            <h3 className="font-primary font-medium text-base text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-black inline-block mr-4"></span>
              Direct Bank Transfer
            </h3>
            <p className="font-primary font-normal text-base text-secondary pt-3">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div className="flex gap-4 font-primary font-normal text-base text-secondary pt-3">
            <input type="radio" id="bank" name="payment" />
            <label htmlFor="bank" className="cursor-pointer">
              Direct Bank Transfer
            </label>
          </div>
          <div className="flex gap-4 font-primary font-normal text-base text-secondary pt-3">
            <input type="radio" id="cash" name="payment" />
            <label htmlFor="cash" className="cursor-pointer">
              Cash On Delivery
            </label>
          </div>
          <p className="font-primary font-normal text-base text-black pt-3">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <div className="flex justify-center mt-10">
            <CardButton title="Place order" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutBody;

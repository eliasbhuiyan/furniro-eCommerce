import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const CartItems = () => {
  return (
    <tr>
      <td className="pt-5">
        <div className="flex items-center gap-9 justify-center">
          <div className="w-28 rounded-xl overflow-hidden">
            <img src="/product.png" className="w-full" alt="product" />
          </div>
          <p className="font-primary font-normal text-base text-secondary">
            Asgaard sofa
          </p>
        </div>
      </td>
      <td className="pt-5">
        <p className="font-primary font-normal text-base text-secondary text-center">
          Rs. 250,000.00
        </p>
      </td>
      <td className="pt-5">
        <p className="w-8 h-8 border flex justify-center items-center m-auto">
          1
        </p>
      </td>
      <td className="pt-5">
        <div className="flex items-center gap-12 justify-center">
          <p>Rs. 250,000.00</p>
          <button>
            <MdDeleteOutline className="text-2xl text-brand" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItems;

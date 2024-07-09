import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../reducer/productSlice";

const CartItems = ({data}) => {
  const dispatch = useDispatch()
  return (
    <tr>
      <td className="pt-5">
        <div className="flex items-center gap-9 pl-8">
          <div className="w-28 rounded-xl overflow-hidden">
            <img src={data?.images} className="w-full" alt="product" />
          </div>
          <p className="font-primary font-normal text-base text-secondary">
            {data?.title}
          </p>
        </div>
      </td>
      <td className="pt-5">
        <p className="font-primary font-normal text-base text-secondary text-center">
          BDT. {data?.price}
        </p>
      </td>
      <td className="pt-5">
        <p className="w-8 h-8 border flex justify-center items-center m-auto">
          {data?.quantity}
        </p>
      </td>
      <td className="pt-5">
        <div className="flex items-center gap-12 justify-center">
          <p>BDT. {data?.total}</p>
          <button onClick={()=> dispatch(removeFromCart(data?.id))}>
            <MdDeleteOutline className="text-2xl text-brand" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItems;

import React, { useState } from "react";
import ProductSlide from "product-slide";
import { FaStar, FaStarHalf } from "react-icons/fa";
import CardButton from "../utilities/CardButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducer/productSlice";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Details = ({data}) => {
  data.size = ["L", "XL", "XS"]
  const [selectSize, setSelectSize] = useState(data?.size[0]);
  const [selectColor, setSelectColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()
  const settings = {
    direction: "vertical",
    zoom: true,
  };
const handelAddToCart = ()=>{
  data = {
    ...data,
    size: selectSize,
    color: selectColor,
    quantity: quantity,
    images: data?.images[0],
    total: data?.price * quantity
  }
  dispatch(addToCart(data))
  toast.success('Product add to cart successfully! Continue Shopping.');
}
  return (
    <section className="py-9">
      <ToastContainer position="top-center" />
      <div className="container">
        <div className="flex gap-20">
          <div className="w-1/2">
            <ProductSlide settings={settings} api={data.images} />
          </div>
          <div className="w-1/2">
            <h2 className="title pb-3">{data?.title}</h2>
            <p className="font-primary font-medium text-2xl text-secondary">
              BDT {data?.price}
            </p>
            <ul className="flex items-center gap-2 text-xl text-[#FFC700] py-4">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStarHalf />
              </li>
            </ul>
            <p className="font-primary font-normal text-base">
              {data?.description}
            </p>
            <div className="py-5">
              <p className="font-primary font-normal text-base text-secondary">
                Size
              </p>
              <div className="flex gap-4">
                <label
                  htmlFor="L"
                  className={`w-8 h-8 ${
                    selectSize === "L" ? "bg-brand" : "bg-third"
                  }  cursor-pointer rounded-lg text-black font-primary flex items-center justify-center`}
                >
                  L
                  <input
                    type="radio"
                    id="L"
                    name="size"
                    value="L"
                    onChange={(e) => setSelectSize(e.target.value)}
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor="XL"
                  className={`w-8 h-8 ${
                    selectSize === "XL" ? "bg-brand" : "bg-third"
                  }  cursor-pointer rounded-lg text-black font-primary flex items-center justify-center`}
                >
                  XL
                  <input
                    type="radio"
                    id="XL"
                    name="size"
                    value="XL"
                    onChange={(e) => setSelectSize(e.target.value)}
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor="XS"
                  className={`w-8 h-8 ${
                    selectSize === "XS" ? "bg-brand" : "bg-third"
                  }  cursor-pointer rounded-lg text-black font-primary flex items-center justify-center`}
                >
                  XS
                  <input
                    type="radio"
                    id="XS"
                    name="size"
                    value="XS"
                    onChange={(e) => setSelectSize(e.target.value)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div className="py-5">
              <p className="font-primary font-normal text-base text-secondary">
                Color
              </p>
              <div className="flex gap-4">
                <label
                  htmlFor="blue"
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    selectColor === "blue" && "scale-110"
                  }`}
                  style={{ background: "blue" }}
                >
                  <input
                    type="radio"
                    id="blue"
                    name="Color"
                    value="blue"
                    onChange={(e) => setSelectColor(e.target.value)}
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor="green"
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    selectColor === "green" && "scale-110"
                  }`}
                  style={{ background: "green" }}
                >
                  <input
                    type="radio"
                    id="green"
                    name="Color"
                    value="green"
                    onChange={(e) => setSelectColor(e.target.value)}
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor="black"
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    selectColor === "black" && "scale-110"
                  }`}
                  style={{ background: "black" }}
                >
                  <input
                    type="radio"
                    id="black"
                    name="Color"
                    value="black"
                    onChange={(e) => setSelectColor(e.target.value)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-5 items-center py-14 border-b">
              <div className="flex py-2 px-2 gap-9 border w-fit rounded-xl text-lg">
                <button
                  onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <CardButton click={handelAddToCart} title="Add To Cart" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import CartSidebar from "../Cart/CardSidebar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [sideCard, setSideCard] = useState(false);
  const productList = useSelector((state)=> state.cartList.product)
  const handelSidebar = (result) => {
    setSideCard(result);
  };
  console.log(productList.length);
  return (
    <>
      <nav className="py-7 relative">
        <div className="container flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
          <ul
            className={`w-1/2 lg:w-auto ${
              show ? "translate-x-0" : "-translate-x-full"
            } transition-all flex flex-col lg:flex-row items-center gap-[75px] font-primary text-lg font-medium text-black absolute lg:static top-full left-0 bg-white h-screen lg:h-auto`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          <div>
            <ul className="flex items-center gap-11 text-2xl">
              <li>
                <Link>
                  <FaRegUser />
                </Link>
              </li>
              <li>
                <Link>
                  <FaSearch />
                </Link>
              </li>
              <li>
                <Link>
                  <FaRegHeart />
                </Link>
              </li>
              <li className="relative" onClick={() => setSideCard(true)}>
                <IoCartOutline className="cursor-pointer text-3xl" />
                <span className="absolute -top-4 -right-2 bg-brand w-6 h-6 rounded-full flex items-center justify-center text-base text-white">{productList.length}</span>
              </li>
            </ul>
          </div>
          <button className="block lg:hidden" onClick={() => setShow(!show)}>
            <FaBarsStaggered className="text-2xl" />
          </button>
        </div>
      </nav>
      {sideCard && <CartSidebar handelSidebar={handelSidebar} />}
    </>
  );
};

export default Navbar;

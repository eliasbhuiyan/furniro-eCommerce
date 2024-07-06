import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import CartSidebar from "../Cart/CardSidebar";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [sideCard, setSideCard] = useState(false);
  const handelSidebar = (result) => {
    setSideCard(result);
  };
  return (
    <>
      <nav className="py-7 relative">
        <div className="container flex justify-between items-center">
          <div>
            <img src="/logo.png" alt="logo" />
          </div>
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
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
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
              <li onClick={() => setSideCard(true)}>
                <IoCartOutline className="cursor-pointer" />
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

import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className=" py-7">
      <div className="container flex justify-between items-center">
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <ul className="flex items-center gap-[75px] font-primary text-lg font-medium text-black">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
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
            <li>
              <Link>
                <IoCartOutline />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

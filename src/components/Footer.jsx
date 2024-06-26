import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-12 pb-9 border-t">
      <div className="container">
        <div className="container flex justify-between">
          <div>
            <img src="/logo.png" alt="" />
            <p className="details w-72 pt-14">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <ul>
            <li>
              <p className="details pb-14">Links</p>
            </li>
            <li>
              <Link
                to="/"
                className="text-primary font-primary text-base font-medium pb-12 inline-block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-primary font-primary text-base font-medium pb-12 inline-block"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-primary font-primary text-base font-medium pb-12 inline-block"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-primary font-primary text-base font-medium pb-12 inline-block"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <p className="details pb-14">Help</p>
            </li>
            <li>
              <Link
                to="/"
                className="text-primary font-primary text-base font-medium pb-12 inline-block"
              >
                Payment Options
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-primary font-primary text-base font-medium pb-12 inline-block"
              >
                Returns
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-primary font-primary text-base font-medium"
              >
                Privacy Policies
              </Link>
            </li>
          </ul>
          <div>
            <p className="details pb-14">Newsletter</p>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b border-b-black"
            />
            <button className="border-b border-black ml-2">SUBSCRIBE</button>
          </div>
        </div>
        <p className="text-primary font-primary text-base font-medium border-t pt-9">
          2023 furino. All rights reverved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

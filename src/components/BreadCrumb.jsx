import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumb = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <ul className="flex items-center justify-center gap-5 mt-1">
      <li>
        <Link to="/" className="font-primary text-base font-medium text-black">
          Home
        </Link>
      </li>
      <li>
        <FaChevronRight />
      </li>
      <li>
        <p className="font-primary text-base font-light text-black capitalize">
          {path}
        </p>
      </li>
    </ul>
  );
};

export default BreadCrumb;

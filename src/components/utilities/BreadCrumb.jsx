import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumb = () => {
  const location = useLocation();
  const path1 = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];
  console.log(path2);
  return (
    <ul className="flex items-center justify-center gap-6 mt-1">
      <li>
        <Link to="/" className="font-primary text-base font-medium text-black">
          Home
        </Link>
      </li>
      <li>
        <FaChevronRight />
      </li>
      <li>
        <Link
          to={`/${path1}`}
          className="font-primary text-base font-light text-black capitalize"
        >
          {path1}
        </Link>
      </li>
      {path2 && (
        <>
          <li>
            <FaChevronRight />
          </li>
          <li>
            <p className="font-primary text-base font-light text-black capitalize border-l-2 border-l-secondary pl-8">
              {path2}
            </p>
          </li>
        </>
      )}
    </ul>
  );
};

export default BreadCrumb;

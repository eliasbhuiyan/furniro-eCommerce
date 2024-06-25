import React from "react";
import { FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-brand cursor-pointer w-12 h-12 rounded-full flex justify-center items-center bg-white absolute top-1/2 right-0 -translate-y-1/2"
    >
      <FaChevronRight />
    </div>
  );
};

export default NextArrow;

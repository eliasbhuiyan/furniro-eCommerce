import React from "react";
import { Link } from "react-router-dom";

const CardButton = ({ title, path }) => {
  return (
    <Link
      to={path}
      className="py-2 px-8 border border-secondary rounded-full font-primary font-normal text-xs text-black"
    >
      {title}
    </Link>
  );
};

export default CardButton;

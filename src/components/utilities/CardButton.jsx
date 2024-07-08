import React from "react";
import { Link } from "react-router-dom";

const CardButton = ({ title, path, click}) => {
  return (
    <Link
      onClick={click}
      to={path}
      className="h-fit py-2 px-8 border border-secondary rounded-full font-primary font-normal text-xs text-black inline-block"
    >
      {title}
    </Link>
  );
};

export default CardButton;

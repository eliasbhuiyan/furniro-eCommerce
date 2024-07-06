import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, path }) => {
  return (
    <Link
      className="text-white text-base font-primary font-bold py-6 px-[72px] bg-brand inline-block"
      to={path}
    >
      {title}
    </Link>
  );
};

export default Button;

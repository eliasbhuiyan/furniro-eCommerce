import React from "react";

const SelectBox = ({ children, title }) => {
  return (
    <div className="pt-9">
      <label className="block font-primary font-medium text-base text-black pb-5">
        {title}
      </label>
      <select className="border border-secondary rounded-lg py-4 w-full">
        {children}
      </select>
    </div>
  );
};

export default SelectBox;

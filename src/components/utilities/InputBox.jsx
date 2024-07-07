import React from "react";

const InputBox = ({ title, type = "text", placeholder }) => {
  return (
    <div className="pb-9 w-full">
      <label className="block font-primary font-medium text-base text-black pb-5">
        {title}
      </label>
      <input
        type={type}
        className="border border-secondary rounded-lg py-4 w-full px-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;

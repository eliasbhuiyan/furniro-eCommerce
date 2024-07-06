import React from "react";
import InputBox from "../utilities/InputBox";
import Button from "../utilities/Button";
const ContactForm = () => {
  return (
    <div className="w-1/2">
      <InputBox title="Your name" placeholder="Abc" />
      <InputBox
        title="Email address"
        placeholder="abc@gmail.com"
        type="email"
      />
      <InputBox title="Subject" placeholder="This is an optional" />
      <InputBox title="Message" placeholder="Hi! i’d like to ask about" />
      <button className="text-white text-base font-primary font-bold py-6 px-[72px] bg-brand inline-block mt-12 rounded-lg">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;

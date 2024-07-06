import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoTime } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="w-1/2">
      <div className="flex gap-8 items-start">
        <FaLocationDot className="text-2xl mt-1" />
        <div>
          <h4 className="font-primary font-medium text-2xl text-black">
            Address
          </h4>
          <p className="font-primary font-normal text-base text-black w-52">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>
      <div className="flex gap-8 items-start mt-11">
        <FaPhoneAlt className="text-2xl mt-1" />
        <div>
          <h4 className="font-primary font-medium text-2xl text-black">
            Phone
          </h4>
          <Link
            to="tel: +(84) 546-6789"
            className="font-primary font-normal text-base text-black w-52 block"
          >
            Mobile: +(84) 546-6789
          </Link>
          <Link
            to="tel: +(84) 456-6789"
            className="font-primary font-normal text-base text-black w-52 block"
          >
            Hotline: +(84) 456-6789
          </Link>
        </div>
      </div>
      <div className="flex gap-8 items-start mt-11">
        <IoTime className="text-2xl mt-1" />
        <div>
          <h4 className="font-primary font-medium text-2xl text-black">
            Working Time
          </h4>
          <p className="font-primary font-normal text-base text-black w-52 block">
            Monday-Friday: 9:00 - 22:00
          </p>
          <p className="font-primary font-normal text-base text-black w-52 block">
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

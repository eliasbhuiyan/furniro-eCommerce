import React from "react";
import PageBanner from "../components/utilities/PageBanner";
import Heading from "../components/Contact/Heading";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <PageBanner title="Contact" />
      <section className="py-20">
        <div className="container">
          <Heading />
          <div className="flex">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

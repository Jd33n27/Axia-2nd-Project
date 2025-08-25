import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 container px-2 mx-auto rounded-2xl my-10 shadow-sm border border-slate-200 "
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:flex md:items-center md:max-w-full md:gap-6 md:justify-center">
        <div>
          <img
            src="https://axia.africa/assets/bulb-B9RwrT5r.png"
            alt=""
            className="mx-auto my-3"
          />
        </div>
        <div className="md:text-start">
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">
            Get in Touch with React Learn
          </h2>
          <p className="mt-2 text-slate-600 md:text-xl">
            Create an account and explore the dashboard in minutes
          </p>
        </div>
        <Link
          to="/Signup"
          className="mt-6 w-full inline-flex items-center justify-center bg-indigo-600 py-3 px-5 rounded-xl text-white text-center font-medium hover:bg-indigo-700 md:w-xs"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default Contact;

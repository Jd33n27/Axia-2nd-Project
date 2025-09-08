import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    // <!-- Header / Nav -->
    <header className="sticky top-0 z-40 backdrop-blur border-5 border-slate-200/60 bg-indigo-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* <!-- Logo --> */}
          <Logo />

          {/* <!-- Nav --> */}
          <nav className="hidden items-center gap-8 text-sm md:flex md:text-lg">
            <a href="#features" className="hover:text-indigo-700">
              Features
            </a>
            <a href="#about" className="hover:text-indigo-700">
              About
            </a>
            <a href="#contact" className="hover:text-indigo-700">
              Contact
            </a>
          </nav>

          {/* <!-- Actions --> */}
          <div className="hidden items-center gap-3 md:flex">
            {/* <!-- Login Button --> */}
            {/* <Link
              to="/Login"
              className="text-sm font-medium hover:text-indigo-600 md:text-xl"
            >
              Login
            </Link> */}

            {/* <!-- Sign up Button --> */}
            <Link
              to="/Signup"
              className="inline-flex items-center justify-center text-sm font-bold rounded-xl px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-800 md:text-xl"
            >
              Apply Now
            </Link>
          </div>

          {/* <!-- Mobile menu button --> */}
          <button
            id="mobileMenuBtn"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-xl border-slate-200 hover:bg-slate-50 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* <!-- Mobile Drawer --> */}
      <div
        id="mobileMenu"
        className={`${
          open ? "" : "hidden"
        } md:hidden border-t rounded-xl border-slate-200 bg-white fixed flex-col items-center self-center mx-auto top-14 left-6 right-4 space-y-4`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
          <a href="#features" className="py-2">
            Features
          </a>
          <a href="#about" className="py-2">
            About
          </a>
          <a href="#contact" className="py-2">
            Contact
          </a>
          <div className="flex items-center gap-3 pt-2">
            <Link to="/login" className="py-2">
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 bg-indigo-600 text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

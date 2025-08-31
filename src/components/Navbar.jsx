import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-5 border-slate-200/60 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
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

          {/* Logo */}
          <Logo />
        </div>

        {/* <!-- Mobile Drawer --> */}
        <div
          id="mobileMenu"
          className={`${
            open ? "" : "hidden"
          } md:hidden border-t rounded-xl border-slate-200 bg-white fixed flex-col items-center self-center mx-auto top-14 left-6 right-4 space-y-4`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            <Link to="#features" className="py-2">
              DashBoard
            </Link>
            <Link to="#about" className="py-2">
              Classes
            </Link>
            <Link to="#contact" className="py-2">
              Assignments
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

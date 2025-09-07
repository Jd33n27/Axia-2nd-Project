import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LiaBookSolid,
  LiaClipboardListSolid,
  LiaPencilRulerSolid,
} from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "./Logo";
import ProfileWidget from "./ProfileWidget";

const Navbar = ({ user }) => {
  const [open, setOpen] = useState(false);

  // Profile Dropdown Component
  const ProfileDropdown = ({ user, isOpen, setIsOpen }) => (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
      >
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <LiaUserSolid className="text-white" />
        </div>
        <span className="font-medium">{user?.name || "User"}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-10">
          <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
            <LiaUserSolid className="inline mr-2" />
            Profile
          </a>
          <hr />
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
            Logout
          </button>
        </div>
      )}
    </div>
  );

  // Navbar Component
  const NavbarDrpDown = ({ user }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
      <nav className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">My Classes</h1>
        </div>
        <ProfileDropdown
          user={user}
          isOpen={dropdownOpen}
          setIsOpen={setDropdownOpen}
        />
      </nav>
    );
  };

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

          <div className="flex items-center justify-around w-full">
            {/* Logo */}
            <Logo className={"md:hidden"} />
            <ProfileWidget user={user} className={"fixed top-0 left-[70%]"} />
          </div>

          {/* profile Icon */}
        </div>

        {/* <!-- Mobile Drawer --> */}
        <div
          id="mobileMenu"
          className={`${
            open ? "" : "hidden"
          } border-t rounded-xl border-slate-200 h-dvh shadow-sm bg-white fixed flex-col items-center self-center mx-auto top-0 left-0 right-[40%] space-y-4`}
        >
          {/* Logo */}
          <Logo className="inline-flex m-6" />
          <button
            className="inline-flex items-center justify-center h-10 w-10 rounded-xl border-slate-200 fixed top-[30%] left-[50%] hover:bg-red-400/70"
            onClick={() => setOpen(!open)}
          >
            <IoCloseOutline className="inline-flex size-7" />
          </button>

          {/*Mobile Menu*/}
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col space-y-4 text-sm">
            <Link to="/Dashboard" className="py-2">
              <LiaBookSolid className="inline-flex size-7 mx-2 items-center" />
              DashBoard
            </Link>
            <Link to="/ClassPage" className="py-2">
              <LiaPencilRulerSolid className="inline-flex size-7 mx-2 items-center" />
              Classes
            </Link>
            <Link to="/assignment" className="py-2">
              <LiaClipboardListSolid className="inline-flex size-7 mx-2 items-center" />{" "}
              assignment
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

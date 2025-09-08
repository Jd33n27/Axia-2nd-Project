import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import studentImg from "../assets/images/student.png";
import { IoChevronDown } from "react-icons/io5";

const ProfileWidget = ({ user, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className={`fixed top-5 inline-flex w-full justify-end`}>
        <h1>No user data found</h1>
        <p>Please log in first.</p>
      </div>
    );
  }

  return (
    <div className={`relative inline-block text-left ${className || ""}`}>
      {/* Profile button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center space-x-1 rounded-xl py-2 px-4"
      >
        <div className="bg-indigo-500 border-2 border-slate-600 shadow-sm p-2 rounded-full">
          <img
            src={studentImg}
            alt="Profile icon"
            loading="lazy"
            className="size-4 md:size-8"
          />
        </div>
        <article className="inline-flex items-center text-xs justify-center">
          <p>{user.full_name}</p>
          <IoChevronDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </article>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
          <Link to="/Profile" className="block px-4 py-2 hover:bg-gray-100">
            Profile
          </Link>
          <hr />
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileWidget;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import {
  LiaBookSolid,
  LiaClipboardListSolid,
  LiaPencilRulerSolid,
} from "react-icons/lia";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="hidden float-left w-[20%] h-dvh p-4 flex-col space-y-4 text-sm md:flex bg-white shadow-sm">
      <Logo />

      <div className="border border-gray-200"></div>

      <div className="flex flex-col px-3">
        <h2 className="text-md text-gray-400 px-3 mb-3">GENERAL</h2>
        <Link
          to="/dashboard"
          className={`py-3 md:text-lg rounded-lg px-3 transition-colors ${
            isActive("/dashboard")
              ? "bg-blue-50 text-indigo-600 border-4 border-indigo-600"
              : "hover:bg-gray-50"
          }`}
        >
          <LiaBookSolid className="inline-flex size-6 mx-2 items-center" />
          Dashboard
        </Link>
        <Link
          to="/ClassPage"
          className={`py-3 md:text-lg rounded-lg px-3 transition-colors ${
            isActive("/ClassPage")
              ? "bg-blue-50 text-indigo-600 border-4 border-indigo-600"
              : "hover:bg-gray-50"
          }`}
        >
          <LiaPencilRulerSolid className="inline-flex size-6 mx-2 items-center" />
          My Classes
        </Link>
        <Link
          to="/courses"
          className={`py-3 md:text-lg rounded-lg px-3 transition-colors ${
            isActive("/courses")
              ? "bg-blue-50 text-indigo-600 border-4 border-indigo-600"
              : "hover:bg-gray-50"
          }`}
        >
          <LiaBookSolid className="inline-flex size-6 mx-2 items-center" />
          All Courses
        </Link>
        <Link
          to="/assignment"
          className={`py-3 md:text-lg rounded-lg px-3 transition-colors ${
            isActive("/assignment")
              ? "bg-blue-50 text-indigo-600 border-4 border-indigo-600"
              : "hover:bg-gray-50"
          }`}
        >
          <LiaClipboardListSolid className="inline-flex size-6 mx-2 items-center" />
          assignment
        </Link>
      </div>

      <div className="flex flex-col px-3">
        <h2 className="text-md text-gray-400 px-3 mb-3">RESOURCES</h2>
        <Link
          to="/resources"
          className={`py-3 md:text-lg rounded-lg px-3 transition-colors ${
            isActive("/resources")
              ? "bg-blue-50 text-indigo-600 border-4 border-indigo-600"
              : "hover:bg-gray-50"
          }`}
        >
          <LiaBookSolid className="inline-flex size-6 mx-2 items-center" />
          Library
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;

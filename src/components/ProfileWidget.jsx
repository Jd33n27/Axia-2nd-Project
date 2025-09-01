import React from "react";
import { Link } from "react-router-dom";
import studentImg from "../assets/images/student.png";

const ProfileWidget = ({ user, className }) => {
  if (!user) {
    return (
      <div className={`fixed left-[90%]`}>
        <h1>No user data found</h1>
        <p>Please log in first.</p>
      </div>
    );
  }

  return (
    <Link to="/ProfilePage">
      <div
        className={`flex items-center justify-center space-x-3 rounded-xl py-2 px-4 ${className}`}
      >
        {/* Profile image / Icon */}
        <div className="bg-indigo-500 border-2 border-slate-600 shadow-sm p-2 rounded-full">
          <img
            src={studentImg}
            alt="Profile icon"
            loading="lazy"
            className="size-8"
          />
        </div>

        <article>
          <p>{user.full_name}</p>
        </article>
      </div>
    </Link>
  );
};

export default ProfileWidget;

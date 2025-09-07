import React from "react";
import {  useNavigate } from "react-router-dom";
import studentImg from "../assets/images/student.png";

const ProfilePage = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {/* Profile Card */}
      <div className="w-full max-w-4xl shadow-lg rounded-2xl border border-gray-200">
        <article className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-6">
            {/* Avatar */}
            <div className="bg-indigo-300 border-3 border-indigo-600 shadow-sm p-2 rounded-full">
              <img
                src={studentImg}
                alt="Profile icon"
                loading="lazy"
                className="size-15"
              />
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-900">
                {user.full_name}
              </h2>
              <p className="text-gray-600">{user.email}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                variant="default"
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4"
              >
                Edit Profile
              </button>
              <button
                onClick={() => navigate("/")}
                className="rounded-xl px-4 bg-yellow-300/70 hover:bg-yellow-400"
              >
                Logout
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProfilePage;

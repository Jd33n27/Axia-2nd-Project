import React from "react";
import {
  LiaPlaySolid,
  LiaClockSolid,
  LiaUsersSolid,
  LiaStarSolid,
} from "react-icons/lia";

const CourseCard = ({ course }) => {
  if (!course) return null;
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-purple-500 to-indigo-600">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">
            {course?.title || "Course Title"}
          </h3>
          <p className="text-sm opacity-90">
            {course?.instructor || "Instructor"}
          </p>
        </div>
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              course?.level === "Beginner"
                ? "bg-green-100 text-green-800"
                : course?.level === "Intermediate"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {course?.level || "Beginner"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course?.description || "Course description"}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <LiaClockSolid className="text-lg" />
            {course?.duration || "8 weeks"}
          </div>
          <div className="flex items-center gap-1">
            <LiaUsersSolid className="text-lg" />
            {course?.enrolled || 0} students
          </div>
          <div className="flex items-center gap-1">
            <LiaStarSolid className="text-lg text-yellow-500" />
            {course?.rating || 4.5}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm font-semibold">
              {course?.progress || 0}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"
              style={{ width: `${course?.progress || 0}%` }}
            ></div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
            <LiaPlaySolid />
            {(course?.progress || 0) > 0 ? "Continue" : "Start Course"}
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

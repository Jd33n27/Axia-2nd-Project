import React from "react";
import {
  LiaClipboardListSolid,
  LiaCheckCircleSolid,
  LiaClockSolid,
  LiaExclamationTriangleSolid,
  LiaUploadSolid,
  LiaEyeSolid,
  LiaDownloadSolid,
} from "react-icons/lia";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// Utility functions
const getStatusColor = (status) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "submitted":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "completed":
      return "bg-green-100 text-green-800 border-green-200";
    case "overdue":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "pending":
      return <LiaClockSolid className="w-4 h-4" />;
    case "submitted":
      return <LiaUploadSolid className="w-4 h-4" />;
    case "completed":
      return <LiaCheckCircleSolid className="w-4 h-4" />;
    case "overdue":
      return <LiaExclamationTriangleSolid className="w-4 h-4" />;
    default:
      return <LiaClipboardListSolid className="w-4 h-4" />;
  }
};

// assignments Card
const AssignmentsCard = ({ assignments }) => {
  const isOverdue =
    new Date(assignments.dueDate) < new Date() &&
    assignments.status === "pending";

  return (
    <div className="bg-white w-90 rounded-lg shadow hover:shadow-lg transition-shadow p-6 border-x-4 border-slate-500/70 md:w-5xl">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {assignments.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{assignments.course}</p>
          <p className="text-gray-700 text-sm">
            Due:{" "}
            <span
              className={`font-medium ${
                isOverdue ? "text-red-600" : "text-gray-800"
              }`}
            >
              {new Date(assignments.dueDate).toLocaleDateString()}
            </span>
          </p>
        </div>

        {/* Status Badge */}
        <div
          className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full border ${getStatusColor(
            isOverdue ? "overdue" : assignments.status
          )}`}
        >
          {getStatusIcon(isOverdue ? "overdue" : assignments.status)}
          <span className="capitalize">
            {isOverdue ? "Overdue" : assignments.status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{assignments.description}</p>

      {/* Actions */}
      <div className="inline-flex justify-end">
        <button className="flex items-center gap-1 text-sm text-white bg-blue-600/70 px-4 py-2 rounded-xl hover:text-blue-800">
          View
        </button>
      </div>
    </div>
  );
};

// assignments Page
const AssignmentPage = ({ user, assignments = [] }) => {
  return (
    <section>
      <Sidebar />
      <div className="md:float-right md:w-[80%]">
        <Navbar user={user} />
        <div className="mx-10">
          <h2 className="md:text-2xl font-bold">My Assignments</h2>
          <p className="md:text-xl">View your assignments details here</p>
        </div>
        <div className="grid grid-cols-1 place-items-center gap-6 mt-10 md:h-200 md:w-6xl md:mx-10 md:overflow-y-scroll">
          {assignments.map((a) => (
            <AssignmentsCard key={a.id} assignments={a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssignmentPage;

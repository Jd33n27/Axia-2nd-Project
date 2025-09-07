import React, { useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Progressbar from "../components/Progressbar";
import Sidebar from "../components/Sidebar";
import Calendar from "../components/Calendar";

const DashboardPage = ({ user, assignments = [] }) => {
  if (!user) {
    return (
      <>
        <Navbar />
        <Card>
          <h1>No user data found</h1>
          <p>Please log in first.</p>
        </Card>
      </>
    );
  }

  // Calculate assignment progress from the actual data
  const completedAssignments = assignments.filter(
    (a) => a.status === "completed"
  ).length;
  const totalAssignments = assignments.length;

  // Mock progress data - replace with actual user data
  const progressData = {
    enrolledCourses: { completed: 6, total: 10 },
    overallGrade: { completed: 550, total: 800 },
    completedassignment: {
      completed: completedAssignments,
      total: totalAssignments,
    },
  };

  return (
    <div className="flex w-full h-full">
      <Sidebar />

      <section className="w-full float-right md:w-[80%]">
        <Navbar user={user} />
        <div className="container mx-auto p-4">
          {/* Welcome Message */}
          <h2 className="text-2xl font-bold my-4 md:text-3xl lg:text-4xl">
            <span className="text-slate-400">Welcome back,</span>{" "}
            {user.full_name}!👋
          </h2>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Progress Card - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <Card>
                <h3 className="text-xl font-semibold mb-4">
                  Learning Progress
                </h3>
                <div className="space-y-4">
                  <Progressbar
                    progressTitle="Classes Attended"
                    progressDigit={progressData.enrolledCourses.completed}
                    overall={progressData.enrolledCourses.total}
                  />
                  <Progressbar
                    progressTitle="Overall Grade"
                    progressDigit={progressData.overallGrade.completed}
                    overall={progressData.overallGrade.total}
                  />
                  <Progressbar
                    progressTitle="Completed Assignment"
                    progressDigit={progressData.completedassignment.completed}
                    overall={progressData.completedassignment.total}
                  />
                </div>
              </Card>
            </div>

            {/* Calendar Card - Takes 1 column */}
            <div className="lg:col-span-1">
              <Card>
                <Calendar />
              </Card>
            </div>

            {/* Recent Tasks Card - Full width */}
            <div className="lg:col-span-3">
              <Card>
                <h3 className="text-xl font-semibold mb-4">Recent Tasks</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {assignments.slice(0, 3).map((assignment) => (
                    <div
                      key={assignment.id}
                      className="p-3 bg-gray-50 rounded-lg"
                    >
                      <h4 className="font-medium">{assignment.title}</h4>
                      <p className="text-sm text-gray-600">
                        Due: {new Date(assignment.dueDate).toLocaleDateString()}
                      </p>
                      <span
                        className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                          assignment.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : assignment.status === "pending"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {assignment.status.charAt(0).toUpperCase() +
                          assignment.status.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;

import React from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <section
      id="features"
      className="bg-BrightYellow py-16 md:py-24 container px-2 mx-auto rounded-2xl mt-10 shadow-sm border border-slate-200"
    >
      {/* <!-- Container --> */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* <!-- info-text --> */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">
            Everything you need to stay on track
          </h2>
          <p className="text-slate-600 mt-3">
            Clean, predictable components that scale with you.
          </p>
        </div>

        {/* <!-- Features-card --> */}
        <div className="grid sm:grid-cols-2 gap-6 lg:place-items-center lg:grid-cols-2 lg:gap-y-10">
          <FeaturesCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 5h12M9 3v2m-6 4h18M3 9v12h18V9"
                />
              </svg>
            }
            iconBg="bg-indigo-50"
            iconColor="text-indigo-600"
            title="Course Planner"
            description="Organize modules, track prerequisites, and map your learning path."
          />
          <FeaturesCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 8v8m4-4H8m12 0A8 8 0 114 12a8 8 0 0116 0z"
                />
              </svg>
            }
            iconBg="bg-teal-50"
            iconColor="text-teal-600"
            title="Assignments"
            description="Create, submit, and grade with clear status indicators."
          />
          <FeaturesCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            }
            iconBg="bg-purple-50"
            iconColor="text-purple-600"
            title="Progress"
            description="Visualize completion with streaks and milestone badges."
          />

          <FeaturesCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            }
            iconBg="bg-blue-50"
            title="Integrations"
            description="Connect calendars, storage, and
            LMS tools you already use."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

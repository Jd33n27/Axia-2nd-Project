import React from "react";

const Progressbar = ({
  progressDigit = 0,
  progressTitle = "",
  overall = 8,
}) => {
  // Calculate percentage: (completed / total) * 100
  const percentage =
    overall > 0 ? Math.round((progressDigit / overall) * 100) : 0;

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium">{progressTitle}</h3>
        <p className="text-sm font-semibold">
          {progressDigit}/{overall}
        </p>
      </div>
      <div className="progress-bar w-full h-3 bg-neutral-200 rounded-md overflow-hidden">
        <div
          className="progress-bar-fill h-full bg-indigo-500 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;

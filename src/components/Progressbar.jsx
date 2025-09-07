import React, { useState, useEffect } from "react";

const Progressbar = ({
  progressDigit = 0,
  progressTitle = "",
  overall = 8,
}) => {
  // Calculating percentage: (completed / total) * 100
  const percentage =
    overall > 0 ? Math.round((progressDigit / overall) * 100) : 0;

  // useState for animated width
  const [animatedWidth, setAnimatedWidth] = useState(0);

  // Animating the progress bar on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium animate-fade-in">{progressTitle}</h3>
        <p className="text-sm font-semibold animate-fade-in">
          {progressDigit}/{overall}
        </p>
      </div>
      <div className="progress-bar w-full h-3 bg-neutral-200 rounded-md overflow-hidden animate-fade-in">
        <div
          className="progress-bar-fill h-full bg-indigo-500 transition-all duration-2000 ease-out transform"
          style={{
            width: `${animatedWidth}%`,
            transformOrigin: "left center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;

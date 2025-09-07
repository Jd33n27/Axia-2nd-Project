import React from "react";

const Card = ({ children, className = "", bg = "bg-white" }) => {
  return (
    <div
      className={`border border-slate-200 ${bg} rounded-xl p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

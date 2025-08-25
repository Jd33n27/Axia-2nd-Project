import React from "react";

const Card = ({children, className = ""}) => {
  return (
    <div
      className={`border border-slate-200 bg-white rounded-xl p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

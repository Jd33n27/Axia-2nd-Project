import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 font-semibold">
      <span className="inline-flex items-center justify-center size-8 rounded-xl bg-indigo-600 text-white">
        R
      </span>
      <span className="text-slate-800">React Learn</span>
    </Link>
  );
};

export default Logo;

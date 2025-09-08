import React from "react";
import { Link } from "react-router-dom";
import Rlogo from "../assets/images/R_logo.png";

const Logo = ({ className }) => {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2 font-semibold ${className}`}
    >
      <span className="inline-flex items-center justify-center rounded-xl">
        <img src={Rlogo} alt="" className="h-30 mx-auto" />
      </span>
    </Link>
  );
};

export default Logo;

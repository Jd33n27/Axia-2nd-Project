import React from "react";
import { Link } from "react-router-dom";
import Rlogo from "../assets/images/R_logo.png";

const Logo = ({ className }) => {
  return (
    <Link to="/" className={`flex items-start ${className}`}>
      <span>
        <img src={Rlogo} alt="" className="h-30 mx-auto" />
      </span>
    </Link>
  );
};

export default Logo;

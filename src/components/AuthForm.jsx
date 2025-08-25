import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const AuthForm = ({
  children,
  formTitle,
  formWelcomeText,
  authCheckLink,
  authCheckLinkText,
  authCheckLinkPath = "/",
}) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-md mx-auto px-4 py-12">
        <Logo />

        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm mt-5">
          <h1 className="text-xl font-semibold">{formTitle}</h1>
          <p className="text-sm text-slate-600 mt-1">{formWelcomeText}</p>

          <form className="mt-6 space-y-4" id="signupForm">
            {children}
          </form>

          <p className="text-sm text-slate-600 mt-6">
            {authCheckLinkText}
            <Link
              className="text-indigo-600 hover:underline"
              to={`${authCheckLinkPath}`}
            >
              {authCheckLink}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

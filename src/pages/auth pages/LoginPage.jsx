import React from "react";
import AuthForm from "../../components/AuthForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthForm
      formTitle="Welcome Back"
      formWelcomeText="Log in to continue your learning"
      authCheckLink="Create an account"
      authCheckLinkText="New here? "
      authCheckLinkPath="/signup"
    >
      <label for="email" className="block">
        <span className="text-sm text-slate-700">Email</span>
        <input
          type="email"
          id="email"
          required
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="you@example.com"
        />
      </label>
      <label for="password" className="block">
        <span className="text-sm text-slate-700">Password</span>
        <input
          type="password"
          id="password"
          required
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Password123"
        />
      </label>
      <div className="flex items-center justify-between text-sm">
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" className="rounded border-slate-300" />
          <span>Remember me</span>
        </label>
        <Link to="#" className="text-indigo-600 hover:underline">
          Forgot password?
        </Link>
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-indigo-600 text-white py-2.5 font-medium hover:bg-indigo-700"
      >
        Login
      </button>
    </AuthForm>
  );
};

export default LoginPage;

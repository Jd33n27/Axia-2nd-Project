import React from "react";
import AuthForm from "../../components/AuthForm";

const SignupPage = () => {
  return (
    <AuthForm
      formTitle="Create Your Account"
      formWelcomeText="Start your learning journey today"
      authCheckLink="Login"
      authCheckLinkText="Already have an account? "
      authCheckLinkPath="/login"
    >
      <label className="block">
        <span className="text-sm text-slate-700">Full Name</span>
        <input
          type="text"
          required
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Jane Doe"
        />
      </label>
      <label className="block">
        <span className="text-sm text-slate-700">Email</span>
        <input
          type="email"
          required
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="you@example.com"
        />
      </label>
      <label className="block">
        <span className="text-sm text-slate-700">Password</span>
        <input
          type="password"
          required
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="••••••••"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-xl bg-indigo-600 text-white py-2.5 font-medium hover:bg-indigo-700"
      >
        Create Account
      </button>
    </AuthForm>
  );
};

export default SignupPage;

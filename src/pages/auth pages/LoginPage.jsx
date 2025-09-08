import React from "react";
import AuthForm from "../../components/AuthForm";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    onLoginSuccess(email, password, rememberMe);
  };

  return (
    <AuthForm
      formTitle="Welcome Back"
      formWelcomeText="Log in to continue your learning"
      authCheckLink="Create an account"
      authCheckLinkText="New here? "
      authCheckLinkPath="/signup"
    >
      <form onSubmit={handleLogin} className="mt-6 space-y-4" id="loginForm">
        <label htmlFor="email" className="block">
          <span className="text-sm text-slate-700">Email</span>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
          />
        </label>
        <label htmlFor="password" className="block">
          <span className="text-sm text-slate-700">Password</span>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Password123"
          />
        </label>
        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded border-slate-300"
            />
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
      </form>
    </AuthForm>
  );
};

export default LoginPage;

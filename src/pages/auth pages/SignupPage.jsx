import React, { useState } from "react";
import AuthForm from "../../components/AuthForm";

const SignupPage = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState("");
  const [full_name, setFull_name] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const url = "https://reqres.in/api/register";

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    const emailToSend = "sydney@fife";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailToSend,
          password: password,
        }),
      });
      console.log(email, password);
      console.log("Response status:", response.status);
      console.log("Response body:", result);

      const result = await response.json();

      if (response.ok) {
        const userData = {
          full_name,
          email,
          token: result.token,
        };
        console.log(result);
        onSignupSuccess(userData);
      } else {
        setMessage(`Signup failed: ${result.error}`);
      }
    } catch (error) {
      setMessage(`An error occurred. Please try again.`);
    }
  };

  return (
    <>
      <AuthForm
        formTitle="Create Your Account"
        formWelcomeText="Start your learning journey today"
        authCheckLink="Login"
        authCheckLinkText="Already have an account? "
        authCheckLinkPath="/login"
      >
        <form
          onSubmit={handleSignup}
          className="mt-6 space-y-4"
          id="signupForm"
        >
          <label htmlFor="full-name" className="block">
            <span className="text-sm text-slate-700">Full Name</span>
            <input
              type="text"
              id="full-name"
              value={full_name}
              onChange={(e) => setFull_name(e.target.value)}
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Jane Doe"
            />
          </label>
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
              placeholder="••••••••"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 text-white py-2.5 font-medium hover:bg-indigo-700"
          >
            Create Account
          </button>
        </form>
        <p>{message}</p>
      </AuthForm>
    </>
  );
};
export default SignupPage;

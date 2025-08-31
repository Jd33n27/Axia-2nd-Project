import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/auth pages/LoginPage";
import SignupPage from "./pages/auth pages/SignupPage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleAuthSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/Dashboard"
          element={<DashboardPage user={user} onLogout={handleLogout} />}
        />
        <Route
          path="/login"
          element={<LoginPage onLoginSuccess={handleAuthSuccess} />}
        />
        <Route
          path="/signup"
          element={<SignupPage onSignupSuccess={handleAuthSuccess} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

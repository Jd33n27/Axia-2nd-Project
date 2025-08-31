import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, useNavigate, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/auth pages/LoginPage";
import SignupPage from "./pages/auth pages/SignupPage";
import ClassPage from "./pages/ClassPage";
import AssignmentPage from "./pages/AssignmentPage";
import ProfilePage from "./pages/ProfilePage";

const AppContent = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const handleSignUpSuccess = (userData) => {
    // Add new user to storage
    setUsers((prev) => [...prev, userData]);
    // Navigate to login instead of dashboard
    navigate("/login");
  };

  const handleLoginSuccess = (email, password) => {
    // Find matching user from signup data
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      setCurrentUser(matchedUser);
      navigate("/dashboard");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <Routes>
      <Route index element={<HomePage />} />
      {/* Dashboard Page */}
      <Route
        path="/Dashboard"
        element={<DashboardPage user={currentUser} onLogout={handleLogout} />}
      />

      {/* Login Page */}
      <Route
        path="/login"
        element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
      />
      {/* Sign up Page */}
      <Route
        path="/signup"
        element={<SignupPage onSignupSuccess={handleSignUpSuccess} />}
      />
      {/* Class Page */}
      <Route path="/ClassPage" element={<ClassPage />} />
      {/* Assignment Page */}
      <Route path="/AssignPage" element={<AssignmentPage />} />
      {/* Profile Page */}
      <Route path="/ProfilePage" element={<ProfilePage />} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;

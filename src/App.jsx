import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, useNavigate, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/auth pages/LoginPage";
import SignupPage from "./pages/auth pages/SignupPage";
import ClassPage from "./pages/ClassPage";
import AssignmentPage from "./pages/AssignmentPage";
import ProfilePage from "./pages/ProfilePage";
import CoursesPage from "./pages/CoursesPage";
import ResourcesPage from "./pages/ResourcesPage";

const AppContent = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        const data = await response.json();

        const transformedTodos = data.todos.slice(0, 10).map((todo, index) => ({
          id: todo.id,
          title: todo.todo,
          description: todo.todo,
          course: "General Course",
          dueDate: new Date(2025, 8, 1 + index).toISOString().split("T")[0],
          status: todo.completed ? "completed" : "pending",
        }));

        setAssignments(transformedTodos);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchAssignments();
  }, []);
  // Load users from localStorage on app start
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("allUsers");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Load current user from localStorage on app start
  const [currentUser, setCurrentUser] = useState(() => {
    const savedCurrentUser = localStorage.getItem("currentUser");
    return savedCurrentUser ? JSON.parse(savedCurrentUser) : null;
  });

  const navigate = useNavigate();

  const handleSignUpSuccess = (userData) => {
    const newUsers = [...users, userData];
    setUsers(newUsers);
    localStorage.setItem("allUsers", JSON.stringify(newUsers)); // Save to localStorage
    navigate("/login");
  };

  const handleLoginSuccess = (email, password, rememberMe) => {
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      setCurrentUser(matchedUser);

      // Only save current user if remember me is checked
      if (rememberMe) {
        localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      }

      navigate("/dashboard");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser"); // Clear remembered user
    localStorage.removeItem("rememberedUser");
    navigate("/");
  };

  return (
    <Routes>
      <Route index element={<HomePage />} />

      {/* Dashboard Page */}
      <Route
        path="/Dashboard"
        element={
          <DashboardPage
            user={currentUser}
            onLogout={handleLogout}
            assignments={assignments}
            setAssignments={setAssignments}
          />
        }
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
      <Route path="/ClassPage" element={<ClassPage user={currentUser} />} />

      {/* assignments Page */}
      <Route
        path="/assignment"
        element={
          <AssignmentPage
            user={currentUser}
            assignments={assignments}
            setAssignments={setAssignments}
          />
        }
      />

      {/* Profile Page */}
      <Route path="/profile" element={<ProfilePage user={currentUser} />} />

      {/* Courses Page */}
      <Route path="/courses" element={<CoursesPage user={currentUser} />} />

      {/* Resources Page */}
      <Route path="/resources" element={<ResourcesPage user={currentUser} />} />
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

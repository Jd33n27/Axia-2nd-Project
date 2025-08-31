import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const DashboardPage = ({ user, onLogout }) => {
  // console.log("DashboardPage user:", user);

  // Safety check MUST come BEFORE trying to access user.full_name
  if (!user) {
    return (
      <>
        <Navbar />
        <Card>
          <h1>No user data found</h1>
          <p>Please log in first.</p>
        </Card>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Card>
        <h1>Welcome to your Dashboard!</h1>
        <p>
          <strong>Full Name:</strong> {user.full_name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>token:</strong> {user.token}
        </p>
        <button onClick={onLogout}>Logout</button>
      </Card>
    </>
  );
};

export default DashboardPage;

import React from "react";
import Card from "../components/Card";

const DashboardPage = ({user, onLogout}) => {
  return (
    <Card>
      <h1>Welcome to your Dashboard!</h1>
      <p>
        <strong>Full Name:</strong> {user.fullName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button onClick={onLogout}>Logout</button>
    </Card>
  );
};

export default DashboardPage;

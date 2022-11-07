import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../../context/loginContext";
import "./Dashboard.css";

function Dashboard() {
  const { isLoggedIn } = useContext(LoginContext);
  if (!isLoggedIn) return <Navigate to="/" />;
  return (
    <div className="dashboard-container">
      <div className="dashboardPage">
        <h1>Dashboard</h1>
      </div>
      <p>Welcome to the dashboard</p>
    </div>
  );
}

export default Dashboard;

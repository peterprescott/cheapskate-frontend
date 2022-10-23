import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { LoginContext } from "../../context/loginContext";
import "./Dashboard.css";

function Dashboard() {
  const { isLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);
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

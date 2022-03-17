import React, { useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import dash_avatar from "../../assets/github.png";

const Dashboard = () => {
  let navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);


  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="dashboard-container">
      Dashboard
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import dash_avatar from "../../assets/github.png";

// import facebook from "../../assets/icons_duo/facebook-circle-logo-24.png";
// import { FaFacebookSquare } from "react-icons/fa";
// import { IoMdTime } from "react-icons/io";
// import TestGround from "../../components/TestGround";

// import { useSelector } from "react-redux";
{
  /* <p>firstName: {props.userInfoFromForm.firstName}</p>
        <p>lastName: {props.userInfoFromForm.lastName}</p>
        <p>username: {props.userInfoFromForm.username}</p>
        <p>email: {props.userInfoFromForm.email}</p>
        <p>phoneNumber: {props.userInfoFromForm.phoneNumber}</p>
        <p>password: {props.userInfoFromForm.password}</p>
        <p>confirmPassword: {props.userInfoFromForm.confirmPassword}</p> */
}

const Dashboard = (props) => {
  let navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);

  // const user = useSelector((state) => state.user.value);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard__panel">
        <div className="profile-img-div">
          <img src={dash_avatar} alt="img" className="profile-img" />
        </div>

        <div className="user-profile-name">
          <h4>Ken Kalil</h4>
          <p> kalil@gmail.com </p>
        </div>

        <hr />
        <div className="dashboard-tabs">
          <div
            className={toggleState === 1 ? "active-tabs-blocks" : "tabs-blocks"}
            onClick={() => toggleTab(1)}
          >
            <Link to="/dashboard/profile">
              <p>Profile</p>
            </Link>
          </div>

          <div
            className={toggleState === 2 ? "active-tabs-blocks" : "tabs-blocks"}
            onClick={() => toggleTab(2)}
          >
            <Link to="/dashboard/subscriptions">
              <p>Subscriptions</p>
            </Link>
          </div>

          <div
            className={toggleState === 3 ? "active-tabs-blocks" : "tabs-blocks"}
            onClick={() => toggleTab(3)}
          >
            <Link to="/dashboard/cardsettings">
              <p>Card Settings</p>
            </Link>
          </div>
        </div>
        <hr />
        {/* <div className="button-area"> */}
        <button
          className="logout-button__dashboard"
          onClick={() => {
            navigate("/home");
          }}
        >
          Log Out
        </button>
        {/* </div> */}
      </div>

      <div className="dashboard__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

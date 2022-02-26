import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from "../../assets/logo.svg";
import duo_logo from "../../assets/duo_logo.svg";

import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  let navigate = useNavigate();

  return (
    <div className="duo_card__navbar">
      <div className="duo_card__navbar-links">
        <div className="duo_card__navbar-links_logo">
          <img src={duo_logo} alt="img" />
        </div>
        <div className="duo_card__navbar-links_container">
          <Link to="/">
            <p>Home</p>
          </Link>

          <Link to="/dashboard/profile">
            <p>Dashboard</p>
          </Link>

          {/* <p>
            <a href="#wduo_card">What is Duo Card?</a>
          </p> */}

          <p>
            <a
              onClick={() => {
                window.location.replace("/#possibility");
              }}
            >
              Possibilities
            </a>
          </p>

          <p>
            <a
              onClick={() => {
                window.location.replace("/#features");
              }}
            >
              Features
            </a>
          </p>

          <Link to="/blog">{/* <p>Our Blog</p> */}</Link>
        </div>
      </div>
      <div className="duo_card__navbar-sign">
        <Link to="/login">
          <p>Sign in</p>
        </Link>
        {/* onClick={() => {navigate("/choosecard")}} */}
        {/* <Link to="/#cardOptions"> */}
        <button
          type="button"
          // onClick={() => {
          //   navigate("/signup");
          // }}
          onClick={() => {
            window.location.replace("/#cardOptions");
          }}
        >
          BUY
        </button>
        {/* </Link> */}
      </div>

      {/* toggle menu with icons */}
      <div className="duo_card__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#204C8D"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#204C8D"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {/* toggle option */}
        {toggleMenu && (
          <div className="duo_card__navbar-menu_container scale-up-center">
            <div className="duo_card__navbar-menu_container-links">
              <Link to="/">
                <p>Home</p>
              </Link>

              <p>
                <a href="#wduo_card">What is Duo Card?</a>
              </p>

              <Link to="/login">
                <p>Sign In</p>
              </Link>

              <p>
                <a href="#features">Features</a>
              </p>

              {/* <p>
                <a href="#blog">Library</a>
              </p> */}
            </div>
            <div className="duo_card__navbar-menu_container-links-sign">
              <Link to="/login">
                <p>Sign In</p>
              </Link>
              {/* <button type="button">Sign up</button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

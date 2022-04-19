import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import duo_logo from "../../assets/duo_logo-PhotoRoom.svg";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbarLock, setNavbarLock] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarLock(true);
    } else {
      setNavbarLock(false);
    }

    // console.log(window.scrollY);
  };

  window.addEventListener("scroll", changeNavBackground);

  // let navigate = useNavigate();

  return (
    <div
      className={navbarLock ? "duo_card__navbar lock_nav" : "duo_card__navbar"}
    >
      <div className="duo_card__navbar-links">
        <div className="duo_card__navbar-links_logo">
          <img src={duo_logo} alt="img" />
        </div>
        <div className="duo_card__navbar-links_container">
          <Link to="/">
            <p
              className={
                navbarLock ? "nav_links_scroll_styles" : "navbar_link_para"
              }
            >
              Home
            </p>
          </Link>

          <Link to="/dashboard">
            <p
              className={
                navbarLock ? "nav_links_scroll_styles" : "navbar_link_para"
              }
            >
              Dashboard
            </p>
          </Link>

          <Link to="/about">
            <p
              className={
                navbarLock ? "nav_links_scroll_styles" : "navbar_link_para"
              }
            >
              About Us
            </p>
          </Link>

          <Link to="/compatibility">
            <p
              className={
                navbarLock ? "nav_links_scroll_styles" : "navbar_link_para"
              }
            >
              Device Compatibility
            </p>
          </Link>
        </div>
      </div>
      <div className="sign_in_cover">
        <div className="duo_card__navbar-sign">
          <Link to="/login">
            <p
              className={
                navbarLock ? "sign_in_links_scroll_styles" : "navbar_sign_para"
              }
            >
              Sign in
            </p>
          </Link>

          <button
            className={
              navbarLock
                ? "button_scroll_style_activated"
                : "button_scroll_style"
            }
            type="button"
            onClick={() => {
              window.location.replace("/#cardOptions");
            }}
          >
            BUY
          </button>
        </div>
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

          {toggleMenu && (
            <div className="duo_card__navbar-menu_container scale-up-center">
              <div className="duo_card__navbar-menu_container-links">
                <Link to="/">
                  <p className="navbar_link_para">Home</p>
                </Link>

                <Link to="/login">
                  <p className="navbar_link_para">Sign In</p>
                </Link>

                <Link to="/dashboard">
                  <p className="navbar_link_para">Dashboard</p>
                </Link>

                <Link to="/about">
                  <p className="navbar_link_para">About Us</p>
                </Link>

                <Link to="/compatibility">
                  <p className="navbar_link_para">Device Compatibility</p>
                </Link>

                {/* <p>
                <a
                  onClick={() => {
                    window.location.replace("/#features");
                  }}
                >
                  Features
                </a>
              </p> */}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* toggle menu with icons */}
    </div>
  );
};

export default Navbar;

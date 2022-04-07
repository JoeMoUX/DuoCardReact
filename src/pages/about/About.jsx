import React from "react";
import ServiceImg from "../../assets/ServiceImg.svg";
import "./about.css";

const About = () => {
  return (
    <div className="about_wrapper">
      <div className="about_first_section">
        <div className="about_left_side">
          <div className="about_title_div">
            <h1>About Us</h1>
          </div>

          <div className="about_first_section_para_div">
            <p className="p1">
              Duocard is an innovative smart business card that lets you share
              contact information with anyone, at any time using NFC Technology.
            </p>
          </div>
        </div>
        <div className="about_right_side">
          <div className="about_first_section_img_div">
            <img
              src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60ca2dd8d6d21b6d78abf316_Group%201315.svg"
              alt="img"
            />
          </div>
        </div>
      </div>

      <div className="about_second_section">
        <div className="about_left_side_second_section">
          <div className="about_title_div_second_section">
            <h1>Service provided?</h1>
          </div>

          <div className="about_second_section_para_div">
            <p className="p1">
              With Duocard, you can use an iPhone or Android phone to download
              your details with one tap or scan your cards QR Code to view your
              very own contact page.
            </p>

            <p className="p2">
              Duocard can be customized adding images or logos for a casual or
              professional look.
            </p>
          </div>
        </div>
        <div className="about_right_side_second_section">
          <div className="about_second_section_img_div">
            <img src={ServiceImg} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

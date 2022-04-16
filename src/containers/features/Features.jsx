import React from "react";
// import Feature from "../../components/feature/Feature";
import "./features.css";

const Features = () => {
  return (
    <div className="features-container" id="features">
      <h1 className="features-heading">Duo Card Features</h1>
      <div className="duo_card__features section__padding1">
        <div className="feature-box">
          <div className="feature-box__inner1">
            <img
              src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60d0a804903979a305b906e6_Group%20445.svg"
              alt="nfc-img"
            />
          </div>
          <div className="feature-box__inner2">
            <h3>NFC Chip</h3>
          </div>
          <div className="feature-box__inner3">
            Tap your card on a phone and share your contact details without
            contact.
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-box__inner1">
            <img
              src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60d0a7e0c31f1b8762529ce7_Group%201374.svg"
              alt="nfc-img"
            />
          </div>
          <div className="feature-box__inner2">
            <h3>QR code</h3>
          </div>
          <div className="feature-box__inner3">
            Open your camera and scan the QR code for older phones.
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-box__inner1">
            <img
              src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60d0a7e0ea304074145e5210_Group%201375.svg"
              alt="nfc-img"
            />
          </div>
          <div className="feature-box__inner2">
            <h3>Quick Share</h3>
          </div>
          <div className="feature-box__inner3">
            For both sharing and receiving your contact details, no app is
            needed.
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-box__inner1">
            <img
              src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60d0a804a6524302efc3cffd_Group%20448.svg"
              alt="nfc-img"
            />
          </div>
          <div className="feature-box__inner2">
            <h3>Device Support</h3>
          </div>
          <div className="feature-box__inner3">
            Works on all smartphones running both Android or iOS.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

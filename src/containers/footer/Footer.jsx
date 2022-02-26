import React from 'react';
// import duo_cardLogo from '../../assets/logo.svg';
// import duo_logo from "../../assets/duo_svg.svg";
import './footer.css';

const Footer = () => (
  <div className="duo_card__footer section__padding">
    {/* <div className="duo_card__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div> */}

    {/* <div className="duo_card__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="duo_card__footer-links">
      {/* <div className="duo_card__footer-links_logo">
        <img src={duo_logo} alt="duo_logo" />
        <p>Accra, Ghana, <br /> All Rights Reserved</p>
      </div> */}
      <div className="duo_card__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="duo_card__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="duo_card__footer-links_div">
        <h4>Get in touch</h4>
        <p>Accra, Ghana</p>
        <p>0234-555-677</p>
        <p>duocard@payme.net</p>
      </div>
    </div>

    <div className="duo_card__footer-copyright">
      <p>@2022 Duo Card. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
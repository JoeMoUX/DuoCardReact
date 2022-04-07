import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="duo_card__footer section__padding">
    <div className="duo_card__footer-links">
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

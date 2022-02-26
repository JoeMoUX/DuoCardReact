import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="duo_card__header section__padding" id="home">
      <div className="duo_card__header-content">
        <h1 className="blue__text">Duocard is the future of business cards.</h1>

        <p>
          Stop wasting your time carrying around bulky business cards and get
          Duocard.
          <br></br>
          <br></br>
          With just a tap, Duocard automatically sends your contact information
          to your recipient.
        </p>

        <div className="header_card_image">
          <img
            src="https://conotoxia.com/images/cards/how-it-works-jumbotron.svg"
            alt="card_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

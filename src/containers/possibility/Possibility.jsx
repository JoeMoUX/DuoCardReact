import React from "react";
import possibilityImage from "../../assets/Possibilities.svg";
import "./possibility.css";

const Possibility = () => (
  <div className="duo_card__possibility section__padding" id="possibility">
    <div className="duo_card__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="duo_card__possibility-content">
      {/* <h4>Request Early Access to Get Started</h4> */}
      <h1 className="first_h2">
        The possibilities are endless.
      </h1>
      <h1 className="second_h2">
      Connect with Duo.
      </h1>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis assumenda mollitia iste, rem aliquam quisquam eum ad nostrum eveniet quas aut velit ipsum distinctio dolore.
      </p>
      {/* <h4>Request Early Access to Get Started</h4> */}
    </div>
  </div>
);

export default Possibility;

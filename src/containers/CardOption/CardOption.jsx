import React, { useState } from "react";

import "./CardOption.css";
import { SignUp } from "../../pages";

const CardOption = () => {
  const [radio1, setRadio1] = useState("");
  const [radio2, setRadio2] = useState("");
  const [radio3, setRadio3] = useState("");
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div className="card_option_containerX" id="cardOptions">
      <div className="card-section__headingX">
        <h3>Card Option</h3>
        <h4>(Click on a Card to Select)</h4>
      </div>

      <div className="duo_card__card-sectionX " id="features">
        {/* --------------------------------------------- */}
        <input
          type="radio"
          name="classic"
          checked={radio1 === "classic"}
          value="classic"
          onChange={(e) => {
            setRadio1(e.target.value);
          }}
          hidden
        />

        <div
          className={radio1 ? "card-box-activeX" : "card-boxX"}
          onClick={() => {
            setToggle1(!toggle1);

            if (!toggle1) {
              setRadio1("classic");
            } else {
              setRadio1("");
            }

            if (radio3 || radio2 || radio1) {
              setToggleForm(true);
            } else {
              setToggleForm(false);
            }
          }}
        >
          <div className="card-box__inner1">Plastic</div>
          <div className="price_tag"></div>
        </div>

        {/* ---------------------------------------------- */}

        {/* --------------------------------------------- */}
        <input
          type="radio"
          name="wood"
          checked={radio2 === "wood"}
          value="wood"
          onChange={(e) => {
            setRadio2(e.target.value);
          }}
          hidden
        />

        <div
          className={radio2 ? "card-box-activeX" : "card-boxX"}
          onClick={() => {
            setToggle2(!toggle2);

            if (!toggle2) {
              setRadio2("wood");
            } else {
              setRadio2("");
            }

            if (radio3 || radio2 || radio1) {
              setToggleForm(true);
            } else {
              setToggleForm(false);
            }
          }}
        >
          <div className="card-box__inner1">Wood</div>
          <div className="price_tag"></div>
        </div>
        {/* --------------------------------------------- */}

        {/* --------------------------------------------- */}
        <input
          type="radio"
          name="metal"
          checked={radio3 === "metal"}
          value="metal"
          onChange={(e) => {
            setRadio3(e.target.value);
          }}
          hidden
        />
        <div
          className={radio3 ? "card-box-activeX" : "card-boxX"}
          onClick={() => {
            setToggle3(!toggle3);

            if (!toggle3) {
              setRadio3("metal");
            } else {
              setRadio3("");
            }

            if (radio3 || radio2 || radio1) {
              setToggleForm(true);
            } else {
              setToggleForm(false);
            }
          }}
        >
          <div className="card-box__inner1">Metal</div>
          <div className="price_tag"></div>
        </div>
        {/* --------------------------------------------- */}
      </div>

      {toggleForm ? <SignUp /> : null}
    </div>
  );
};

export default CardOption;

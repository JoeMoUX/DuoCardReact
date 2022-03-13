import React, { useState } from "react";

import "./CardOption.css";
import { SignUp } from "../../pages";

const CardOption = () => {
  const [checked1, setChecked1] = useState("");
  const [checked2, setChecked2] = useState("");
  const [checked3, setChecked3] = useState("");
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <div className="card_option_containerX" id="cardOptions">
      <div className="card-section__headingX">
        <h3>Card Option</h3>
        <h4>(Click on a Card to Select)</h4>
      </div>

      <div className="duo_card__card-sectionX " id="features">
        {/* --------------------------------------------- */}
        <input
          type="checkbox"
          name="classic"
          checked={checked1 === "classic"}
          value="classic"
          onChange={(e) => {
            setChecked1(e.target.value);
          }}
          hidden
        />

        <div
          className={checked1 ? "card-box-activeX" : "card-boxX"}
          onClick={() => {
            setToggle1(!toggle1);

            if (!toggle1) {
              setChecked1("classic");
            } else {
              setChecked1("");
            }
          }}
        >
          <div className="card-box__inner1">Plastic</div>
          <div className="price_tag"></div>
        </div>

        {/* ---------------------------------------------- */}

        {/* --------------------------------------------- */}
        <input
          type="checkbox"
          name="wood"
          checked={checked2 === "wood"}
          value="wood"
          onChange={(e) => {
            setChecked2(e.target.value);
          }}
          hidden
        />

        <div
          className={checked2 ? "card-box-activeX" : "card-boxX"}
          onClick={() => {
            setToggle2(!toggle2);

            if (!toggle2) {
              setChecked2("wood");
            } else {
              setChecked2("");
            }
          }}
        >
          <div className="card-box__inner1">Wood</div>
          <div className="price_tag"></div>
        </div>
        {/* --------------------------------------------- */}

        {/* --------------------------------------------- */}
        <input
          type="checkbox"
          name="metal"
          checked={checked3 === "metal"}
          value="metal"
          onChange={(e) => {
            setChecked3(e.target.value);
          }}
          hidden
        />
        <div
          className={checked3 ? "card-box-activeX" : "card-boxX"}
          onClick={() => {
            setToggle3(!toggle3);

            if (!toggle3) {
              setChecked3("metal");
            } else {
              setChecked3("");
            }
          }}
        >
          <div className="card-box__inner1">Metal</div>
          <div className="price_tag"></div>
        </div>
        {/* --------------------------------------------- */}
      </div>

      {checked1 || checked2 || checked3 ? <SignUp /> : null}
    </div>
  );
};

export default CardOption;

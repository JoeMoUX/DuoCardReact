import React, { useState } from "react";
// import Article from "../../components/article/Article";
// import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./CardOption2.css";
import { SignUp } from "../../pages";
import { useDispatch } from "react-redux";
import { signup } from "../../components/featuresR/user";


const CardOption = ({ formDataSet, setFormDataSet }) => {
  const [radio1, setRadio1] = useState("");
  const [radio2, setRadio2] = useState("");
  const [radio3, setRadio3] = useState("");
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);
  const [formData, setFormData] = useState("");
  const dispatch = useDispatch();

  // const triggerFxn = () => {
  //   setToggle1(!toggle1);
  //   console.log(radio1);
  //   console.log(toggle1);

  // if (!toggle1) {
  // setRadio1("classic");
  // console.log(radio1);
  // console.log(toggle1);
  // console.log(e.target.value);
  // } else {
  //   setRadio1("");
  // console.log(radio1);
  // console.log(toggle1);
  // }
  // console.log(radio2);
  // };
  return (
    <div className="card_option_container">
      <div className="card-section__heading">
        <h3>Card Option</h3>
        <h4>(Click on a Card to Select)</h4>
      </div>

      {/* <form> */}
      {/* <h1>The Selected Card is --- {radio}</h1> */}

      <div className="duo_card__card-section " id="features">
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
          className={radio1 ? "card-box-active" : "card-box"}
          onClick={() => {
            setToggle1(!toggle1);
            // console.log(radio1);
            console.log(toggle1);

            if (!toggle1) {
              setRadio1("classic");
              console.log(radio1);
              console.log(toggle1);
            } else {
              setRadio1("");
              console.log(radio1);
              console.log(toggle1);
            }

            if (radio3 || radio2 || radio1) {
              setToggleForm(true);
            } else {
              setToggleForm(false);
            }
          }}
        >
          <div className="card-box__inner1">Plastic</div>
          <div className="price_tag">
            {/* <div className="card-box__inner2"> */}
            {/* <div className="price-div">50.00</div> */}
            {/* <label htmlFor="classic" className="price-div">
                Plastic
              </label> */}
            {/* </div> */}

            {/* <div className="card-box__inner3">
              <div className="buy-button-card">
                <button
                  className="btn__add-to-cart"
                  onClick={() => {
                    setToggleForm(true);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="card-box__inner2"> */}
        {/* <div className="price-div">50.00</div> */}
        {/* <label htmlFor="classic" className="price-div">
            Plastic
          </label>
        </div> */}
        {/* </label> */}

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
          className={radio2 ? "card-box-active" : "card-box"}
          onClick={() => {
            setToggle2(!toggle2);
            console.log(radio2);
            if (!toggle2) {
              setRadio2("wood");
              console.log(radio2);
              console.log(toggle2);
            } else {
              setRadio2("");
              console.log(radio2);
              console.log(toggle2);
            }

            if (radio3 || radio2 || radio1) {
              setToggleForm(true);
            } else {
              setToggleForm(false);
            }
            // console.log(radio2);
          }}
        >
          <div className="card-box__inner1">Wood</div>
          <div className="price_tag">
            {/* <div className="card-box__inner2"> */}
            {/* <div className="price-div">50.00</div> */}
            {/* </div> */}
            {/* <div className="card-box__inner3">
              <div className="buy-button-card">
                <button
                  className="btn__add-to-cart"
                  onClick={() => {
                    setToggleForm(true);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div> */}
          </div>
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
          className={radio3 ? "card-box-active" : "card-box"}
          onClick={() => {
            setToggle3(!toggle3);
            // console.log(radio3);
            console.log(toggle3);

            if (!toggle3) {
              setRadio3("metal");
              console.log(radio3);
              console.log(toggle3);
            } else {
              setRadio3("");
              console.log(radio3);
              console.log(toggle3);
            }

            if (radio3 || radio2 || radio1) {
              setToggleForm(true);
            } else {
              setToggleForm(false);
            }
            // console.log(radio3);
          }}
        >
          <div className="card-box__inner1">Metal</div>
          <div className="price_tag">
            {/* <div className="card-box__inner2"> */}
            {/* <div className="price-div">50.00</div> */}
            {/* </div> */}
            {/* <div className="card-box__inner3">
              <div className="buy-button-card">
                <button
                  className="btn__add-to-cart"
                  onClick={() => {
                    setToggleForm(true);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div> */}
          </div>
        </div>
        {/* --------------------------------------------- */}
      </div>

      {/* </form> */}
    </div>
  );
};

export default CardOption;

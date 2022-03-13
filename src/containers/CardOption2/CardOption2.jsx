import React, { useState } from "react";
import "./CardOption2.css";
import { useDispatch } from "react-redux";
import { multiStepFormData } from "../../components/featuresR/multiStepFormData";

const CardOption2 = ({ formDataSet, setFormDataSet }) => {
  const [radio1, setRadio1] = useState("");
  const [radio2, setRadio2] = useState("");
  const [radio3, setRadio3] = useState("");
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="card_option_container">
      <div className="card-section__heading">
        <h3>Card Option</h3>
        <h4>(Click on a Card to Select)</h4>
      </div>

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

            console.log(toggle1);

            if (!toggle1) {
              setRadio1("classic");
              setFormDataSet({
                ...formDataSet,
                classic: "classic",
              });
              console.log(formDataSet);
              dispatch(
                multiStepFormData({
                  ...formDataSet,
                  classic: "classic",
                })
              );
              console.log(radio1);
              console.log(toggle1);
            } else {
              setRadio1("");
              setFormDataSet({
                ...formDataSet,
                classic: "",
              });
              console.log(formDataSet);
              dispatch(
                multiStepFormData({
                  ...formDataSet,
                  classic: "",
                })
              );
              console.log(radio1);
              console.log(toggle1);
            }
          }}
        >
          <div className="card-box__inner1">Plastic</div>
          <div className="price_tag"></div>
        </div>

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
              setFormDataSet({
                ...formDataSet,
                wood: "wood",
              });
              console.log(formDataSet);
              dispatch(
                multiStepFormData({
                  ...formDataSet,
                  wood: "wood",
                })
              );

              console.log(radio2);
              console.log(toggle2);
            } else {
              setRadio2("");
              setFormDataSet({
                ...formDataSet,
                wood: "",
              });
              console.log(formDataSet);
              dispatch(
                multiStepFormData({
                  ...formDataSet,
                  wood: "",
                })
              );
              console.log(radio2);
              console.log(toggle2);
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
          className={radio3 ? "card-box-active" : "card-box"}
          onClick={() => {
            setToggle3(!toggle3);
            console.log(toggle3);

            if (!toggle3) {
              setRadio3("metal");
              setFormDataSet({
                ...formDataSet,
                metal: "metal",
              });
              console.log(formDataSet);
              dispatch(
                multiStepFormData({
                  ...formDataSet,
                  metal: "metal",
                })
              );

              console.log(radio3);
              console.log(toggle3);
            } else {
              setRadio3("");
              setFormDataSet({
                ...formDataSet,
                metal: "",
              });
              console.log(formDataSet);
              dispatch(
                multiStepFormData({
                  ...formDataSet,
                  metal: "",
                })
              );

              console.log(radio3);
              console.log(toggle3);
            }
          }}
        >
          <div className="card-box__inner1">Metal</div>
          <div className="price_tag"></div>
        </div>
        {/* --------------------------------------------- */}
      </div>
    </div>
  );
};

export default CardOption2;

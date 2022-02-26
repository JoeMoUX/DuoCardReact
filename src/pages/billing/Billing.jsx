import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./billing.css";
import mtnMomo from "../../assets/mtn_momo.svg";
import visacard from "../../assets/visa_card.svg";
// import shoppingCartImg from "../../assets/shopping-cart.png";

const Billing = ({ formDataSet, setFormDataSet }) => {
  let navigate = useNavigate();
  const [radio1, setRadio1] = useState("");
  const [radio2, setRadio2] = useState("");
  return (
    <div>
      {/* <h1>This is the billing page</h1> */}
      <div className="billing_container_div">
        <div className="billing_right_div">
          <div className="billing_radio_inputs_container">
            <div className="billing_radio_input_div">
              <div className="billing_img_div">
                <img src={mtnMomo} alt="momo image" className={radio1 ? "selected_opt" : ""}/>
              </div>
              <div className="label_div_billing">
                <label htmlFor="MomoOption" className={radio1 ? "selected_opt" : ""}>Pay with Momo</label>
              </div>
              <div className="billing_radio_button_div">
                <input
                  hidden
                  id="MomoOption"
                  type="radio"
                  value="Momo"
                  name="paymentOption"
                  checked={radio1 === "Momo"}
                  className="billing_input_tag"
                  onChange={() => {
                    setRadio1("Momo");
                    setRadio2("");
                  }}
                />
              </div>
            </div>
            <div className="billing_radio_input_div">
              <div className="billing_img_div">
                <img src={visacard} alt="momo image" className={radio2 ? "selected_opt" : ""}/>
              </div>
              <div className="label_div_billing">
                <label htmlFor="BankAccountOption" className={radio2 ? "selected_opt" : ""}>Pay with Bank Account</label>
              </div>

              <div className="billing_radio_button_div">
                <input
                  hidden
                  id="BankAccountOption"
                  type="radio"
                  checked={radio2 === "BankAccount"}
                  value="BankAccount"
                  name="paymentOption"
                  className="billing_input_tag"
                  onChange={() => {
                    setRadio2("BankAccount");
                    setRadio1("");
                  }}
                />
              </div>
            </div>
          </div>
          {radio1 ? (
            <div className="billing_input_div">
              <input
                type="text"
                name="occupation"
                placeholder="type your Momo number..."
                className="billing_input_tag"
              />
            </div>
          ) : null}
          {radio2 ? (
            <div className="billing_input_div">
              <input
                type="text"
                name="occupation"
                placeholder="Bank account number here..."
                className="billing_input_tag"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Billing;

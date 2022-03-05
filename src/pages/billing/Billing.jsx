import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./billing.css";
import mtnMomo from "../../assets/mtn_momo.svg";
import visacard from "../../assets/visa_card.svg";
import { useDispatch } from "react-redux";
import { multiStepFormData } from "../../components/featuresR/multiStepFormData";
import { appendErrors, useForm } from "react-hook-form";


const Billing = ({ formDataSet, setFormDataSet }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  const dispatch = useDispatch();
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
                <img
                  src={mtnMomo}
                  alt="momo image"
                  className={radio1 ? "selected_opt" : ""}
                />
              </div>
              <div className="label_div_billing">
                <label
                  htmlFor="MomoOption"
                  className={radio1 ? "selected_opt" : ""}
                >
                  Pay with Momo
                </label>
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
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const value = e.target.value;
                    setRadio1("Momo");
                    setRadio2("");

                    // console.log(radio1);
                    console.table(checked);
                    console.log(value);
                    if (checked) {
                      setFormDataSet({
                        ...formDataSet,
                        momoOption: value,
                        bankAccountOption: "",
                      });

                      dispatch(
                        multiStepFormData({
                          ...formDataSet,
                          momoOption: value,
                          bankAccountOption: "",
                        })
                      );
                    }
                  }}
                />
              </div>
            </div>
            <div className="billing_radio_input_div">
              <div className="billing_img_div">
                <img
                  src={visacard}
                  alt="momo image"
                  className={radio2 ? "selected_opt" : ""}
                />
              </div>
              <div className="label_div_billing">
                <label
                  htmlFor="BankAccountOption"
                  className={radio2 ? "selected_opt" : ""}
                >
                  Pay with Bank Account
                </label>
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
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const value = e.target.value;
                    setRadio2("BankAccount");
                    setRadio1("");
                    // console.log(radio2);
                    console.table(checked);
                    console.log(value);
                    if (checked) {
                      setFormDataSet({
                        ...formDataSet,
                        momoOption: "",
                        bankAccountOption: value,
                      });

                      dispatch(
                        multiStepFormData({
                          ...formDataSet,
                          momoOption: "",
                          bankAccountOption: value,
                        })
                      );
                    }
                  }}
                />
              </div>
            </div>
          </div>
          {radio1 ? (
            <div className="billing_input_div">
              <input
                {...register("momoNumber", {
                  required: "The Momo Number is required.",
                  // required: true,
                  minLength: {
                    value: 5,
                    message: "A minimum of 5 characters is permitted",
                  },
                  maxLength: {
                    value: 50,
                    message: "A maximum of 50 characters is permitted",
                  },
                })}
                value={formDataSet.momoNumber}
                onChange={(e) => {
                  setFormDataSet({
                    ...formDataSet,
                    momoNumber: e.target.value,
                  });
                  
                  dispatch(
                    multiStepFormData({
                      ...formDataSet,
                      momoNumber: e.target.value,
                    })
                  );
                }}
                type="text"
                // name="momoNumber"
                placeholder="type your Momo number..."
                className="billing_input_tag"
              />
            </div>
          ) : null}
          {radio2 ? (
            <div className="billing_input_div">
              <input
                {...register("bankAccountNumber", {
                  required: "The Bank Account Number is required.",
                  // required: true,
                  minLength: {
                    value: 5,
                    message: "A minimum of 5 characters is permitted",
                  },
                  maxLength: {
                    value: 50,
                    message: "A maximum of 50 characters is permitted",
                  },
                })}
                value={formDataSet.bankAccountNumber}
                onChange={(e) => {
                  setFormDataSet({
                    ...formDataSet,
                    bankAccountNumber:  e.target.value,
                  });
                  dispatch(
                    multiStepFormData({
                      ...formDataSet,
                      bankAccountNumber:  e.target.value,
                    })
                  );
                }}
                type="text"
                // name="bankAccountNumber"
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

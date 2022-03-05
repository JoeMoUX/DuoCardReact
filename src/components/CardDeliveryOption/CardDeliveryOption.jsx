import React, { useState } from "react";
import "./CardDeliveryOption.css";
import dropOff from "../../assets/dropOff.svg";
import pickUp from "../../assets/pickUp.svg";
import { useDispatch } from "react-redux";
import { multiStepFormData } from "../featuresR/multiStepFormData";
import { appendErrors, useForm } from "react-hook-form";

function CardDeliveryOption({ formDataSet, setFormDataSet }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [label1, setLabel1] = useState(false);
  const [label2, setLabel2] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card_delivery_option_container_div">
        <div className="card_delivery_option_right_div">
          <div className="card_deivery_input_containers">
            <div className="card_delivery_option_radio_input_div">
              <div className={label1 ? "selected_img" : "dropOff_img_div"}>
                <img src={pickUp} alt="pick Up image" className="" />
              </div>
              <div
                className={label1 ? "label_div selected_color" : "label_div"}
              >
                <label
                  className={
                    label1
                      ? "active_label selected_color"
                      : "delivery_label_tag"
                  }
                  htmlFor="pickUp"
                  onClick={() => {
                    setLabel1(true);
                    setLabel2(false);
                  }}
                >
                  <p>Pick Up</p>
                </label>
              </div>

              <div className="radio_input">
                <input
                  hidden
                  type="radio"
                  id="pickUp"
                  name="pickUpOption"
                  value="pickUp"
                  placeholder="Organization Name"
                  className="card_delivery_option_input_tag"
                  onChange={(e) => {
                    const checked = e.target.checked;
                    console.table(checked);
                    const value = e.target.value;
                    if (value === "pickUp" && checked) {
                      setFormDataSet({
                        ...formDataSet,
                        pickUp: value,
                        dropOff: "",
                      });

                      dispatch(
                        multiStepFormData({
                          ...formDataSet,
                          pickUp: value,
                          dropOff: "",
                        })
                      );
                      console.log(formDataSet);
                    }
                  }}
                />
              </div>
            </div>
            <div className="card_delivery_option_radio_input_div">
              <div className={label2 ? "selected_img" : "dropOff_img_div"}>
                <img src={dropOff} alt="drop off image" />
              </div>
              <div
                className={label2 ? "label_div selected_color" : "label_div"}
              >
                <label
                  className={
                    label2
                      ? "active_label selected_color"
                      : "delivery_label_tag"
                  }
                  htmlFor="dropOff"
                  onClick={() => {
                    setLabel2(true);
                    setLabel1(false);
                  }}
                >
                  <p>Drop Off</p>
                </label>
              </div>

              <div className="radio_input">
                <input
                  hidden
                  id="dropOff"
                  type="radio"
                  name="pickUpOption"
                  placeholder="Occupation"
                  value="dropOff"
                  className="card_delivery_option_input_tag"
                  onChange={(e) => {
                    const checked = e.target.checked;
                    console.table(checked);
                    const value = e.target.value;
                    if (value === "dropOff" && checked) {
                      setFormDataSet({
                        ...formDataSet,
                        dropOff: value,
                        pickUp: "",
                      });

                      dispatch(
                        multiStepFormData({
                          ...formDataSet,
                          dropOff: value,
                          pickUp: "",
                        })
                      );
                      console.log(formDataSet);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {label2 ? (
            <div className="card_delivery_option_div">
              <div className="card_delivery_option_input_div">
                <input
                  {...register("dropOffAddress", {
                    required: "The drop off address is required.",
                    // required: true,
                    minLength: {
                      value: 5,
                      message: "A minimum of 5 characters is permitted",
                    },
                    maxLength: {
                      value: 100,
                      message: "A maximum of 100 characters is permitted",
                    },
                  })}
                  value={formDataSet.dropOffAddress}
                  onChange={(e) => {
                    setFormDataSet({
                      ...formDataSet,
                      dropOffAddress: e.target.value,
                    });
                    
                    dispatch(
                      multiStepFormData({
                        ...formDataSet,
                        dropOffAddress: e.target.value,
                      })
                    );
                  }}
                  type="textarea"
                  // name="dropOffAddress"
                  placeholder="Which address should it be delivered to?"
                  className="card_delivery_option_input_tag"
                />
              </div>
              <div className="card_delivery_option_input_div">
                <input
                  {...register("deliveryContactNumber", {
                    required: "The delivery contact number is required.",
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
                  value={formDataSet.deliveryContactNumber}
                  onChange={(e) => {
                    setFormDataSet({
                      ...formDataSet,
                      deliveryContactNumber: e.target.value,
                    });
                    dispatch(
                      multiStepFormData({
                        ...formDataSet,
                        deliveryContactNumber: e.target.value,
                      })
                    );
                  }}
                  type="text"
                  // name="deliveryContactNumber"
                  placeholder="Contact Number for delivery"
                  className="card_delivery_option_input_tag"
                />
              </div>
            </div>
          ) : (
            <div className="pick_up_response">
              <p>Pick Up Location</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardDeliveryOption;

import React, { useState } from "react";
import "./CardDeliveryOption.css";
import dropOff from "../../assets/dropOff.svg";
import pickUp from "../../assets/pickUp.svg";

function CardDeliveryOption({ formDataSet, setFormDataSet }) {
  const [radio, setRadio] = useState("");
  const [label1, setLabel1] = useState(false);
  const [label2, setLabel2] = useState(false);
  return (
    <div>
      <div className="card_delivery_option_container_div">
        {/* <div className="card_delivery_option_left_div">
          <h1>Image</h1>
        </div> */}
        <div className="card_delivery_option_right_div">
          <div className="card_deivery_input_containers">
            <div className="card_delivery_option_radio_input_div">
              {/* <div className="label_div">
                <label htmlFor="pickUp">Pick Up</label>
              </div> */}

              <div
                className={label1 ? "selected_img" : "dropOff_img_div"}
                onClick={() => {
                  setLabel1(true);
                  setLabel2(false);
                  setRadio("pickUp");
                }}
              >
                <img src={pickUp} alt="pick Up image" className="" />
              </div>
              <div className={label1 ? "label_div selected_color" : "label_div"}>
                <label
                  className={label1 ? "active_label selected_color" : "delivery_label_tag"}
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
                  checked={radio === "pickUp"}
                  placeholder="Organization Name"
                  className="card_delivery_option_input_tag"
                  onClick={() => setRadio("")}
                />
              </div>
            </div>
            <div className="card_delivery_option_radio_input_div">
              <div
                className={label2 ? "selected_img" : "dropOff_img_div"}
                onClick={() => {
                  setLabel2(true);
                  setLabel1(false);
                }}
              >
                <img src={dropOff} alt="drop off image" />
              </div>
              <div className={label2 ? "label_div selected_color" : "label_div"}>
                <label
                  className={label2 ? "active_label selected_color" : "delivery_label_tag"}
                  htmlFor="dropOff"
                  onClick={() => {
                    setLabel2(true);
                    setLabel1(false);
                    if (!radio) {
                      setRadio("dropOff");
                    } else {
                      setRadio("");
                    }
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
                  className="card_delivery_option_input_tag"
                  checked={radio === "dropOff"}
                  onChange={() => {
                    if (!radio) {
                      setRadio("dropOff");
                    } else {
                      setRadio("");
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {radio ? (
            <div className="card_delivery_option_div">
              <div className="card_delivery_option_input_div">
                <input
                  type="textarea"
                  name="dropOffAddress"
                  placeholder="Which address should it be delivered to?"
                  className="card_delivery_option_input_tag"
                />
              </div>
              <div className="card_delivery_option_input_div">
                <input
                  type="text"
                  name="deliveryContactNumber"
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

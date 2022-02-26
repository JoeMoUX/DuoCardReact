import React from "react";
import "./CustomizeCard.css";
function CustomizeCard({formDataSet, setFormDataSet}) {
  return (
    <div>

      <div className="customize_card_container_div">
        <div className="customize_card_left_div">
          <h1>Image</h1>
        </div>
        <div className="customize_card_right_div">
          <div className="customize_card_input_div">
            <input
              type="radio"
              name="duoBrandedCard"
              // placeholder="Organization Name"
              className="customize_card_input_tag"
            />
          </div>
          <div className="customize_card_input_div">
            <input
              type="radio"
              name="customizeCard"
              // placeholder="Occupation"
              className="customize_card_input_tag"
            />
          </div>
          <div className="customize_card_input_div">
            <input
              type="text"
              name="organizationAddress"
              placeholder="Organization Address"
              className="customize_card_input_tag"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CustomizeCard;

import React from "react";
import "./CardSettings.css";
const CardSettings = () => {
  return (
    <div className="display-tabs-content">
      <div className="card_settings_container">
        <div className="edit_card_title">
          <h2>Card Settings</h2>
        </div>
        <form action="" className="form_card_settings">
          <div className="card_details_inputs">
            <div className="input_first_grp">
              <div className="input_box_div">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="input_box_div">
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="input_box_div">
                <input type="text" placeholder="Email" />
              </div>
              <div className="input_box_div">
                <input type="text" placeholder="Organisation Name" />
              </div>
              <div className="input_box_div">
                <input type="text" placeholder="Occupation" />
              </div>
            </div>

            {/* ;;---------------------- */}
            <div className="input_second_grp">
              <div className="input_box_div">
                <input type="text" placeholder="Phone 1" />
              </div>
              <div className="input_box_div">
                <input type="text" placeholder="Phone 2" />
              </div>
              <div className="input_box_div">
                <input type="text" placeholder="Address" />
              </div>
              <div className="input_box_div">
                <input type="text" placeholder="Website" />
              </div>
              <div className="input_box_div">
                <input type="text" placeholder="Socials" />
              </div>
              <div className="card_settings_save_button_div">
                <button type="submit">
                      Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardSettings;

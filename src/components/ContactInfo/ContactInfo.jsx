import React from "react";
import contactImage from "../../assets/contactImage.svg";
import "./ContactInfo.css";

function ContactInfo({ formDataSet, setFormDataSet }) {
  return (
    <div className="contact_info_container_div">
      <div className="contact_info_left_div">
        <img src={contactImage} alt="contactImage" />
      </div>
      <div className="contact_info_right_div">
        <div className="contact_info_input_div">
          <input
            type="text"
            name="organizationName"
            placeholder="Organization Name"
            className="contact_info_input_tag"
          />
        </div>
        <div className="contact_info_input_div">
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            className="contact_info_input_tag"
          />
        </div>
        <div className="contact_info_input_div">
          <input
            type="text"
            name="organizationAddress"
            placeholder="Organization Address"
            className="contact_info_input_tag"
          />
        </div>
        <div className="contact_info_input_div">
          <input
            type="text"
            name="website"
            placeholder="Website Link"
            className="contact_info_input_tag"
          />
        </div>
        <div className="contact_info_input_div">
          <input
            type="text"
            name="socials"
            placeholder="Socials (facebook, ig)..."
            className="contact_info_input_tag"
          />
        </div>
        <div className="contact_info_input_div">
          <input
            type="text"
            name="businessPhoneNumber"
            placeholder="Business Call Line..."
            className="contact_info_input_tag"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

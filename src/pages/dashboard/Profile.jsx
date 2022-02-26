import React from "react";
import "./Profile.css";
import BusinessLogo from "../../assets/barclays_pic.png";
import DuoCard from "../../assets/DuoX.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="display-tabs-content">
      <div className="profile_section">
        <div className="profile_section_top_bar">
          <div className="top_bar_greeting">
            <p>Good Morning, Kofi</p>
          </div>
          <div className="top_bar_edit_contact">
            <p>Edit Contact Details</p>
          </div>
          <div className="top_bar_upload_image">
            <p>Upload Image</p>
          </div>
          <div className="top_bar_email">
            <p>kofi237@gmail.com</p>
          </div>
        </div>

        <div className="second_bar">
          <div className="company_logo">
            <img
              className="company_logo_img"
              src={BusinessLogo}
              alt="BusinessLogo"
            />
          </div>
          <div className="profile_card_image_div">
            <img className="profile_card_img" src={DuoCard} alt="DuoCard" />
          </div>

          <div className="profile_organisation_div">
            <div className="org">
              <p>Organization</p>
            </div>
            <div className="org_name">
              <p>Barclays Bank</p>
            </div>
            <div className="post">
              <p>Position</p>
            </div>
            <div className="post_name">
              <p>Credit Officer</p>
            </div>
          </div>

          <div className="date_div_outer">
            <div className="date_icon_div">
              <img className="date_icon_img" src="" alt="" />
            </div>
            <div className="date_div_inner">
              <p>3rd April, 2022</p>
            </div>
          </div>
        </div>

        <div className="recent_activity">
          <p>Recent Activity</p>
        </div>

        <div className="recent_activity_content_div">
          <div className="recent_activity_content_div_left">
            <div className="recent_activity_content_item">
              <div className="recent_activity_content_item_date">
                <p>Date</p>
              </div>

              <div className="recent_activity_content_item_card_used">
                <p>Card Used</p>
              </div>

              <div className="recent_activity_content_item_connect_status th">
                Connect Status
              </div>
            </div>

            <div className="recent_activity_content_item">
              <div className="recent_activity_content_item_date">
                <p>3rd March</p>
              </div>

              <div className="recent_activity_content_item_card_used">
                <p>Duo Card (Plastic)</p>
              </div>

              <div className="recent_activity_content_item_connect_status th">
                <div className="success"></div>
              </div>
            </div>
            <div className="recent_activity_content_item">
              <div className="recent_activity_content_item_date">
                <p>3rd March</p>
              </div>

              <div className="recent_activity_content_item_card_used">
                <p>Duo Card (Plastic)</p>
              </div>

              <div className="recent_activity_content_item_connect_status th">
                <div className="failure"></div>
              </div>
            </div>
            <div className="card_url_link_div">
              <p>Card URL Link</p>
            </div>
          </div>
          <div className="recent_activity_content_div_right">
            <div className="place_order_div">
              <Link to="/multiStepForm">
                <p>Place Order</p>
              </Link>
            </div>
            <div className="disabe_duo_card_div">
              <p>Disable DuoCard</p>
            </div>
            <div className="qr_code_div">
              <p>QR Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import "./Subscriptions.css";
import DuoCard from "../../assets/DuoX.png";

const Subscriptions = () => {
  return (
    <div className="subscriptions_container">
      <div className="subscriptions_title_head">
        <p>Subscriptions</p>
      </div>
      <div className="subscriptions_content">
        <div className="div1">
          <div className="div1_top">
            <div className="subscription_card_img_div">
              <img src={DuoCard} alt="smartcard" />
            </div>
            <div className="sub_date_container">
              <div className="subscription_start_date">
                <div className="start_date_inner_container">
                  <div className="subscription_icon"></div>
                  <div className="subscription_date"></div>
                </div>
                <div className="date_title">
                  <p>Start Date</p>
                </div>
              </div>

              <div className="subscription_end_date">
                <div className="start_date_inner_container">
                  <div className="subscription_icon"></div>
                  <div className="subscription_date"></div>
                </div>
                <div className="date_title">
                  <p>Expiry Date</p>
                </div>
              </div>
            </div>
          </div>
          <div className="div1_bottom">
            <div className="payment_method_container">
              <div className="payment_method_title">
                <p>Payment Method</p>
              </div>
              <div className="payment_method">
                <p>Momo</p>
              </div>
            </div>
            <div className="transaction_id_container">
              <div className="transaction_id_title">
                <p>Transaction ID</p>
              </div>
              <div className="transaction_id">
                <p>215-XXX-756</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="div2">
          <div className=""></div>
        </div> */}
      </div>
    </div>
  );
};

export default Subscriptions;

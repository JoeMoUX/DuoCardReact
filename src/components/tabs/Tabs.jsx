import React, { useState } from "react";
import "./Tabs.css";
// import Blog from "../../containers/blog/Blog";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tab-container section__padding">
      <div className="tab-wrap">
        <h2 className="modes-section-title">Connect with Duo</h2>
        <h4 className="modes-section-subtitle">
          (included in all cards)
        </h4>
        <div className="bloc-tabs">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <div className={toggleState === 1 ? "tab_lines" : null}>
              <h3> Business Card </h3>
            </div>
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <div className={toggleState === 2 ? "tab_lines" : null}>
              <h3> Landing Page </h3>
            </div>
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <div className={toggleState === 3 ? "tab_lines" : null}>
              <h3> Link to any URL </h3>
            </div>
          </div>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <div className="content-box">
              <div className="left-side">
                <div className="content-box__title">
                  <h3>Digital Business Card</h3>
                  <p>
                    Tap your Duo Card on a phone and your contact details appear
                    instantly.
                  </p>
                </div>

                <div className="content-box__description">
                  <ul>
                    <div className="ul_div">
                      <div className="ul_icon_div">
                        <img
                          src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60cc69d70529c60dc91d0966_Vector%20(55).svg"
                          alt="ios_img"
                        />
                      </div>
                      <div className="ul_text_div">
                        <li>No app required</li>
                      </div>
                    </div>

                    <div className="ul_div">
                      <div className="ul_icon_div">
                        <img
                          src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60cc6a184806197f8e5af039_Vector%20(56).svg"
                          alt="ios_img"
                        />
                      </div>
                      <div className="ul_text_div">
                        <li>Saves directly to your phone. No app required</li>
                      </div>
                    </div>
                  </ul>
                  <div className="bottom_message">
                    <p>This is included in all cards.</p>
                  </div>
                </div>
                <div className="content-box__points"></div>
              </div>
              <div className="right-side">
                <img
                  src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/61194afc5f69af78e8aee6a3_digital_business_card-p-500.png"
                  alt="card_and_phone_img"
                />
              </div>
            </div>
          </div>

          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <div className="content-box">
              <div className="left-side">
                <div className="content-box__title">
                  <h3>Personal Landing Page</h3>
                  <p>
                    Share links to 25+ social profile channels for streamlined
                    social connectivity.
                  </p>
                </div>
                <div className="content-box__description">
                  <ul>
                    <div className="ul_div">
                      <div className="ul_icon_div">
                        <img
                          src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60d0888d668e0882020f5354_icons8-people%203.svg"
                          alt="ios_img"
                        />
                      </div>
                      <div className="ul_text_div">
                        <li>No app required</li>
                      </div>
                    </div>

                    <div className="ul_div">
                      <div className="ul_icon_div">
                        <img
                          src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60d088cc97a175f5c462cefe_icons8-find_user_male%201%20(1).svg"
                          alt="ios_img"
                        />
                      </div>
                      <div className="ul_text_div">
                        <li>Saves directly to your phone. No app required</li>
                      </div>
                    </div>
                  </ul>
                  <div className="bottom_message">
                    <p>This is included in all cards.</p>
                  </div>
                </div>
                <div className="content-box__points"></div>
              </div>
              <div className="right-side">
                <img
                  src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60dce31db68680d851c29990_Group%201398%20(12)-min-p-500.png"
                  alt="card_and_phone_img"
                />
              </div>
            </div>
          </div>

          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <div className="content-box">
              <div className="left-side">
                <div className="content-box__title">
                  <h3>Link to any URL</h3>
                  <p>
                    Exchange contact details seamlessly, follow-up faster and
                    close more deals.
                  </p>
                </div>
                <div className="content-box__description">
                  <ul>
                    <div className="ul_div">
                      <div className="ul_icon_div">
                        <img
                          src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60d08873f0419b803fc82a1b_icons8-messages%201%20(1).svg"
                          alt="ios_img"
                        />
                      </div>
                      <div className="ul_text_div">
                        <li>No app required</li>
                      </div>
                    </div>

                    <div className="ul_div">
                      <div className="ul_icon_div">
                        <img
                          src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60d0888d668e0882020f5354_icons8-people%203.svg"
                          alt="ios_img"
                        />
                      </div>
                      <div className="ul_text_div">
                        <li>Saves directly to your phone. No app required</li>
                      </div>
                    </div>
                  </ul>
                  <div className="bottom_message">
                    <p>This is included in all cards.</p>
                  </div>
                </div>
                <div className="content-box__points"></div>
              </div>
              <div className="right-side">
                <img
                  src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60dce31cc335de0b93859f08_Group%201398%20(11)-min-p-500.png"
                  alt="card_and_phone_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

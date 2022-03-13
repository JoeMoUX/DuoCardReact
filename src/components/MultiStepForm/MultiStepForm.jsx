import React, { useState } from "react";
import { CardOption2 } from "../../containers";
import { CardDeliveryOption } from "../../components";
import { CustomizeCard } from "../../components";
import { ContactInfo } from "../../components";
import { Billing, SignUp } from "../../pages";
import TestGround from "../TestGround";

import "./MultiStepForm.css";

const MultiStepForm = () => {
  const [page, setPage] = useState(0);

  const [formDataSet, setFormDataSet] = useState({
    classic: "",
    wood: "",
    metal: "",
    organizationName: "",
    occupation: "",
    organizationAddress: "",
    website: "",
    socials: "",
    pickUp: "",
    dropOff: "",
    momoOption: "",
    bankAccountOption: "",
    dropOffAddress: "",
    deliveryContactNumber: "",
    bankAccountNumber: "",
    momoNumber: "",
  });

  const FormSectionTitles = [
    "",
    "Contact Info",
    "Card Delivery Option",
    "Make Payment",
    "Customize Card",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <CardOption2
          formDataSet={formDataSet}
          setFormDataSet={setFormDataSet}
        />
      );
    } else if (page === 1) {
      return (
        <ContactInfo
          formDataSet={formDataSet}
          setFormDataSet={setFormDataSet}
        />
      );
    } else if (page === 2) {
      return (
        <CardDeliveryOption
          formDataSet={formDataSet}
          setFormDataSet={setFormDataSet}
        />
      );
    } else if (page === 3) {
      return (
        <Billing formDataSet={formDataSet} setFormDataSet={setFormDataSet} />
      );
    } else {
      return (
        <CustomizeCard
          formDataSet={formDataSet}
          setFormDataSet={setFormDataSet}
        />
      );
    }
  };
  return (
    <div className="multi_step_container">
      {/* {console.log(formDataSet)} */}
      <div className="title_bar_signup">
        {" "}
        <h3>{FormSectionTitles[page]}</h3>
      </div>
      <div className="multi-step-form-body">{PageDisplay()}</div>
      <div className="footer_wrapper">
        <div className="footer_bar_signup">
          <button
            disabled={page === 0}
            className={page === 0 ? "disabled_button" : "footer_button"}
            onClick={() => setPage((currentPage) => currentPage - 1)}
          >
            Prev
          </button>
          <button
            disabled={page === FormSectionTitles.length - 1}
            className={
              page === FormSectionTitles.length - 1
                ? "disabled_button"
                : "footer_button"
            }
            onClick={() => setPage((currentPage) => currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
      {/* <TestGround /> */}
    </div>
  );
};

export default MultiStepForm;

import React from "react";
import contactImage from "../../assets/contactImage.svg";
import { appendErrors, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { multiStepFormData } from "../featuresR/multiStepFormData";
import "./ContactInfo.css";

function ContactInfo({ formDataSet, setFormDataSet }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  return (
    <div className="contact_info_container_div">
      <div className="contact_info_left_div">
        <img src={contactImage} alt="contactImage" />
      </div>
      <div className="contact_info_right_div">
        <div className="contact_info_input_div">
          <input
            {...register("organizationName", {
              required: "The Organization Name is required.",
              // required: true,
              minLength: {
                value: 2,
                message: "A minimum of 2 characters is permitted",
              },
              maxLength: {
                value: 50,
                message: "A maximum of 50 characters is permitted",
              },
            })}
            type="text"
            // name="organizationName"
            placeholder="Organization Name"
            className="contact_info_input_tag"
            value={formDataSet.organizationName}
            onChange={(e) => {
              setFormDataSet({
                ...formDataSet,
                organizationName: e.target.value,
              });
              dispatch(
                multiStepFormData({
                  ...formDataSet,
                  organizationName: e.target.value,
                })
              );
            }}
          />
        </div>
        <div className="contact_info_input_div">
          <input
            {...register("occupation", {
              required: "The Occupation is required.",
              // required: true,
              minLength: {
                value: 2,
                message: "A minimum of 2 characters is permitted",
              },
              maxLength: {
                value: 50,
                message: "A maximum of 50 characters is permitted",
              },
            })}
            value={formDataSet.occupation}
            onChange={(e) => {
              setFormDataSet({
                ...formDataSet,
                occupation: e.target.value,
              });
              dispatch(
                multiStepFormData({
                  ...formDataSet,
                  occupation: e.target.value,
                })
              );
            }}
            type="text"
            // name="occupation"
            placeholder="Occupation"
            className="contact_info_input_tag"
          />
        </div>
        <div className="contact_info_input_div">
          <input
            {...register("organizationAddress", {
              required: "The Organization Address is required.",
              // required: true,
              minLength: {
                value: 2,
                message: "A minimum of 2 characters is permitted",
              },
              maxLength: {
                value: 50,
                message: "A maximum of 50 characters is permitted",
              },
            })}
            value={formDataSet.organizationAddress}
            onChange={(e) => {
              setFormDataSet({
                ...formDataSet,
                organizationAddress: e.target.value,
              });
              dispatch(
                multiStepFormData({
                  ...formDataSet,
                  organizationAddress: e.target.value,
                })
              );
            }}
            type="text"
            // name="organizationAddress"
            placeholder="Organization Address"
            className="contact_info_input_tag"
          />
        </div>
        <div className="contact_info_input_div">
          <input
            {...register("website", {
              required: "The website name is required.",
              // required: true,
              minLength: {
                value: 2,
                message: "A minimum of 2 characters is permitted",
              },
              maxLength: {
                value: 50,
                message: "A maximum of 50 characters is permitted",
              },
            })}
            value={formDataSet.website}
            onChange={(e) => {
              setFormDataSet({
                ...formDataSet,
                website: e.target.value,
              });
              dispatch(
                multiStepFormData({
                  ...formDataSet,
                  website: e.target.value,
                })
              );
            }}
            type="text"
            // name="website"
            placeholder="Website Link"
            className="contact_info_input_tag"
          />
        </div>
        <div className="contact_info_input_div">
          <input
          {...register("socials", {
            required: "Your socials have to be provided.",
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
          value={formDataSet.socials}
          onChange={(e) => {
            setFormDataSet({
              ...formDataSet,
              socials: e.target.value,
            });
            dispatch(
              multiStepFormData({
                ...formDataSet,
                socials: e.target.value,
              })
            );
          }}
            type="text"
            // name="socials"
            placeholder="Socials (facebook, ig)..."
            className="contact_info_input_tag"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

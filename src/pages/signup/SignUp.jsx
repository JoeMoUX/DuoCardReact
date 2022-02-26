import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { appendErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signup } from "../../components/featuresR/user";

// const schema = yup.object().shape({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   username: yup.string().required(),
//   email: yup.string().email().required(),
//   phoneNumber: yup.number().positive().integer().required(),
//   password: yup.string().min(6).max(15).required(),
//   confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
// });

// {
//   resolver: yupResolver(schema),
// }

const SignUp = ({ formDataSet, setFormDataSet }) => {
  let navigate = useNavigate();
  // const [formDataSetValuesErrors, setFormDataSetValuesErrors] = useState({});
  // const [dataBox, setDataBox] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const dataBox = [];
  // const boxTaker = (item) => {
  //   dataBox.push(item);
  //   props.packedFormData(dataBox[0]);
  //   // navigate("/dashboard");
  // };
  // const submitForm = (data, e) => {
  //   e.preventDefault();
  //   boxTaker(data);
  //   console.log(dataBox[0]);
  // console.log(data);
  // console.log(e);}

  const dispatch = useDispatch();

  // console.log(errors)

  // const onError = () => {
  //   console.log("Error somewhere");
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormDataSetValuesErrors(validate(formDataSetValuesErrors))
  // };

  // const validate = (formDataSetValues) => {

  // };
  return (
    <div className="signup_beginning_div">
      <div className="signup_left_side">
        <img
          src="https://conotoxia.com/images/cards/cards-cta.svg"
          alt="card_image"
        />
      </div>

      <div className="signup_container">
        {/* <pre>{JSON.stringify(formDataSet, undefined, 2)}</pre> */}
        <form
          className="form_div_signup"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="signup_wrapper">
            <div className="names_container">
              <div className="signup_input_div_sub">
                <div>
                  <input
                    {...register("firstName", {
                      required: "The first name is required.",
                      // required: true,
                      minLength: {
                        value: 2,
                        message: "A minimum of 2 characters is permitted",
                      },
                      maxLength: {
                        value: 15,
                        message: "A maximum of 15 characters is permitted",
                      },
                    })}
                    type="text"
                    placeholder="First Name"
                    className="sigup_input"
                    value={formDataSet.firstName}
                    onChange={(e) => {
                      setFormDataSet({
                        ...formDataSet,
                        firstName: e.target.value,
                      });
                      dispatch(
                        signup({
                          ...formDataSet,
                          firstName: e.target.value,
                        })
                      );
                      // console.log(e.target.value);
                    }}
                    // name="firstName"
                  />
                </div>

                {errors.firstName && (
                  <div className="error_message_div">
                    <p className="error_message">{errors.firstName.message}</p>
                  </div>
                )}
              </div>

              <div className="signup_input_div_sub">
                {/* <i className="bx bx-user login__icon"></i> */}
                <div>
                  <input
                    {...register("lastName", {
                      required: "The last name is required.",
                      minLength: {
                        value: 2,
                        message: "A minimum of 2 characters is permitted",
                      },
                      maxLength: {
                        value: 15,
                        message: "A maximum of 15 characters is permitted",
                      },
                    })}
                    type="text"
                    placeholder="Last Name"
                    // name="lastName"
                    className="sigup_input"
                    value={formDataSet.lastName}
                    onChange={(e) => {
                      setFormDataSet({
                        ...formDataSet,
                        lastName: e.target.value,
                      });
                      dispatch(
                        signup({
                          ...formDataSet,
                          lastName: e.target.value,
                        })
                      );
                      // console.log(e.target.value);
                    }}
                  />
                </div>
                {errors.lastName && (
                  <div className="error_message_div">
                    <p className="error_message">{errors.lastName.message}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="signup_input_div">
              <input
                {...register("username", {
                  required: "Username is required",
                })}
                type="text"
                placeholder="Username"
                // name="username"
                className="sigup_input"
                value={formDataSet.username}
                onChange={(e) => {
                  setFormDataSet({
                    ...formDataSet,
                    username: e.target.value,
                  });
                  dispatch(
                    signup({
                      ...formDataSet,
                      username: e.target.value,
                    })
                  );
                }}
              />
              {errors.username && (
                <div className="error_message_div">
                  <p className="error_message">{errors.username.message}</p>
                </div>
              )}
            </div>

            <div className="signup_input_div">
              <input
                {...register("email", {
                  required: true,
                })}
                type="email"
                // name="email"
                placeholder="Email Address"
                className="sigup_input"
                value={formDataSet.email}
                onChange={(e) => {
                  setFormDataSet({
                    ...formDataSet,
                    email: e.target.value,
                  });
                  dispatch(
                    signup({
                      ...formDataSet,
                      email: e.target.value,
                    })
                  );
                }}
              />
              {errors.email && (
                <div className="error_message_div">
                  <p className="error_message">{errors.email.message}</p>
                </div>
              )}
            </div>

            <div className="signup_input_div">
              <input
                {...register("phoneNumber", {
                  required: true,
                  minLength: 6,
                })}
                type="number"
                placeholder="Phone Number"
                // name="phoneNumber"
                className="sigup_input"
                value={formDataSet.phoneNumber}
                onChange={(e) => {
                  setFormDataSet({
                    ...formDataSet,
                    phoneNumber: e.target.value,
                  });
                  dispatch(
                    signup({
                      ...formDataSet,
                      phoneNumber: e.target.value,
                    })
                  );
                }}
              />
              {errors.phoneNumber && (
                <div className="error_message_div">
                  <p className="error_message">{errors.phoneNumber.message}</p>
                </div>
              )}
              {/* {errors.password && <p>errors.message.message</p>} */}
            </div>

            <div className="signup_input_div">
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                type="password"
                placeholder="Password"
                // name="password"
                className="sigup_input"
                value={formDataSet.password}
                onChange={(e) => {
                  setFormDataSet({
                    ...formDataSet,
                    password: e.target.value,
                  });
                  dispatch(
                    signup({
                      ...formDataSet,
                      password: e.target.value,
                    })
                  );
                }}
              />
              {errors.password && (
                <div className="error_message_div">
                  <p className="error_message">{errors.password.message}</p>
                </div>
              )}
              {/* {errors.password && <p>errors.message.message</p>} */}
            </div>

            <div className="signup_input_div">
              <input
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                })}
                type="password"
                placeholder="Confirm Password"
                // name="confirmPassword"
                className="sigup_input"
                value={formDataSet.confirmPassword}
                onChange={(e) => {
                  setFormDataSet({
                    ...formDataSet,
                    confirmPassword: e.target.value,
                  });
                  dispatch(
                    signup({
                      ...formDataSet,
                      confirmPassword: e.target.value,
                    })
                  );
                }}
              />
              {errors.confirmPassword && (
                <div className="error_message_div">
                  <p className="error_message">{errors.confirmPassword.message}</p>
                </div>
              )}
              {/* {errors.password && <p>errors.message.message</p>} */}
            </div>
            <div className="sign_up_forgot_password">
              <a href="#">Forgot password?</a>
            </div>

            {/* <a href="#" className="login__button">
              Register
            </a> */}
            {/* {dataBox ? <p>{console.log(dataBox[0])}</p> : null} */}
            <div className="signup_button_div">
              <button
                type="submit"
                // onClick={() => {
                //   navigate("/billing");
                // }}
                className="signup_button"
              >
                Pay Now
              </button>
            </div>

            <div className="span_container">
              <span className="login__account">Already have an account?</span>
              <span
                className="login__signin"
                id="sign-up"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign In
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

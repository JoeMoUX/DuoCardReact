import React, { useState } from "react";
import {
  CardOption,
  Features,
  Footer,
  Header,
  Possibility,
  WhatIsDuoCard,
} from "../../containers";
import { CTA, Tabs, MultiStepForm } from "../../components";
import { SignUp } from "../../pages";
import "./home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestGround from "../../components/TestGround";

const Home = (props) => {
  const [formData1, setFormData1] = useState("");
  const [formDataSet, setFormDataSet] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    classic: "",
    wood: "",
    metal: "",
  });

  return (
    <div className="home">
      <Header />

      <Features />
      <Possibility />

      <Tabs />
      <CardOption formDataSet={formDataSet} setFormDataSet={setFormDataSet} />
      {/* <MultiStepForm /> */}

      {/* <SignUp formDataSet={formDataSet} setFormDataSet={setFormDataSet}/> */}
      {/* {formData1 && console.log(formData1.firstName)} */}
      {/* <TestGround /> */}
      <Footer />
    </div>
  );
};

export default Home;

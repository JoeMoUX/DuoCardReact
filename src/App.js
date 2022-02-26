import React, { useState } from "react";
import {

  Features,
  Footer,
  Header,
  Possibility,
  WhatIsDuoCard,
} from "./containers";
import { CTA, Navbar, MultiStepForm } from "./components";

import {
  Home,
  About,
  Billing,
  ChooseCard,
  ConfirmationTransaction,
  Dashboard,
  Subscriptions,
  CardSettings,
  Profile,
  ErrorPage,
  SignUp,
  Login,
} from "./pages";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [formData, setFormData] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              formDataToApp={(formDataInfo) => {
                setFormData(formDataInfo);
              }}
            />
          }
        />
        <Route path="what_is_duo_card" element={<WhatIsDuoCard />} />

        <Route path="login" element={<Login />} />

        <Route path="about" element={<About />} />
        <Route path="billing" element={<Billing />} />
        <Route path="chooseCard" element={<ChooseCard />} />
        <Route
          path="confirmationTransaction"
          element={<ConfirmationTransaction />}
        />

        <Route
          path="dashboard"
          element={<Dashboard userInfoFromForm={formData} />}>
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="cardsettings" element={<CardSettings />} />
          <Route path="profile" element={<Profile />} />

        </Route>

        <Route path="errorPage" element={<ErrorPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="multiStepForm" element={<MultiStepForm />} />

      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

export default App;

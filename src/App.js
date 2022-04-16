import React, { useState } from "react";
import { WhatIsDuoCard, Footer } from "./containers";
import { Navbar, MultiStepForm } from "./components";

import {
  Home,
  About,
  Billing,
  ChooseCard,
  ConfirmationTransaction,
  Dashboard,
  ErrorPage,
  SignUp,
  Login,
  Compatibility,
} from "./pages";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="what_is_duo_card" element={<WhatIsDuoCard />} />

        <Route path="login" element={<Login />} />

        <Route path="about" element={<About />} />
        <Route path="compatibility" element={<Compatibility />} />
        <Route path="billing" element={<Billing />} />
        <Route path="chooseCard" element={<ChooseCard />} />
        <Route
          path="confirmationTransaction"
          element={<ConfirmationTransaction />}
        />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="errorPage" element={<ErrorPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="multiStepForm" element={<MultiStepForm />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

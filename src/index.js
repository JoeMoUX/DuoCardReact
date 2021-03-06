import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./components/featuresR/user";
import multiStepFormDataReducer from "./components/featuresR/multiStepFormData";

const store = configureStore({
  reducer: {
    user: userReducer,
    multiStepFormData: multiStepFormDataReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </Provider>,

  document.getElementById("root")
);

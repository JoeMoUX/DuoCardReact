import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmationTransaction = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>This is the Confirm page</h1>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Go to User Dashboard Page
      </button>
      ;
    </div>
  );
};

export default ConfirmationTransaction;

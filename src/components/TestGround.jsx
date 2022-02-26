import React from "react";
import { useSelector } from "react-redux";
import "./TestGround.css";

const TestGround = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="testground">
      TestGround
      <div>
        First Name: {user.firstName}, Last Name: {user.lastName}, Userame:
        {user.username}, Email: {user.email}, Phone Number: {user.phoneNumber},
        Password: {user.password}, Confirm Password:{user.confirmPassword},
        classic: {user.confirmPassword}, wood:{user.confirmPassword}, metal:
        {user.confirmPassword},
      </div>
    </div>
  );
};

export default TestGround;

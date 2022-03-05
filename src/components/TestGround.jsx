import React from "react";
import { useSelector } from "react-redux";
import "./TestGround.css";

const TestGround = () => {
  const user = useSelector((state) => state.user.value);
  const multiStepFormData = useSelector(
    (state) => state.multiStepFormData.value
  );
  return (
    <div className="testground">
      TestGround
      <div>
        First Name: {user.firstName}, Last Name: {user.lastName}, Userame:
        {user.username}, Email: {user.email}, Phone Number: {user.phoneNumber},
        Password: {user.password}, Confirm Password:{user.confirmPassword},
      </div>
      <br />
      <br />
      <div>
        Classic: {multiStepFormData.classic}, 
        Wood:{multiStepFormData.wood}, 
        Metal:{multiStepFormData.metal}, 
        Organization Name:{multiStepFormData.organizationName}, 
        Occupation:{multiStepFormData.occupation}, 
        OrganizationAddress:{multiStepFormData.organizationAddress}, 
        Website:{multiStepFormData.website}, Socials:{multiStepFormData.socials}, 
        PickUp:{multiStepFormData.pickUp}, 
        Drop Off:{multiStepFormData.dropOff},
        Momo Option: {multiStepFormData.momoOption}, 
        Bank Account Option:{multiStepFormData.bankAccountOption}, 
        Drop Off Address:{multiStepFormData.dropOffAddress}, 
        Delivery Contact Number:{multiStepFormData.deliveryContactNumber}, 
        Bank Account Number:{multiStepFormData.bankAccountNumber}, 
        Momo Number:{multiStepFormData.momoNumber}
      </div>
    </div>
  );
};

export default TestGround;

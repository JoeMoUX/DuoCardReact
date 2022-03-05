import { createSlice } from "@reduxjs/toolkit";

export const multiStepFormDataSlice = createSlice({
  name: "multiStepFormData",
  initialState: {
    value: {
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
    },
  },
  reducers: {
    multiStepFormData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { multiStepFormData } = multiStepFormDataSlice.actions;

export default multiStepFormDataSlice.reducer;

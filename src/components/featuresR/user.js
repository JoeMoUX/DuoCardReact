import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  },
  reducers: {
    signup: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { signup } = userSlice.actions;

export default userSlice.reducer;

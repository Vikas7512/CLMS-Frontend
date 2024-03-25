import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userDetails: {
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setAuthUser } = authSlice.actions;

export const userReducer = authSlice.reducer;

import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";

const selectAuth = (state) => state.auth || initialState;

export const selectUserDetails = createSelector(
  [selectAuth],
  (auth) => auth.userDetails
);

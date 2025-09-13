import { createSlice } from "@reduxjs/toolkit";

const user = { loggedIn: false, data: null };

const authSlice = createSlice({
  name: "auth",
  initialState: user,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.data = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.data = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice;

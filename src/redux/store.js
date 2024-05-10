import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import profileReducer from "./profileSlice";

const store = configureStore({
  reducer: {
    loginReducer: loginReducer,
    profileReducer: profileReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import profileReducer from "./profileSlice";
import getAllOpenOrdersReducer from "./getAllOpenOrdersSlice";
import getAllOrdersReducer from "./getAllOrdersSlice";
import depositReducer from "./depositSlice";
import updateProfileReducer from "./updateProfileSlice"

const store = configureStore({
  reducer: {
    loginReducer: loginReducer,
    profileReducer: profileReducer,
    getAllOpenOrdersReducer: getAllOpenOrdersReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    depositReducer: depositReducer,
    updateProfileReducer: updateProfileReducer,
  },
});

export default store;

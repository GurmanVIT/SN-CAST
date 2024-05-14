import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import profileReducer from "./profileSlice";
import getAllOpenOrdersReducer from "./getAllOpenOrdersSlice";
import getAllOrdersReducer from "./getAllOrdersSlice";
import depositReducer from "./depositSlice";
import updateProfileReducer from "./updateProfileSlice";
import closeTradeReducer from "./closeTradeSlice";
import cancelOrderReducer from "./cancelOrderSlice";

const store = configureStore({
  reducer: {
    loginReducer: loginReducer,
    profileReducer: profileReducer,
    getAllOpenOrdersReducer: getAllOpenOrdersReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    depositReducer: depositReducer,
    updateProfileReducer: updateProfileReducer,
    closeTradeReducer: closeTradeReducer,
    cancelOrderReducer: cancelOrderReducer,
  },
});

export default store;

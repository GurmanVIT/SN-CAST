import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import profileReducer from "./profileSlice";
import getAllOpenOrdersReducer from "./getAllOpenOrdersSlice";
import getAllOpenOrdersByBitReducer from "./getAllOpenOrdersBybitSlice";
import getAllOrdersReducer from "./getAllOrdersSlice";
import getAllOrdersByBitReducer from "./getAllOrdersBybitSlice";
import depositReducer from "./depositSlice";
import updateProfileReducer from "./updateProfileSlice";
import closeTradeReducer from "./closeTradeSlice";
import cancelOrderReducer from "./cancelOrderSlice";
import closeTradeByBitReducer from "./closeTradeBybitSlice";
import cancelOrderByBitReducer from "./cancelOrderBybitSlice";

const store = configureStore({
  reducer: {
    loginReducer: loginReducer,
    profileReducer: profileReducer,
    getAllOpenOrdersReducer: getAllOpenOrdersReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    getAllOpenOrdersByBitReducer: getAllOpenOrdersByBitReducer,
    getAllOrdersByBitReducer: getAllOrdersByBitReducer,
    depositReducer: depositReducer,
    updateProfileReducer: updateProfileReducer,
    closeTradeReducer: closeTradeReducer,
    cancelOrderReducer: cancelOrderReducer,
    cancelOrderByBitReducer: cancelOrderByBitReducer,
    closeTradeByBitReducer: closeTradeByBitReducer,
  },
});

export default store;

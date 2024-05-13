// // src/redux/slices/authSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { ApiBaseUrl } from "../utils/Constants";

// export const depositData = createAsyncThunk("depositData", async () => {
//     try {
//         const config = {
//             headers: {
//                 "Access-Control-Allow-Origin": "*",
//                 "Content-Type": "application/json",
//             },
//         };
//         const url = ApiBaseUrl + depositApi
//         const response = await axios.get(url, config);
//         return response.data;
//     } catch (error) {
//         throw error.response.data;
//     }
// });

// const depositSlice = createSlice({
//     name: "depositReducer",

//     initialState: {
//         isLoading: false,
//         data: null,
//     },
//     reducers: {
//         clearDeposit: (state) => {
//             // Reset the data property to an empty array
//             state.data = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(depositData.pending, (state) => {
//                 state.isLoading = true;
//             })
//             .addCase(depositData.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.data = action.payload;
//             })
//             .addCase(depositData.rejected, (state) => {
//                 state.isError = false;
//             });
//     },
// });

// export const { clearDeposit } = depositSlice.actions;
// export default depositSlice.reducer;
